import { FC, useEffect, useReducer } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { cartReducer } from "./cartReducer";
import { CartContext } from "./CartContext";

const CART_INITIAL_STATE = {
  isLoaded: false,
  cart: [],
  numberOfItems: 0,
  tax: 0,
  total: 0,
  shippingAddress: undefined,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  // Efecto
  useEffect(() => {
    try {
      const cookieProducts = JSON.parse(Cookie.get("cart"));
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: "[Cart] - LoadCart from cookies | storage",
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    if (Cookie.get("firstName")) {
      const shippingAddress = {
        firstName: Cookie.get("firstName") || "",
        lastName: Cookie.get("lastName") || "",
        address: Cookie.get("address") || "",
        address2: Cookie.get("address2") || "",
        zip: Cookie.get("zip") || "",
        city: Cookie.get("city") || "",
        country: Cookie.get("country") || "",
        phone: Cookie.get("phone") || "",
        email: Cookie.get("email") || "",
        taxId: Cookie.get("taxId") || "",
      };

      dispatch({
        type: "[Cart] - LoadAddress from Cookies",
        payload: shippingAddress,
      });
    }
  }, []);

  useEffect(() => {
    Cookie.set("cart", JSON.stringify(state.cart));

    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.precio * current.quantity + prev,
      0
    );

    const orderSummary = {
      numberOfItems,
      total: subTotal,
    };

    dispatch({ type: "[Cart] - Update order summary", payload: orderSummary });
  }, [state.cart]);

  const addProductToCart = (product) => {
    const productInCart = state.cart.some((p) => p._id === product._id);
    if (!productInCart)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product],
      });

    const productInCartButDifferentSize = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );
    if (!productInCartButDifferentSize)
      return dispatch({
        type: "[Cart] - Update products in cart",
        payload: [...state.cart, product],
      });

    const updatedProducts = state.cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      p.quantity += product.quantity;
      return p;
    });

    dispatch({
      type: "[Cart] - Update products in cart",
      payload: updatedProducts,
    });
  };

  const updateCartQuantity = (product) => {
    dispatch({ type: "[Cart] - Change cart quantity", payload: product });
  };

  const removeCartProduct = (product) => {
    dispatch({ type: "[Cart] - Remove product in cart", payload: product });
  };

  const updateAddress = (address) => {
    Cookie.set("firstName", address.name);
    Cookie.set("lastName", address.lastName);
    Cookie.set("address", address.address);
    Cookie.set("zip", address.zipCode);
    Cookie.set("city", address.city);
    Cookie.set("country", address.country);
    Cookie.set("taxId", address.taxId);
    Cookie.set("phone", address.phone);
    Cookie.set("email", address.email);

    dispatch({ type: "[Cart] - Update Address", payload: address });
  };

  const createOrder = async () => {
    if (!state.shippingAddress) {
      throw new Error("No hay dirección de entrega");
    }
    console.log(state.cart);
    const body = {
      orderItems: state.cart.map((p) => ({
        ...p,
      })),
      shippingAddress: state.shippingAddress,
      numberOfItems: state.numberOfItems,
      total: state.total,
      isPaid: false,
    };

    try {
      const data = await axios.post("/api/orders", body);

      dispatch({ type: "[Cart] - Order complete" });

      return {
        data: data,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }
      return {
        hasError: true,
        message: "Error no controlado, hable con el administrador",
      };
    }
  };

  return (
    <CartContext.Provider
      value={{
        ...state,

        // Methods
        addProductToCart,
        removeCartProduct,
        updateCartQuantity,
        updateAddress,

        // Orders
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

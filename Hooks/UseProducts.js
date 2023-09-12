import { useEffect, useState } from "react";
import axios from "axios";

export function useProduct(filter) {
  const [products, setProducts] = useState([]);


  const [argentinaProducts, setArgentinaProducts] = useState([]);
  const [bocaProducts, setBocaProducts] = useState([]);
  const [riverProducts, setRiverProducts] = useState([]);
  const [regionalproducts, setRegionalProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProductsFromAPI() {
      try {
        let url = "/api/royerproduct"; //
        const response = await axios.get(url);
        const products = response.data;
        console.log(products);

        setRegionalProducts(
          response.data.filter((e) => e.categoria == "regional")
        );
        setArgentinaProducts(
          response.data.filter((e) => e.subcategoria == "argentina")
        );
        setBocaProducts(response.data.filter((e) => e.subcategoria == "boca"));
        setRiverProducts(
          response.data.filter((e) => e.subcategoria == "river")
        );

        const filterProducts =
          filter && products.filter((e) => e.slug.includes(filter));
        setProducts(filter ? filterProducts : products);
        setIsLoading(false); // Indicar que la carga ha finalizado
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Indicar que la carga ha finalizado
      }
    }

    getProductsFromAPI();
  }, [filter]); // Dependencia para que el hook se ejecute cuando cambie el filtro

  return {
    products,
    isLoading,

    regionalproducts,
    argentinaProducts,
    bocaProducts,
    riverProducts,
  };
}

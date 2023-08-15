import ProductRoyer from "@/Models/ProductRoyer";
import { db } from ".";





export const getProductBySlug = async (slug) => {
    try {
        await db.connectDB();
        const product = await ProductRoyer.findOne({ slug }).lean();


        if (!product) {
            return null;
        }

        product.images = product.images.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}products/${image}`
        });

        return JSON.parse(JSON.stringify(product));
    } catch (err) {
        console.log(err)
        return null
    }
}


export const getAllProductSlugs = async ()=> {
    await db.connectDB();
    const slugs = await ProductRoyer.find().select('slug -_id').lean();


    return slugs;
}




export const getProductsByTerm = async (term) => {

    term = term.toString().toLowerCase();

    await db.connectDB();
    const products = await ProductRoyer.find({
        $text: { $search: term }
    })
        .select('title images price inStock slug -_id')
        .lean();



    const updatedProducts = products.map(product => {
        product.images = product.images.map(image => {
            return image.includes('http') ? image : `${process.env.HOST_NAME}products/${image}`
        });

        return product;
    })


    return updatedProducts;
}


export const getAllProducts = async () => {
    await db.connectDB();
    const products = await ProductRoyer.find().lean();

    return JSON.parse(JSON.stringify(products));
}



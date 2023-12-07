import { getAllCategory } from "../../services/categories.services";
import { totalProductInDb } from "../../services/product.services";

export const loader = async () => {
    try {
        /* pedido a services*/ 
        const {data : categories} = await getAllCategory()
        const {data : totalProducts} = await totalProductInDb()
        
        return {
            categories,
            totalProducts
        }
    } catch (error) {
        console.log(error);
    }
}
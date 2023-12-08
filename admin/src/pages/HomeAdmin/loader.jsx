import { getAllCategory } from "../../services/categories.services";
import { totalProductInDb } from "../../services/product.services";
import {totalOfertas} from '../../services/discount.services'

export const loader = async () => {
    try {
        /* pedido a services*/ 
        const {data : categories} = await getAllCategory()
        const {data : totalProducts} = await totalProductInDb()
        const {data : ofertas} = await totalOfertas();
        
        return {
            categories,
            totalProducts,
            ofertas 
        }
    } catch (error) {
        console.log(error);
    }
}
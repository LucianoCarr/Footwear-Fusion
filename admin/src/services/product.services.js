import { UseFetch } from "../hooks/UseFetch";

export const totalProductInDb = async () => {
    try {
       return await UseFetch('/products/count')
        
    } catch (error) {
        console.log(error);
    }
}

export const getallProducts = async () => {
    try {
       return await UseFetch('/products')
        
    } catch (error) {
        console.log(error);
    }
}
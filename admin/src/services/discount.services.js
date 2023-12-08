import { UseFetch } from "../hooks/UseFetch";

export const totalOfertas = async () => {
    try {
       return await UseFetch('/products/discount')
        
    } catch (error) {
        console.log(error);
    }
}
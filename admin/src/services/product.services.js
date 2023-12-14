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

export const createProduct = async (formValues) => {
    try {
       return await UseFetch("products","POST",formValues)
        
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (formValues) => {
    try {
       return await UseFetch(`products/${formValues.id}`,"PUT",formValues)
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
       return await UseFetch(`products/${id}`,"DELETE",null)
        
    } catch (error) {
        console.log(error);
    }
}
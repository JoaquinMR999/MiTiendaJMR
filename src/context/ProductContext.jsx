import React, { createContext, useState, useEffect, Children } from "react";
import axios from "axios";

const API_URL = "https://localhost:3000/products";

export const ProductsContext = createContext(API_URL);

export const ProductsProvider = ({ children}) =>{ 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(()  => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (e) {
            if (e.response && e.response.status === 404){
                setError("No se encuentra ningun producto", e);
            } else {
                setError ("Error al cargar los productos",e);
            }
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };

    const getProductById = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get (`${API_URL}/${id}`);
            const product = response.data;
            return product;
            } catch (e) {
                if (e.response && e.response.status === 404){
                    setError(`No se encuentra ningun producto con el ${id}`,e);
                } else {
                    setError(`Error al intentar obtener el producto ${id}`,e);
                }
            } finally { setLoading(false); }

        };

const updateProduct = async (id, editedProduct) => {
    try{
        setLoading(true);
        const response = await axios.put(`${API_URL}/${id}`, editedProduct);
        const updatedProduct = {
            ...response.data,
            updatedAt: new Date().toISOString(),
        };    
    }catch (e) {
        if(e.response && e.response.status === 404) {
            setError(`el producto ${id} ya no existe`, e);
        }else{
            setError(`Error al guardar los cambios en el producto ${id}`,e);
        }
        }finally { setLoading(false);
        }
    };

    const deleteProduct = async (id) => {
        try{
            setLoading(true);
            await axios.delete(`${API_URL}/${id}`);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
        } catch (e) { 
            if(e.response && e.response.status === 404){
                setError(`El producto ${id} ya no existia`, e.response.status);
            } else{
                setError(`Ha ocurrido un error al eliminar el producto ${id}`,e);
            }
        }finally {setLoading(false);}
    };

    const addProduct = async (newProduct) => {
        try{
            setLoading(true);
            const response = await axios.post(API_URL, newProduct);
            const addedProduct = response.data;
            setProducts((prevProducts) =>[...prevProducts,addedProduct]);
            } catch(e){
                setError("Error al crear un nuevo producto",e);

            }finally {
                setLoading(false);
            }
    };

    return(
        <ProductsContext.Provider
        value={{
            products,
            loading,
            error,
            getProducts,
            getProductById,
            updateProduct,
            deleteProduct,
            addProduct,
            }}
            >
                {children}
            </ProductsContext.Provider>
    )

}

        
    
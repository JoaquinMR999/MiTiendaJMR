import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const API_URL = "http://localhost:3000/productos";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState({
    id: null,
    title: "",
    price: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProductsFromAPI = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsFromAPI();
  }, []);

  const getProductDetails = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product details: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (editedProduct.id !== null && editedProduct.id !== undefined) {
      editProduct();
    } else {
      createProduct();
    }
  };

  const createProduct = async () => {
    try {
      setIsLoading(true);
      const newId = uuid();
      const newProduct = { ...editedProduct, id: newId };
      const response = await axios.post(API_URL, newProduct);
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setEditedProduct({ id: null, title: "", price: "", description: "" });
    } catch (error) {
      console.error("Error adding products: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const editProduct = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(
        `${API_URL}/${editedProduct.id}`,
        editedProduct
      );
      const updatedProduct = response.data;
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
      setEditedProduct({ id: null, title: "", price: "", description: "" });
    } catch (error) {
      console.error("Error editing product: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleEditProductDetails = (id, title, price, description) => {
    const selectedProduct = products.find((product) => product.id === id);
    setEditedProduct({ ...selectedProduct, title, price, description });
  };

  return {
    products,
    editedProduct,
    isLoading,
    deleteProduct,
    handleEditProductDetails,
    handleSave,
    handleInputChange,
    getProductDetails,
  };
};

export default useProducts;
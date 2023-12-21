import { useState, useEffect } from "react";
import { getProductsShirtForMen, getProductsById } from "../services";

export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductsShirtForMen()
          .then((response)=> {
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return { productsData }
}


export const useGetProductById = (id) => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        getProductsById(id)
        .then((response)=> {
            setProductData(response.data)
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);

    return { productData }
}
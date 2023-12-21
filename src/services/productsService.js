import axios from "axios";

export async function getProductsShirtForMen(){
    return await axios.get(`https://dummyjson.com/products/category/mens-shirts`);
}
export async function getProductsShoesForWomen(){
    return await axios.get(`https://dummyjson.com/products/category/womens-shoes`);
}

export async function getProductsById(id=1){
    return await axios.get(`https://dummyjson.com/products/${id}`);
}




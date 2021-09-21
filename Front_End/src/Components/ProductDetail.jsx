import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {

const [products, setProducts] = useState([])

const {id} = useParams();
// const history = useHistory();

useEffect(() => {
    getSingleProduct();
},[])


const getSingleProduct = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/api/product/${id}/`)
  console.log(data);
  setProducts(data);


}

// const deleteUser = async (id) => {
//     await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
//     history.push("/")
// }



    return (
        <div>
            <h2>Detail of Single Product </h2>
            <hr></hr>
            <div>

            
            <img src = {products.url} alt={products.image_name}/>
            
            <p>Product Name : {products.productname}</p>
            <p>Original Price : {products.original_price} </p>
            <p>Price : {products.price} </p>
            <p>Product Description : {products.description} </p>


            </div>




            
        </div>
    );
};

export default ProductDetail;
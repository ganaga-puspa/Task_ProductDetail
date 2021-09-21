import axios from 'axios';
import React ,{useState,useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export  function Product(props) {


    // const handleLogout = () => {    
    //     props.history.push('/');
    //   }

    // let URL1 = "http://127.0.0.1:8000/api/basetable/"
    // let URL2 = "http://127.0.0.1:8000/api/properties/"

    // const promise1 = axios.get(URL1);
    // const promise2 = axios.get(URL2);

    // Promise.all([promise1, promise2]).then(function(values) {
    // console.log(values);
    // });

    const [products,setProducts] = useState([])

    const getProducts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/product/')
        // console.log(response.data)
        setProducts(response.data)
    }

    useEffect (() =>{
        getProducts();

    },[] )



    return (
        <div >
            <div className="size" >
            {/* <div>
        
                <input type="button" onClick={handleLogout} value="Logout" />
                </div> */}
           <h1>Show All the products</h1>
           Total Products:{products.length}
           {
               products.map((product,index) =>(

                <Card class="m-2 rounded shadow-lg " style={{width: '22rem'}} >
                <Card.Img varient="top" src = {product.url} alt={product.image_name}/>
                <Card.Body>

                <Card.Title>Product Name : {product.productname} </Card.Title>
                <Card.Text>Original Price : {product.original_price} </Card.Text>
                <Card.Text>Our Price : {product.price} </Card.Text>
                <Card.Text>Product Description : {product.description} </Card.Text>

                <Link className="btn btn-outline-primary mr-2" to={`/${product.id}/productDetail`}>SHOW DETAIL</Link>

                </Card.Body>
                </Card>

                // <div>
                //     {/* <p>{product.url} </p> */}
                //     <img src = {product.url} alt={product.image_name}/> 
                //     <p>{product.productname} </p>
                //     <p>{product.original_price} </p>
                //     <p>{product.price} </p>
                //     <p>{product.description} </p>
                // </div>


               )
               )
           }
           </div>
        </div>
    )
}

 

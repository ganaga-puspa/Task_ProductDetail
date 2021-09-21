import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Login from './Login';


const AddProduct = () => {

    const navigate = useNavigate();

    const [auth,setAuth] =useState(false);

    const [productname, setProductName] = useState(null)
    const [description, setDescription] = useState(null)
    const [original_price, setOriginalPrice] = useState(null)
    const [price, setPrice] = useState(null)
    const [image_name, setImageName] = useState(null)
    const [url, setUrl] = useState(null)
    const [is_listimage, setListImage] = useState(null)

//validation for allow only string
    function handleChange(e)  {
      if(e.target.value.match("^[a-zA-Z ]*$") != null){
        e.preventDefault();
      setProductName(e.target.value)  ;

      }    
    };

    


    const addNewProduct = async () => {
        let formField = new FormData()
        formField.append('productname',productname)
        formField.append('description',description)
        formField.append('original_price',original_price)
        formField.append('price',price)
        formField.append('image_name',image_name)
        formField.append('url',url)
        formField.append('is_listimage',is_listimage)

        

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/product/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          navigate('/')
        })
    }
   
    return (
      <>
      {
        auth == true ? <Login /> : (

          <div className="container">
            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        
        
        
                
          <div className="form-group">
            <input
              type="type"
              className="form-control form-control-lg"
              placeholder="Enter the product name"
              name="productname"
              value={productname}
              onChange={handleChange}
              // onChange={e => { handleChange1(e); handleChange(e) }}
              // onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the product description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the product orginal price "
              name="original_price"
              value={original_price}
              onChange={(e) => setOriginalPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the  price "
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the image name "
              name="image_name"
              value={image_name}
              onChange={(e) => setImageName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the image url "
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="checkbox"
              name="is_listimage"
              value={is_listimage}
              onChange={(e) => setListImage(e.target.value)}
            /> 
               <label>Is listimage </label>
          </div>


          <button className="btn btn-primary btn-block" onClick={addNewProduct}>Add Product</button>
       
      </div>
    </div>
        </div>
    
        )
      }
      </>
        );
};

export default AddProduct;
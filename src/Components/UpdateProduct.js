import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProduct = ()=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        // console.warn(params);
        getProductDetails();
    },[]);

    const getProductDetails = async()=>{
        let result = await fetch(`https://e-commbychris.herokuapp.com/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async()=>{
        let result = fetch(`https://e-commbychris.herokuapp.com/product/${params.id}`, {
            method:'Put',
            body:JSON.stringify({name, price, category, company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        alert("Product updated successfully!")
        navigate("/")
    }

    return(
        <div>
            <h1>Update Product</h1>
            <br></br>
            <input className="inputBox" value={name} type="test" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter product name"></input>
            <br></br>

            <input className="inputBox" value={price} type="test" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter product price"></input>
            <br></br>

            <input className="inputBox" value={category} type="test" onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter product category"></input>
            <br></br>

            <input className="inputBox" value={company} type="test" onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter product company"></input>
            <br></br>

            <button onClick={updateProduct} className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;
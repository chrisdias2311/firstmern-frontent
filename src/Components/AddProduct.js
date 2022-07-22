import React from 'react';

const AddProduct = ()=>{
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);

    const addProduct = async()=>{
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        const owner = localStorage.getItem('owner');

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('https://e-commbychris.herokuapp.com/add-product',{
            method:'post',
            body:JSON.stringify({name, price, category, company, userId, owner}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        alert("Product added successfully");
        setName('');
        setPrice('');
        setCategory('');
        setCompany('');
    }

    return(
        <div>
            <br></br>
            <h1>Add Product</h1>
            <br></br>
            <p className='note'>Please enter the initials of category and company capital!</p>
            <br></br>
            <input className="inputBox" value={name} type="test" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter product name"></input>
            {error && !name &&<span className='invalid-input'>Enter valid name</span>}
            <br></br>

            <input className="inputBox" value={price} type="test" onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter product price"></input>
            {error && !price &&<span className='invalid-input'>Enter valid price</span>}
            <br></br>

            <input className="inputBox" value={category} type="test" onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter product category"></input>
            {error && !category &&<span className='invalid-input'>Enter valid category</span>}
            <br></br>

            <input className="inputBox" value={company} type="test" onChange={(e)=>{setCompany(e.target.value)}} placeholder="Enter product company"></input>
            {error && !company &&<span className='invalid-input'>Enter valid company</span>}
            <br></br>

            <button onClick={addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;
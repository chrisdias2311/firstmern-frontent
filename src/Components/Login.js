import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();


    // useEffect(()=>{
    //     const auth = localStorage.getItem('user');
    //     if(auth){
    //         navigate("/");
    //     }
    // })


    const navigateToRegister = ()=>{
        navigate('/signup')
    }


    const loginHandle = async () => {
        let result = await fetch('https://e-commbychris.herokuapp.com/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            alert("You have been sucessfully logged in!")
            navigate("/")

            const name = JSON.parse(localStorage.getItem('user')).name;
            console.warn(name);
            localStorage.setItem('owner', name)
        } else {
            alert("Please enter correct details")
        }
    }

    return (
        <div className="login">
            <br></br>
            <h1>Login</h1>
            <br></br>
            <input className="inputBox" type="text" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <br></br>
            <input className="inputBox" type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <br></br>
            <button className="appButton" type="button" onClick={loginHandle}>Login</button>
            <button className="appButton" type="button" onClick={navigateToRegister}>Go to Register</button>
        </div>
    )
}

export default Login;
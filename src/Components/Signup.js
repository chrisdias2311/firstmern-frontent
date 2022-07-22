import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
    })

    const navigetToLogin = () => {
        navigate('/login');
    }

    const registerUser = async () => {
        if (name.length > 1 && password.length > 1 && email.length > 1) {
            let result = await fetch('https://e-commbychris.herokuapp.com/register', {
                method: 'post',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            result = await result.json()

            localStorage.setItem("user", JSON.stringify(result));
            localStorage.setItem("owner", name);

            if (result) {
                alert("You have been succesfully registered!")
                navigate('/');
            }
        } else {
            alert("Please enter valid details");
        }
    }

    return (
        <div className="SignUp">
            <br></br>
            <h1>Signup/Register</h1>
            <br></br>

            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></input>
            <br></br>
            <input className="inputBox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"></input>
            <br></br>
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"></input>
            <br></br>

            <button onClick={registerUser} className="appButton">Register</button>
            <button onClick={navigetToLogin} className="appButton">Go to Login</button>
        </div>
    )
}

export default Signup;
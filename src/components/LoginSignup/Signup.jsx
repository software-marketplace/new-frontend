import React, { useState } from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';
import { baseUrl } from '../../config';

export default function Signup({ setLoginClose, setIsModalOpen, setUser }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else if (name === "name") {
            setName(value);
        } else if (name === "mobile") {
            setMobile(value);
        }

        if (error) setError("");
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${baseUrl}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, name, mobile }),
        })

        if (response.ok) {
            setLoginClose(true);
        } else {
            setError("Invalid Credentials");
        }
    }

    return (
        <div className="wrapper login">
            <div className="container2">
                <div className="col-left">
                    <div className="login-text">
                        <h2>Welcome!</h2>
                        <p>Already have an account.<br />Please Login</p> <a href className="btn" onClick={() => setLoginClose(true)}>Login</a>

                    </div>
                </div>
                <CloseIcon className='closeIcon' onClick={() => setIsModalOpen(false)} />
                <div className="col-right">
                    <div className="login-form">
                        <h2>SignUp</h2>
                        <form onSubmit={handleSignup}>
                            <p> <input type="text" placeholder="Name*" required onChange={handleChange} /> </p>
                            <p> <input type="text" placeholder="Email Address*" required onChange={handleChange} /> </p>
                            <p> <input type="password" placeholder="Password*" required onChange={handleChange} /> </p>
                            <p> <input type="tel" placeholder="Mobile Number*" required onChange={handleChange} /> </p>
                            <p className="error">{error}</p>

                            <p> <input type="submit" defaultValue="Sign In" /> </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

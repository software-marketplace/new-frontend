import React, { useState } from 'react'
import '../../pages/login-signupmodal/loginSignup.css'
import CloseIcon from '@mui/icons-material/Close';
import { baseUrl } from '../../config';

export default function Login({ setLoginClose, setIsModalOpen, setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            const { access_token, name } = await response.json();
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            setIsModalOpen(false);
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
                        <p>Create your account.<br />For Free!</p> <a href className="btn" onClick={() => setLoginClose(false)}>Sign Up</a>

                    </div>
                </div>
                <CloseIcon className='closeIcon' onClick={() => setIsModalOpen(false)} />
                <div className="col-right">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <p> <input type="text" placeholder="Email*" required onChange={(e) => setEmail(e.target.value)} /> </p>
                            <p> <input type="password" placeholder="Password*" required onChange={(e) => setPassword(e.target.value)} /> </p>
                            <p className="error">{error}</p>
                            <p> <input type="submit" defaultValue="Sign In" /> </p>
                            <p> <a href>Forgot password?</a> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

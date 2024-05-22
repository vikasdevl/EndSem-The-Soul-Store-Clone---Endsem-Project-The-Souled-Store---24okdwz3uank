import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormInput({ label, type, id, placeholder, value, onChange }) {
    return (
        <div className="flex flex-col justify-center p-1 mt-3 text-xs bg-black bg-opacity-0 text-neutral-400">
            <label htmlFor={id} className="sr-only">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                aria-label={label}
                value={value}
                onChange={onChange}
                className="justify-center items-start px-3.5 py-5 bg-white rounded-md border border-solid border-zinc-400 max-md:pr-5"
            />
        </div>
    );
}

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('https://academics.newtonschool.co/api/v1/user/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'projectId': '24okdwz3uank',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "appType": "ecommerce"
            }),
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((data) => {
                    throw new Error(data.message || 'Login failed');
                });
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            localStorage.setItem('token', data.token);
            alert("Successfully logged in");
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        })
        .catch((error) => {
            console.error(error);
            alert(error.message || 'Invalid email or password');
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 text-fontclr">
            <div className="bg-white shadow-lg p-6 w-full max-w-md">
                <div className="text-center text-xl font-bold mb-4">
                    Login with The Souled Store
                </div>
                <div className="flex justify-center mb-4">
                    <button className="px-4 py-2 bg-customColor text-white w-6 h-14 bordercu">
                        LOGIN
                    </button>
                    <button
                        className="ml-1 px-4 py-2 bg-gray-100 text-gray-700 w-6 h-14 bordercu"
                        onClick={() => navigate("/register")}
                    >
                        REGISTER
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-subbtncol text-white rounded-lg"
                        >
                            PROCEED
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4 flex justify-center">
                    <p>New User?</p>
                    <Link
                        to="/register"
                        className="text-blue-500 ml-1"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

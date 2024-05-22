import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function InputField({ label, type, id, placeholder, value, onChange }) {
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

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert("Please fill in all fields");
            return;
        }
        fetch("https://academics.newtonschool.co/api/v1/user/signup", {
            method: "POST",
            headers: {
                accept: "application/json",
                projectId: "24okdwz3uank",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username,
                email: email,
                password: password,
                appType: "ecommerce",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    alert("User Created");
                    navigate("/login");
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Error creating user");
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 text-fontclr">
            <div className="bg-white shadow-lg p-6 w-full max-w-md">
                <div className="text-center text-xl font-bold mb-4">Register with The Souled Store</div>
                <div className="flex justify-center mb-4">
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 w-6 h-14 bordercu" onClick={() => navigate('/login')}>LOGIN</button>
                    <button className="ml-1 px-4 py-2 bg-customColor text-white w-6 h-14 bordercu" onClick={() => navigate('/register')}>REGISTER</button>
                </div>
                <form className="space-y-4" onSubmit={handleSignUp}>
                    <InputField
                        label="Name"
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputField
                        label="Email"
                        type="email"
                        id="email"
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputField
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
                            className="w-full px-4 py-2 bg-customColor text-white rounded-lg"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4 flex justify-center">
                    <p>Already a customer?</p>
                    <Link to="/login" className="text-red-600 ml-1">Login</Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom"; 
import axios from "axios";

function SignIn() {
    const context = useContext(MyContext);
    const history = useHistory();
    const [formData, setFormData] = useState({ email: "", password: "" });

    useEffect(() => {
        context.setisheaderfooter(false);
        return () => {
            context.setisheaderfooter(true); 
        };
    }, [context]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/user/login", formData);
            alert(response.data.Message);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("lastLogin", Date.now()); 
            setFormData({ email: "", password: "" });
            setTimeout(() => {
                alert("Session expired. Please log in again.");
                localStorage.removeItem("token");
                history.push("/signin");
            }, 1 * 60 * 1000); 
            context.setisheaderfooter(true); 
            history.push("/"); 
        } catch (error) {
            alert(error.response?.data?.Message || "Error during sign-in.");
        }
    };

    return (
        <section className="section signin">
            <div className="container pt-5">
                <div className="box card shadow border-0">
                    <form className="mt-2" onSubmit={handleSignIn}>
                        <h2 className="text-center p-4" style={{ color: "black", fontWeight: "600", fontSize: "35px" }}>Sign In</h2>
                        <div className="form">
                            <TextField
                                className="w-100 textfiled"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                label="Email"
                                type="email"
                                required
                                variant="standard"
                            />
                        </div>
                        <div className="form">
                            <TextField
                                className="w-100 textfiled"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                label="Password"
                                type="password"
                                required
                                variant="standard"
                            />
                        </div>
                        <div className="d-flex align-items-center mt-5 mb-3">
                            <Button type="submit" className="btn-blue btn-lg btn-big col">Sign In</Button>
                            <Link to="/"><Button variant="outlined" className="btn-lg btn-big col ml-2">Cancel</Button></Link>
                        </div>
                        <p>Not Registered? <Link to="/signup" className="border-effect" style={{ top: "0px" }}>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignIn;




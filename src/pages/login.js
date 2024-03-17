import React from "react";
import './static/css/login.css';
const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const username = document.getElementById("floatingInput").value;
        if (username === "admin") {
            window.alert("Admin Login Success");
        } else {
            window.alert("Login Success");
        }
    };

    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={handleLogin}>
                <center>
                    <img src="static/logo.png" className="mb-4" width="250" height="80" alt="Logo" />
                </center>

                <div className="form-floating">
                    <input name="username" type="name" className="form-control" id="floatingInput" placeholder="name" />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{ color: "white" }}>
                        Remember me
                    </label>
                </div>
                <center>
                    <h6 style={{ color: "white" }}>Don't have an account?</h6>
                    <a href="/register">Register</a>
                </center>
                <br />
                <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
            </form>
        </main>
    );
};

export default Login;
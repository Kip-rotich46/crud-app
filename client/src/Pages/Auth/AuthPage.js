import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3001/auth/${isLogin ? 'login' : 'register'}`, {
                username,
                password
            });

            if (response.data.error) {
                setError(response.data.error);
            } else {
                localStorage.setItem('token', response.data.token);
                navigate('/'); // Redirect to home page after successful login/registration
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5" style={{ Height: "100vh" }}>
            <div className="w-50">
                <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    {error && <div className="text-danger">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100 mt-3">
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>
                <button className="btn btn-link w-100 mt-3" onClick={toggleForm}>
                    {isLogin ? 'Need to register? Click here' : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
};

export default AuthPage;

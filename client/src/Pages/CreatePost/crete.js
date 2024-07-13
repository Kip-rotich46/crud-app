import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CreatePost = () => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract input values using event.target
        const title = event.target.elements.inputTitle.value;
        const postText = event.target.elements.inputPost.value;
        const username = event.target.elements.inputUsername.value;

        setErrors({});

        // Validate inputs
        if (!title) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                title: "Title is required.",
            }));
        }
        if (!postText) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                postText: "Post content is required.",
            }));
        }
        if (!username) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: "Username is required.",
            }));
        }

        const data = { title, postText, username };

        if (!title || !postText || !username) {
            alert('Please fill out all fields.');
            return;
        }

        // Log the data to the console
        try {
            const res = await axios.post("http://localhost:3001/posts", data);

            // Clear input fields after successful submission
            event.target.elements.inputTitle.value = "";
            event.target.elements.inputPost.value = "";
            event.target.elements.inputUsername.value = "";

            navigate("/");

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="" >
            <div className=" mt-5 input-group ">
                <div className="row ">
                    
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Input Form</h5>
                                <form onSubmit={handleSubmit} className="w-100">
                                    <div className="mb-3">
                                        <label htmlFor="inputTitle" className="form-label">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            name='inputTitle'
                                            className="form-control"
                                            id="inputTitle"
                                            placeholder="Enter title..."
                                        />
                                        {errors.title && <span className="invalid-feedback">{errors.title}</span>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPost" className="form-label">
                                            Post
                                        </label>
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="inputPost" name="inputPost"></textarea>
                                            <label htmlFor="inputPost">Comments</label>
                                            {errors.postText && <span className="invalid-feedback">{errors.postText}</span>}

                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputUsername" className="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputUsername"
                                            name='inputUsername'
                                            placeholder="Enter username..."
                                        />
                                        {errors.username && <span className="invalid-feedback">{errors.username}</span>}

                                    </div>
                                    <div className="mb-3 d-grid">
                                        <button type="submit" className="btn btn-primary" >
                                            CreatePost
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CreatePost;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const CreatePost = () => {

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract input values using event.target
        const title = event.target.elements.inputTitle.value;
        const postText = event.target.elements.inputPost.value;
        const username = event.target.elements.inputUsername.value;

        const data = { title, postText, username };

        // Log the data to the console
        try {
            const res = await axios.post("http://localhost:3001/posts", data);
            console.log(res.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <div className="" >
            <div className=" mt-5 input-group ">
                <div className="row ">
                    <div className="">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Input Form</h5>
                                <form onSubmit={handleSubmit}>
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
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPost" className="form-label">
                                            Post
                                        </label>
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="inputPost" name="inputPost"></textarea>
                                            <label htmlFor="inputPost">Comments</label>
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
        </div>
    );
};

export default CreatePost;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CreatePost = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract input values using event.target.elements
        const title = event.target.elements.inputTitle.value;
        const post = event.target.elements.inputPost.value;
        const username = event.target.elements.inputUsername.value;

        // Log the data to the console
        console.log({ title, post, username });
    };

    return (
        <div className="mt-5 input-group">
            <div className="row">
                <div className="col">
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
                                        className="form-control"
                                        id="inputTitle"
                                        name="inputTitle" // Ensure name attribute matches here
                                        placeholder="Enter title..."
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputPost" className="form-label">
                                        Post
                                    </label>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="inputPost" name="inputPost"></textarea>
                                        <label htmlFor="inputPost">Post</label>
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
                                        name="inputUsername" // Ensure name attribute matches here
                                        placeholder="Enter username..."
                                    />
                                </div>
                                <div className="mb-3 d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Create Post
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

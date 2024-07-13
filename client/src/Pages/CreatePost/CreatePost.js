import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = localStorage.getItem('token'); // Retrieve token from localStorage or state

        try {
            const res = await axios.post("http://localhost:3001/posts", {
                title,
                content
            }, {
                headers: {
                    Authorization: `Bearer ${token}` // Include JWT token in Authorization header
                }
            });

            console.log(res.data);
            navigate('/'); // Redirect to home page after successful post creation
        } catch (error) {
            console.error("Error:", error);
            // Handle error response from server
        }
    };

    return (
        <div className="container w-50">
            <h1 className='mb-4'>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="inputTitle">Title</label>
                    <input type="text" id="inputTitle" className="form-control" placeholder="Enter title..." required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPost">Post</label>
                    <textarea id="inputPost" className="form-control" placeholder="Leave a comment here"></textarea>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputUsername">Username</label>
                    <input type="text" id="inputUsername" className="form-control" placeholder="Enter username..." />
                </div>
                <button type="submit" className="btn btn-primary">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;

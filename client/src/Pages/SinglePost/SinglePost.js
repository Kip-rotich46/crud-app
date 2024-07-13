import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`)
      .then((res) => {
        setPost(res.data); // Assuming res.data is the single post object
      })
      .catch((err) => {
        setError(err.message); // Handle error
      });
  }, [id]); // Fetch data whenever id changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='post' key={post.id}>      
      <div className="title">{post.title}</div>
      <div className="body">{post.postText}</div>
      <div className="footer">{post.username}</div>
    </div>
  );
};

export default SinglePost;

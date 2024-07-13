import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";


const SinglePost = () => {
    let {id} = useParams();

    useEffect(() => {
      axios.get(`http://localhost:3001/posts/byId/${id}`).then((res) => {
        setListOfPosts(res.data);
      });
    }, []);


    

  return (
    <div>{id}</div>
  )
}

export default SinglePost
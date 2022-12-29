import React, { useEffect, useState } from 'react';
import ShowAllDetails from './ShowAllDetails';

const ShowAllPost = () => {
    const [showPost, setShowPost] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/showPost')
        .then(res => res.json())
        .then(data => setShowPost(data))
       },[])
    return (
        <div>
            {
                showPost.map(allPost=> <ShowAllDetails></ShowAllDetails>)
            }
        </div>
    );
};

export default ShowAllPost;
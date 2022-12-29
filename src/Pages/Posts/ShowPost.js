import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowPostDetails from './ShowPostDetails';

const ShowPost = () => {
    const [showPost, setShowPost] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/showPost')
        .then(res => res.json())
        .then(data => setShowPost(data))
       },[])
    return (
        <div className=''>
            {
                showPost?.map(show=><ShowPostDetails
                    key={show._id}
                    show={show}
                ></ShowPostDetails>)
            }
        </div>
    );
};

export default ShowPost;
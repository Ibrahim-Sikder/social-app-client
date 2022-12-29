import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Medias from './Medias';

const Media = () => {
   
    const users = useLoaderData()

    return (
        <div>
           {
            users?.map(user=><Medias
            key={user._id}
            user={user}
            ></Medias>)
           }
        </div>
    );
};

export default Media;
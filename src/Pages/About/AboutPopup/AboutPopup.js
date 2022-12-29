import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAbout from '../DisplayAbout';

const AboutPopup = () => {
    const userUpdates = useLoaderData()
    console.log(userUpdates)
    return (
        <div>
          {
            userUpdates?.map(usr=><DisplayAbout
                key={usr._id}
                usr={usr}
            ></DisplayAbout>)
          }
           
        </div>
    );
};

export default AboutPopup;
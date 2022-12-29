import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAbout from './DisplayAbout';

const About = () => {
    const userInformation  = useLoaderData();
    return (
       <div>
        {
            userInformation?.map(userInfo =><DisplayAbout
            key={userInfo._id}
            userInfo={userInfo}
            ></DisplayAbout>)
        }
       </div>
    );
};

export default About;
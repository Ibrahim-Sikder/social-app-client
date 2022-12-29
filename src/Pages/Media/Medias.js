import React from 'react';

const Medias = ({user}) => {
    
   
    return (
    <div>
     <div className="card w-[600px] mx-auto bg-base-100 shadow-xl">
    <div className="card-body">
        <h2 className="card-title">{user?.userText}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    <figure><img src={user?.image} alt="Shoes" /></figure>
    </div>
    </div>
    );
};

export default Medias;
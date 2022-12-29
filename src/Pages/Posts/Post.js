import React, { useState } from 'react';
import { json } from 'react-router-dom';

const Post = () => {
    const imageKey = process.env.REACT_APP_imagebb_key ;
    const handleAddUser = event =>{
       
        event.preventDefault()
        const userText = event.target.userText.value ;
        const image = event.target.userImg.files[0];
       
        const formData = new FormData();
        formData.append('image', image )
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgData =>{
            console.log(imgData)
            socialMedia(userText, imgData.data.display_url)
        })
    }
    const socialMedia = (userText, image) =>{
        const post = {
            userText,image
        }

        fetch('http://localhost:5000/posts',{
            method : 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)

        })

        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('Post create successfully')
            
            }
        })

    }
  
    return (
        <div>
            <form onSubmit={handleAddUser} className='w-[800px]  mx-auto bg-[#F1F3F4] my-8 p-24 border '>
           <div>   
           <textarea  name="userText" className="textarea textarea-bordered w-[400px] h-[200px] mx-auto border-2 border-dashed " placeholder="Your Post here "></textarea>
           </div>
           <div className='bg-white w-[400px] my-5 h-[50px] mx-auto border border-dotted p-16 grid place-items-center'>
           <input name="userImg" accept="image/*" type="file"/>
           </div>
            <button className="btn bg-[#198F85] w-[400px] ">Button</button>
            </form>
        </div>
    );
};

export default Post;
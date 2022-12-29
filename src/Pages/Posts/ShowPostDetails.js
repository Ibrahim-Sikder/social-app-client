import { Link } from "react-router-dom";


const ShowPostDetails = ({show}) => {
    const {image, userText} = show;

    return (
        <div className="mb-5">
        <div className="card w-[600px] mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title"></h2>
            <p>{userText}</p>
            <div className="card-actions">
            <button className="btn bg-[#166FE5]"><Link to="/showallpost">Details Post</Link></button>
            </div>
        </div>
        </div>
            
        </div>
    );
};

export default ShowPostDetails;
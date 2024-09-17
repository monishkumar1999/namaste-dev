import { CDN_URL } from "../utill/constant.js";
import { Link } from "react-router-dom";
const RestaurantComponent = ({ info }) => {
  const { name, cloudinaryImageId, costForTwo, avgRating } = info.info;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"> {/* Responsive grid */}
      <div className="card shadow-sm h-100"> {/* Shadow and full-height card */}
        <img
          src={CDN_URL + cloudinaryImageId}
          className="card-img-top img-fluid"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }} // Ensure proper image fit
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          
          <div className="mt-2 mb-3">
            <span className="text-muted">Price: </span>
            <span className="fw-bold">{costForTwo}</span>
          </div>

          <div className="mb-3">
            <span className="text-warning">{avgRating} ★</span> {/* Rating with star */}
          </div>

          <a href="#" className="btn btn-primary mt-auto">View Details</a>
        </div>
      </div>
    </div>
  );
};

export const withpromotor=()=>{
  return (props)=>{
    return (
      <div>
        <label>
      veg
        </label>

        <RestaurantComponent {...props}/>
      </div>
    )
  }
}
export default RestaurantComponent;

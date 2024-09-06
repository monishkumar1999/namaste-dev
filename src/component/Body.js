import RestaurantComponent from "./RestaruantComponet";
import { useEffect, useState } from "react";

import reslist from "../utill/mockdata";

const Body = () => {
  const [reslists, setListofRes] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); // fetch will return promise

    const rest_json = await data.json(); //.json will return promise we use handle using await
    setListofRes(
      rest_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if(reslists.length==0){
    return <div className="spinner-border text-info" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  }
  
  return (
    <div className="body">
      <div className="search p-3 filter" style={{ color: "red" }}>
        search
        <button
          className="btn btn-primary m-3 filter-btn"
          onClick={() => {
            const filterreslist = reslist.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRes(filterreslist);
          }}
        >
          Top rated button
        </button>
      </div>
      <div className="container">
        <div className="row">
          {" "}
          {/* Bootstrap row for proper grid layout */}
          {reslists.map((restaurant) => (
            <RestaurantComponent key={restaurant.info.id} info={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

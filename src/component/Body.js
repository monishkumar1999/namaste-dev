import RestaurantComponent from "./RestaruantComponet";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [reslists, setListofRes] = useState([]);

  const [filtredreslist,setfiltredres]=useState([])

  const [searchtext, updatesearch] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      ); // fetch will return promise
  
      const rest_json = await data.json(); //.json will return promise we use handle using await
    setListofRes(
      rest_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setfiltredres(
      rest_json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    }
   catch{

   }


    
  };

  return reslists.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search p-3 filter" style={{ color: "red" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="input-group search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Type to search..."
              value={searchtext}
              onChange={(typedData) => {
                updatesearch(typedData.target.value);
              }}
            />

            <button
              className="btn btn-warning"
              type="button"
              onClick={() => {
                //when i click the button filter and update the ui

                const searchfiltred = reslists.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchtext);
                });
                console.log(searchfiltred);
                searchfiltred.length > 0
                  ? setfiltredres(searchfiltred)
                  : console.log("nothing");
              }}
            >
              <i className="fas fa-search"></i> Search
            </button>
          </div>
        </div>

        <button
          className="btn btn-primary m-3 filter-btn"
          onClick={() => {
            const filterreslist = reslists.filter(
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
          {filtredreslist.map((restaurant) => (
          <Link to={"/resmenu/"+restaurant.info.id}><RestaurantComponent key={restaurant.info.id} info={restaurant} /></Link>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

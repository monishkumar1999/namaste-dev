import RestaurantComponent from "./RestaruantComponet";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utill/useOnlinestatus";
import { addVeg } from "./addVeg";
import usercontext from "../utill/Context";
const Body = () => {
  const [reslists, setListofRes] = useState([]);

  const [filtredreslist, setfiltredres] = useState([]);

  const RestPromotor = addVeg(RestaurantComponent);

  const [searchtext, updatesearch] = useState("");

  const {loggedInuser} = useContext(usercontext);
  console.log(loggedInuser);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
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
    } catch {}
  };

  const onlineStats = useOnlinestatus();

  if (onlineStats === false) {
    console.log("you re online");
    return <h1>Your are offline</h1>;
  }

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
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center space-x-2"
              type="button"
              onClick={() => {
                const searchfiltred = reslists.filter((res) =>
                  res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                );
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

            setfiltredres(filterreslist);
          }}
        >
          Top rated button
        </button>
      </div>
      <div className="container">
        <div className="row">
          {filtredreslist.map((restaurant) => (
            <Link to={"/resmenu/" + restaurant.info.id} key={ restaurant.info.id}>
              {restaurant.info.veg ? (
                <RestPromotor key={restaurant.info.id} info={restaurant} />
              ) : (
                <RestaurantComponent
                  key={restaurant.info.id}
                  info={restaurant}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

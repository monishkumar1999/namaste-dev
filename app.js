
import React from "react";
import ReactDOM from "react-dom/client";

const reslist = [
  {
    info: {
      id: "104680",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/e3083f7c-d59f-49af-99bd-8e42a53c8480_104680.jpg",
      locality: "KAILASH OMR SHOLINAGANALLUR CHENNAI",
      areaName: "Sholinganallur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "801005",
      name: "WeFit - Protein Bowls, Salads & Sandwiches",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/73ee0ea3-504d-4a2a-b168-554f25cc0942_801005.JPG",
      locality: "Sholinganallur",
      areaName: "Parameswaran Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Healthy Food", "Salads", "Keto", "Snacks"],
      avgRating: 4.6,
      parentId: "355285",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
  {
    info: {
      id: "800999",
      name: "BOX8 - Desi Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/4681c53a-b1a1-49a6-a08f-a0418ae5e97d_800999.jpg",
      locality: "Sholinganallur",
      areaName: "Parameswaran Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "Thalis", "Home Food"],
      avgRating: 4.4,
      parentId: "10655",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-02 02:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
  },
];


const Header = () => (
  <div className="header row d-flex justify-content-between border border-primary">
    <div className="logo col-sm-6">
      <img
        src="https://static.vecteezy.com/system/resources/previews/025/379/860/non_2x/food-bag-for-restaurant-delivery-service-logo-design-concept-illustration-symbol-icon-vector.jpg"
        alt="Logo"
        width={90}
      />
    </div>

    <div className="nav_item col-sm-6">
      <ul className="d-flex justify-content-end list-unstyled p-4 h5">
        <li className="m-2">Home</li>
        <li className="m-2">About</li>
        <li className="m-2">Cart</li>
        <li className="m-2">Contact Us</li>
      </ul>
    </div>
  </div>
);

const RestaurantComponent = ({ info }) => {
  const { name, cloudinaryImageId, costForTwo, avgRating } = info.info;

  return (
    <div className="card m-4" style={{ width: "13rem" }}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text row">
          <div className="col-sm-6">{costForTwo}</div>
          <div className="col-sm-6">{avgRating}</div>
        </div>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search p-3" style={{ color: "red" }}>
      search
    </div>
    <div className="res-container d-flex">
      {reslist.map((restaurant) => (
        <RestaurantComponent  info={restaurant} />
      ))}
    </div>
  </div>
);

const AppComponent = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
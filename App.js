import React from"react";
import ReactDOM from"react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
        className="logo"
         src="https://s3.amazonaws.com/ionic-marketplace/food-ordering-restaurant-delivery-app/icon.png"
         alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

      </div>

    </div>
  )
};

const RestaurantCard = (props) => {
  const {resData} = props;
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
       
       <img
       className="res-logo"
       src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/51e49c361768f2d16cfff0dd624fdac7"
       alt="res-logo"
       />
       <h3>{resData.name}</h3>
       <h4>{resData.cuisines}</h4>
       <h4>{resData.avgRating} stars</h4>
       <h4>{resData.costForTwo }</h4>
       <h4>{resData.sla.deliveryTime} mintues</h4>
    </div>
  )
}

const resObj = {
  "id": "305",
  "name": "A2B - Adyar Ananda Bhavan",
  "cloudinaryImageId": "gxydb9wvkadarapno4hk",
  "locality": "7th Block",
  "areaName": "Koramangala",
  "costForTwo": "₹300 for two",
  "cuisines": [
    "South Indian",
    "North Indian",
    "Sweets",
    "Chinese"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "22",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-02-22 22:30:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "pureveg",
              "imageId": "v1695133679/badges/Pure_Veg111.png"
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹100"
  },
  "loyaltyDiscoverPresentationInfo": {
    "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
    },
    "freedelMessage": "FREE DELIVERY",
    "badgeType": "BADGE_TYPE_ONE_LITE"
  },
  "orderabilityCommunication": {
    "title": {
      
    },
    "subTitle": {
      
    },
    "message": {
      
    },
    "customIcon": {
      
    }
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  }
};

const Body = () => {
  return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard resData={resObj}/>
         
         
        </div>
    </div>
  )
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
      
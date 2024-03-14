import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla  } = resData?.info;
    return (
      <div className="m-4 p-4 w-44  rounded-lg bg-gray-100 hover:bg-gray-200" >
         
         <img
         className="rounded-lg w-44 h-32"
         src={CDN_URL + cloudinaryImageId}
         alt="res-logo"
         />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} stars</h4>
         <h4>{costForTwo }</h4>
         <h4>{sla.deliveryTime} mintues</h4>
      </div>
    )
  }

  export const withOpenLabel = () => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
          <RestaurantCard {...props}/>
        </div>
      );
    };
  };

  export default RestaurantCard;
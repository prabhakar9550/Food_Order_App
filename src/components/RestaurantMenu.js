import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resid} = useParams();

    console.log(resid)

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resid);
   
        const json = await data.json();

    //   console.log(json);
       setResInfo(json.data);
    }
    if(resInfo === null) return (<Shimmer/>) ;
   
 const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
 const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return  (
        <div className="menu">
           <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}- {"Rs."} - {item.card.info.price/100 || item.card.info.defaultPrice}</li>)}
                
            </ul>
        </div>
    );
}

export default RestaurentMenu;
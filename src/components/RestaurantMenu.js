import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const RestaurentMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=229&catalog_qa=undefined&submitAction=ENTER");
   
        const json = await data.json();

        console.log(json);
    }

    if(resInfo === null) return <Shimmer/>

    return (resInfo === null) ? (<Shimmer/>)  : (
        <div>
            <h1>Name of the Restaurant </h1>
            <h2>Menu</h2>

            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}

export default RestaurentMenu;
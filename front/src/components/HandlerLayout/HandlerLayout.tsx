import {useContext } from "react"
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog"; 
import Bag from "../../pages/Bag/Bag"; 
import { GlobalContext } from "../../../context/GlobalContext"; 
import Profile from "../../pages/Profile/Profile";
import Favorites from "../../pages/Favorites/Favorites";
import WriteReview from "../WriteReview/WriteReview";

const HandlerLayout = () => {
    const {MPoint} = useContext(GlobalContext) 

    let screen = <div></div>
    switch (MPoint) {
        case 0:
            screen = <Home />
            break;
        case 1:
            screen = <Catalog />
            break; 
        case 2:
            screen = <Bag />
            break; 
        case 3:
            screen = <Favorites />
            break; 
        case 4:
            screen = <WriteReview />
            break; 
        default:
            screen = <Home />
            break
    }
    return <>
        {screen}
    </>
}

export default HandlerLayout
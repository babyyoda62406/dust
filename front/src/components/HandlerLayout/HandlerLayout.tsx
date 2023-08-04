import {useContext } from "react"
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog"; 
import Bag from "../../pages/Bag/Bag";
import Login from "../../pages/Login/Login";
import { GlobalContext } from "../../../context/GlobalContext";

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
        case 4:
            screen = <Login />
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
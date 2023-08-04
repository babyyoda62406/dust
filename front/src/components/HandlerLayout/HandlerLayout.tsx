import {useContext } from "react"
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog"; 
import { GlobalContext } from "../../../context/GlobalContext";
import Bag from "../../pages/Bag/Bag";
import Login from "../../pages/Login/Login";

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
        case 4:
            screen = <Login />
        default:
            screen = <Home />
            break
    }
    return <>
        {screen}
    </>
}

export default HandlerLayout
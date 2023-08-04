import { FC } from "react"
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Bag from "../../pages/Bag/Bag";
import Login from "../../pages/Login/Login";
import { Hlayout } from "../../types/types";

const HandlerLayout: FC<Hlayout> = ({MPoint , jostick})=>{
    let screen = <div></div>
    switch (MPoint) {
        case 0:
            screen = <Home MPoint={MPoint} jostick = {jostick} />            
            break;
        case 1:
            screen = <Catalog MPoint={MPoint} jostick = {jostick}/>
            break
        case 2:
            screen = <Bag MPoint={MPoint} jostick = {jostick}/>
            break
        case 4:
            screen = <Login MPoint={MPoint} jostick = {jostick}/>
            break
        default:
            screen = <Home MPoint={MPoint} jostick = {jostick} />            
            break
    }
    return <>
        {screen}        
    </>
}

export default HandlerLayout
import { FC } from "react"
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
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
        default:
            screen = <Home MPoint={MPoint} jostick = {jostick} />            
            break
    }
    return <>
        {screen}        
    </>
}

export default HandlerLayout
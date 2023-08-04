import React, { FC, createContext, useState } from "react";


export const GlobalContext = createContext<{MPoint: number , jostick: (arg: number)=>void}>({
    MPoint: 0 , jostick:()=>{}
})


export const GlobalContextProvider: FC<{children:React.ReactNode}> = (props)=>{
    const [MPoint , jostick ]  = useState<number>(0) 

    return <GlobalContext.Provider value={{MPoint ,  jostick }}>
                {props.children}
            </GlobalContext.Provider>
}




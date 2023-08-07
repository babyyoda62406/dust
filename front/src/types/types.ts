type Hlayout = {
    MPoint:number
}

type PropsCard = { 
    photo: string
    stars: number
    clasification: string
    name: string
    price: { normal: number, less: number| null }
    option: { color: string, text: string }
    horizontal: boolean
}


interface PropsCategories {
    names: string[] 
} 

type State = {
    redirect: string | null,
    username: string,
    password: string,
    loading: boolean,
    message: string
};

type Sign = {
    change: (arg: number)=>void
}

export type { Hlayout, PropsCategories, PropsCard, State, Sign }
export interface ICategory {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}



export interface RootObject {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: ICategory;
}
export interface NewRootObject {
    id: number;
    title: string;
    totalPrice: number,
    price: number;
    quantity: number,
    description: string;
    images: string[];
    creationAt: Date;
    updatedAt: Date;
    category: ICategory;
}

export interface Categories {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}



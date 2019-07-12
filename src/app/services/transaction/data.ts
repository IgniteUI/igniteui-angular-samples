export interface IItem {
    id: number;
    name: string;
    price: string;
}

export const WISHLIST: IItem[] = [
    { id: 1, name: "Bike", price: "500$" },
    { id: 2, name: "Apple", price: "1.5$" },
    { id: 3, name: "Mouse (pet)", price: "75$" }
];

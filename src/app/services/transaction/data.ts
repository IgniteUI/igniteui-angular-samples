// tslint:disable-next-line: interface-name
export interface WishlistItem {
    id: number;
    name: string;
    price: string;
}

export const WISHLIST: WishlistItem[] = [
    { id: 1, name: "Apple", price: "$1.5" },
    { id: 2, name: "Bike", price: "$500" },
    { id: 3, name: "Mouse (pet)", price: "$75" }
];

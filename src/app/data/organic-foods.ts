export type StorageType = 'Chilled' | 'Dry' | 'Ambient';

export type StockStatus = 'In stock' | 'Low' | 'Out of stock';

export interface OrganicFood {
    SKU: string;
    ProductName: string;
    Category: string;
    Supplier: string;
    Organic: boolean;
    Storage: StorageType;
    Quantity: number;
    /** Percent of the target stock, 0 to 100. */
    StockLevel: number;
    Unit: string;
    Status: StockStatus;
    UnitPrice: number;
    RetailPrice: number;
    ExpiryDate: Date;
    /** The product photo. */
    Image: string;
}

export const ORGANIC_FOODS: OrganicFood[] = [
    {
        SKU: 'CC-1042',
        ProductName: 'Cacao cream with erythritol',
        Category: 'Cacao and Coconut',
        Supplier: 'Biovero Wholesale',
        Organic: false,
        Storage: 'Chilled',
        Quantity: 61,
        StockLevel: 50,
        Unit: 'Jar, 200 g',
        Status: 'In stock',
        UnitPrice: 2.95,
        RetailPrice: 4.75,
        ExpiryDate: new Date('2027-11-04T00:00:00'),
        Image: 'cacao-cream-with-erythritol.jpg'
    },
    {
        SKU: 'CC-1017',
        ProductName: 'Cocoa Powder Organic',
        Category: 'Cacao and Coconut',
        Supplier: 'Cacaoterra Imports',
        Organic: true,
        Storage: 'Dry',
        Quantity: 28,
        StockLevel: 25,
        Unit: 'Pack, 250 g',
        Status: 'Low',
        UnitPrice: 5.8,
        RetailPrice: 9.28,
        ExpiryDate: new Date('2028-10-31T00:00:00'),
        Image: 'cocoa-powder-organic.jpg'
    },
    {
        SKU: 'CC-1063',
        ProductName: 'Creamed Coconut - Organic',
        Category: 'Cacao and Coconut',
        Supplier: 'Tropiqa Imports',
        Organic: true,
        Storage: 'Ambient',
        Quantity: 112,
        StockLevel: 92,
        Unit: 'Pack, 200 g',
        Status: 'In stock',
        UnitPrice: 1.9,
        RetailPrice: 3.11,
        ExpiryDate: new Date('2027-12-08T00:00:00'),
        Image: 'creamed-coconut-organic.jpg'
    },
    {
        SKU: 'CC-1005',
        ProductName: 'Organic Coconut Oil',
        Category: 'Cacao and Coconut',
        Supplier: 'Tropiqa Imports',
        Organic: true,
        Storage: 'Ambient',
        Quantity: 90,
        StockLevel: 75,
        Unit: 'Bottle, 500 ml',
        Status: 'In stock',
        UnitPrice: 5.4,
        RetailPrice: 8.55,
        ExpiryDate: new Date('2027-09-07T00:00:00'),
        Image: 'organic-coconut-oil.jpg'
    },
    {
        SKU: 'CC-1038',
        ProductName: 'Raw Cacao Butter',
        Category: 'Cacao and Coconut',
        Supplier: 'Cacaoterra Imports',
        Organic: false,
        Storage: 'Ambient',
        Quantity: 40,
        StockLevel: 33,
        Unit: 'Pack, 60 g',
        Status: 'In stock',
        UnitPrice: 2.7,
        RetailPrice: 4.35,
        ExpiryDate: new Date('2028-08-01T00:00:00'),
        Image: 'raw-cacao-butter.jpg'
    },
    {
        SKU: 'CT-2104',
        ProductName: 'Congo coffee beans - organic',
        Category: 'Coffee and Tea',
        Supplier: 'Montavia Coffee Co.',
        Organic: true,
        Storage: 'Dry',
        Quantity: 0,
        StockLevel: 0,
        Unit: 'Bag, 250 g',
        Status: 'Out of stock',
        UnitPrice: 8.6,
        RetailPrice: 13.25,
        ExpiryDate: new Date('2028-03-15T00:00:00'),
        Image: 'congo-coffee-beans-organic.jpg'
    },
    {
        SKU: 'CT-2087',
        ProductName: 'Ethiopia ground coffee - organic',
        Category: 'Coffee and Tea',
        Supplier: 'Montavia Coffee Co.',
        Organic: true,
        Storage: 'Chilled',
        Quantity: 31,
        StockLevel: 25,
        Unit: 'Bag, 250 g',
        Status: 'Low',
        UnitPrice: 8.9,
        RetailPrice: 13.75,
        ExpiryDate: new Date('2027-02-26T00:00:00'),
        Image: 'ethiopia-ground-coffee-organic.jpg'
    },
    {
        SKU: 'CT-2231',
        ProductName: 'Green Rooibos Tea Chocolate Dream',
        Category: 'Coffee and Tea',
        Supplier: 'Leaf & Bloom Supply',
        Organic: false,
        Storage: 'Dry',
        Quantity: 79,
        StockLevel: 66,
        Unit: 'Pack, 60 g',
        Status: 'In stock',
        UnitPrice: 3.2,
        RetailPrice: 5.39,
        ExpiryDate: new Date('2027-11-30T00:00:00'),
        Image: 'green-rooibos-tea-chocolate-dream.jpg'
    },
    {
        SKU: 'CT-2019',
        ProductName: 'Moroccan Mint Tea - organic',
        Category: 'Coffee and Tea',
        Supplier: 'Leaf & Bloom Supply',
        Organic: true,
        Storage: 'Dry',
        Quantity: 120,
        StockLevel: 100,
        Unit: 'Box, 20 pcs',
        Status: 'In stock',
        UnitPrice: 2.6,
        RetailPrice: 4.25,
        ExpiryDate: new Date('2029-01-31T00:00:00'),
        Image: 'moroccan-mint-tea-organic.jpg'
    },
    {
        SKU: 'CT-2156',
        ProductName: 'Nettle leaf tea - organic',
        Category: 'Coffee and Tea',
        Supplier: 'Biovero Wholesale',
        Organic: true,
        Storage: 'Dry',
        Quantity: 58,
        StockLevel: 50,
        Unit: 'Box, 12 pcs',
        Status: 'In stock',
        UnitPrice: 1.7,
        RetailPrice: 2.85,
        ExpiryDate: new Date('2028-05-31T00:00:00'),
        Image: 'nettle-leaf-tea-organic.jpg'
    },
    {
        SKU: 'CT-2072',
        ProductName: 'Zen Matcha Green Tea - organic',
        Category: 'Coffee and Tea',
        Supplier: 'Leaf & Bloom Supply',
        Organic: true,
        Storage: 'Chilled',
        Quantity: 42,
        StockLevel: 33,
        Unit: 'Pack, 60 g',
        Status: 'In stock',
        UnitPrice: 11.2,
        RetailPrice: 17.35,
        ExpiryDate: new Date('2027-09-13T00:00:00'),
        Image: 'zen-matcha-green-tea-organic.jpg'
    },
    {
        SKU: 'GF-3008',
        ProductName: 'Buckwheat organic',
        Category: 'Gluten free',
        Supplier: 'Harvela Grain Supply',
        Organic: true,
        Storage: 'Dry',
        Quantity: 110,
        StockLevel: 92,
        Unit: 'Pack, 200 g',
        Status: 'In stock',
        UnitPrice: 0.75,
        RetailPrice: 1.25,
        ExpiryDate: new Date('2027-12-15T00:00:00'),
        Image: 'buckwheat-organic.jpg'
    },
    {
        SKU: 'GF-3041',
        ProductName: 'Gluten-free oat flour - organic',
        Category: 'Gluten free',
        Supplier: 'Harvela Grain Supply',
        Organic: true,
        Storage: 'Chilled',
        Quantity: 27,
        StockLevel: 25,
        Unit: 'Bag, 400 g',
        Status: 'Low',
        UnitPrice: 1.75,
        RetailPrice: 2.85,
        ExpiryDate: new Date('2027-08-05T00:00:00'),
        Image: 'gluten-free-oat-flour-organic.jpg'
    },
    {
        SKU: 'GF-3026',
        ProductName: 'Organic Gluten-Free Spaghetti',
        Category: 'Gluten free',
        Supplier: 'Harvela Grain Supply',
        Organic: true,
        Storage: 'Dry',
        Quantity: 80,
        StockLevel: 66,
        Unit: 'Pack, 250 g',
        Status: 'In stock',
        UnitPrice: 2.05,
        RetailPrice: 3.35,
        ExpiryDate: new Date('2029-03-06T00:00:00'),
        Image: 'organic-gluten-free-spaghetti.jpg'
    },
    {
        SKU: 'GF-3015',
        ProductName: 'Rice Flour',
        Category: 'Gluten free',
        Supplier: 'Harvela Grain Supply',
        Organic: false,
        Storage: 'Chilled',
        Quantity: 60,
        StockLevel: 50,
        Unit: 'Bag, 1 kg',
        Status: 'In stock',
        UnitPrice: 2.5,
        RetailPrice: 4.06,
        ExpiryDate: new Date('2027-05-24T00:00:00'),
        Image: 'rice-flour.jpg'
    }
];

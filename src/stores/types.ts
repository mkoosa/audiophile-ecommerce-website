export interface Data {
    carts: {
        category: string;
        img: string;
    }[];
    cart: {
        mobile: {
            column: string;
            table: string;
            headphones: string;
        };
        tablet: {
            column: string;
            table: string;
            headphones: string;
        };
        desktop: {
            column: string;
            table: string;
            headphones: string;
        };
    };
    about: {
        img: {
            desktop: string;
            mobile: string;
            tablet: string;
        };
        text: string;
    };
}

export interface Product {
    id: number;
    slug: string;
    name: string;
    shortName: string;
    image: {mobile: string; tablet: string; desktop: string};
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
        tabletWide: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {quantity: number; item: string}[];
    gallery: {
        mobile: string;
        tablet: string;
        desktop: string;
    }[];
    gallerySecond: {
        desktop: string;
        mobile: string;
        tablet: string;
    }[];
    others: {
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }[];
    count: number;
}

export interface Quantities {
    [key: string]: number;
}

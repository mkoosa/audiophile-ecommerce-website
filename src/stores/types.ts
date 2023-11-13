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
}

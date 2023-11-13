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

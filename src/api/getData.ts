import axios from 'axios';

const URL = 'https://api.npoint.io/4b5b3e6f67ea03318880';
interface Data {
    category: string;
    categoryImage: object;
    gallery: object;
    id: number;
    includes: object[];
    name: string;
    others: object[];
    price: number;
    slug: string;
}

const getData = async () => {
    const data = await axios.get<Data[]>(URL);
    return data.data;
};

export default getData;

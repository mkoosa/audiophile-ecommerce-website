export const preparePrice = (value: number) => {
    return (value / 100).toFixed(2).toString().replace('.', ',');
};

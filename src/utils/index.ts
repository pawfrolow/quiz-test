export const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
}

export const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

export const getRandomCoin = () => (Math.floor(Math.random() * 9) + 1) * 100;

export const getColorPlace = (index: number) => {
    switch(index) {
        case 0: return '#FFD700';
        case 1: return '#c0c0c0';
        default: return '#cd7f32'
    }
}
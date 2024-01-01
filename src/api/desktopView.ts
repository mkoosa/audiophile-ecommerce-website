import {ref} from 'vue';

let windowWidth = ref(window.innerWidth);

const isDesktopView = () => {
    window.addEventListener('resize', () => {
        windowWidth.value = window.innerWidth;
    });

    return windowWidth.value > 1025 ? true : false;
};

export default isDesktopView;

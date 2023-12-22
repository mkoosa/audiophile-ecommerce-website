import type {Router} from 'vue-router';
import type {Store} from '@/stores/types';

const INPUT_RADIO_CLASS = '.checkout__element--radio input';
const CHECKOUT_RADIO_CLASS = '.checkout__element--radio';
const CHECKED_CLASS = '.checked';
const CHECKED = 'checked';

const addClass = (element: HTMLElement, className: string) =>
    element.classList.add(className);
const removeClass = (element: HTMLElement, className: string) =>
    element.classList.remove(className);

const removeBorder = () => {
    document.querySelectorAll(INPUT_RADIO_CLASS).forEach((input: Element) => {
        if (input.closest(CHECKED_CLASS) != null) {
            removeClass(
                input.closest(CHECKED_CLASS) as HTMLInputElement,
                CHECKED,
            );
        }
    });
};

const addBorderToInputRadio = () => {
    document.querySelectorAll(INPUT_RADIO_CLASS).forEach((input: Element) => {
        const element = input as HTMLInputElement;
        element.checked
            ? addClass(
                  element.closest(CHECKOUT_RADIO_CLASS) as HTMLElement,
                  CHECKED,
              )
            : false;
    });
};

const backToMain = (store: Store, router: Router) => {
    if (store.PRODUCTS_IN_CART.length === 0) router.push({path: '/'});
};

export {
    removeBorder,
    addBorderToInputRadio,
    backToMain,
    CHECKOUT_RADIO_CLASS,
    CHECKED,
};

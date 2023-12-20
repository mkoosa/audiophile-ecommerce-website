const findHtmlElements = (value: string) => document.querySelectorAll(value);

const addClass = (element: HTMLElement, className: string) =>
    element.classList.add(className);
const removeClass = (element: HTMLElement, className: string) =>
    element.classList.remove(className);

export {findHtmlElements, addClass, removeClass};

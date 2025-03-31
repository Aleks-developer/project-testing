import {slider} from "./slider";
import {select} from "./select";
import {scrollTarget} from "./scrollTarget";

export const blocksFull = () => {
    slider()
    select()
    scrollTarget()
}

document.addEventListener('DOMContentLoaded', () => {
    blocksFull()
})
import {backBtn} from "./backBtn";
import {calcResult} from "./calcResult";
import {inputsMask} from "./inputs";
import {calcValidate} from "./validate";
import {inputsCookie} from "./cookie";

export const calcFull = () => {
    backBtn()
    calcResult()
    inputsMask()
    inputsCookie()
    calcValidate()
}

document.addEventListener('DOMContentLoaded', () => {
    calcFull()
})
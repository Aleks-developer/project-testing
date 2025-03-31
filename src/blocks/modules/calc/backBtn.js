export const backBtn = () => {
    window.calcWrap = document.querySelector('.js-calc-wrap');
    const backButton = document.querySelector('.js-calc-back');

    backButton.addEventListener('click', () => {
        calcWrap.classList.remove("is-active");
    });
}
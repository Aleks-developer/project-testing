export const inputsCookie = () => {
    const inputs = document.querySelectorAll('.js-cookie');
    const inputHidden = document.querySelector('.js-cookie-hidden');

    for (let currentInput of inputs) {
        currentInput.addEventListener('focusout', function () {
            localStorage.setItem(currentInput.id, currentInput.value);
        });
    }

    function getLocalStorage() {
        const inputs = Array.from(document.querySelectorAll('.js-cookie'));

        inputs.map(input => {
            const val = localStorage.getItem(input.id);

            if (val) {
                toggleFocus()
                // calcInputsValue()
            }
            return val ? input.value = val : input.value = "";
        })

        resultValue.innerText = localStorage.getItem(inputHidden.id);
    }

    getLocalStorage();
}
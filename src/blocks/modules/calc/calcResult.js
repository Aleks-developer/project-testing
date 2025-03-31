export const calcResult = () => {
    window.resultValue = document.querySelector('.js-calc-result');
    const resultValueHidden = document.querySelector('.js-calc-result-hidden');
    const resultBtn = document.querySelector('.js-calc-result-btn');
    const calcInputs = document.querySelectorAll('.js-calc-input');
    const calcButton = document.querySelector('.js-calc-button');
    const inputsType1 = document.querySelectorAll('.js-input-val1');
    const inputsType2 = document.querySelectorAll('.js-input-val2');
    const val1 = document.querySelector('.js-calc-val1');
    const val2 = document.querySelector('.js-calc-val2');
    const val3 = document.querySelector('.js-calc-val3');
    const val4 = document.querySelector('.js-calc-val4');

    const calcFormula = (val1, val2, val3, val4) => {
        let resultValueFinish;
        let val3Finish = val3 / 100 / 12;
        let val4Finish = val4 * 12;

        resultValueFinish = ((val1 - val2) * ((1 + val3Finish) ^ val4Finish) *  val3Finish) / ((1 + val3Finish) ^ val4Finish) - 1;

        resultValue.innerText = resultValueFinish.toFixed(2);
        resultValueHidden.value = resultValueFinish.toFixed(2);
        localStorage.setItem(resultValueHidden.id, resultValueHidden.value);
    }

    window.calcInputsValue = () => {
        let input1Val = val1.value;
        let input2Val = val2.value;
        let input3Val = val3.value;
        let input4Val = val4.value;

        for (let i = 0; i < calcInputs.length; i++) {
            if (calcInputs[i].value === "" || calcInputs[i].value === 0 || calcInputs[i].value < 0) {
                resultValue.innerText = 0;
                resultValueHidden.value = 0;
                setTimeout(() => {
                    calcInputs[i].classList.add("just-validate-error-field");
                }, 1)
                calcButton.setAttribute("disabled", "disabled");
            } else {
                calcFormula(input1Val, input2Val, input3Val, input4Val)
                calcButton.removeAttribute("disabled");
            }
        }
    }

    const inputsFocus = (item) => {
        if (item.value !== "") {
            item.classList.remove("just-validate-error-field");
        }
    }

    resultBtn.addEventListener('click', () => {
        calcInputsValue()
    });

    calcButton.addEventListener('click', () => {
        calcWrap.classList.add("is-active");
    });

    calcInputs.forEach((item) => {
        item.addEventListener('keyup', (e) => {
            calcInputsValue()
            inputsFocus(item)
        })
    })

    inputsType1.forEach((item) => {
        item.addEventListener('keyup', () => {
            const value = parseInt(item.value);

            item.value = item.value.replace(/\D/g, '');

            if (value < 1) {
                item.value = 1;
            }
        })
    })

    inputsType2.forEach((item) => {
        let lastVal = "";

        item.addEventListener('keyup', () => {
            if(!item.value) return (lastVal = "");

            if((/^\d+[.,]?\d*$/).test(item.value)) {
                lastVal = item.value = item.value.replace(/,/,".");
            } else {
                item.value = lastVal;
            }
        })
    })

    for (let currentInput of calcInputs) {
        currentInput.addEventListener('focusout', function () {
            if (currentInput.value === '') {
                currentInput.classList.add("just-validate-error-field");
            }
        });
    }
}
import JustValidate from "just-validate";
import Inputmask from "inputmask/dist/inputmask.es6.js";

export const calcValidate = () => {
    const form = document.querySelector("form[name='formData']");
    const inputDataPhone = document?.querySelector(".js-form-data-phone");
    const inputDataEmail = document?.querySelector(".js-form-data-email");
    const resultValue = document.querySelector('.js-calc-result');

    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(inputDataPhone);

    const validation = new JustValidate(form, {
        validateBeforeSubmitting: false,
    });

    validation
        .addField(".js-form-data1", [
                {
                    rule: 'required',
                },
                {
                    rule: 'minLength',
                    value: 3,
                }
            ],
            {
                errorMessage: false,
            }
        )

    validation
        .addField(".js-form-data2", [
                {
                    rule: 'required',
                },
                {
                    rule: 'minLength',
                    value: 3,
                }
            ],
            {
                errorMessage: false,
            }
        )

    validation
        .addField(".js-form-data-phone", [
                {
                    rule: 'function',
                    validator: function(name, value) {
                        const phone = inputDataPhone.inputmask.unmaskedvalue()
                        return phone.length === 10
                    }
                }
            ],
            {
                errorMessage: false,
            }
        )

    validation
        .addField(".js-form-data-email", [
                {
                    rule: 'required',
                },
                {
                    rule: 'email',
                }
            ],
            {
                errorMessage: false,
            }
        )

    async function handleFormSubmit(event) {
        event.preventDefault()

        try {
            const response = await fetch("http://localhost/request", {
                method: "POST",
                body: new FormData(form)
            })
            const result = await response.json()
        } catch (error) {
            console.log(error);
        } finally {
            console.log("success");
        }
    }

    validation.onSuccess(() => {
        form.addEventListener("submit", handleFormSubmit)
    })
}
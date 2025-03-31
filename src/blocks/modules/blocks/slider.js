import noUiSlider from "nouislider";

export const slider = () => {
    const slider = document.getElementById('ui-slider');
    const sliderPercent = document.getElementById('ui-slider-percent');

    noUiSlider.create(slider, {
        start: 75,
        step: 1,
        connect: "lower",
        orientation: "horizontal",
        range: {
            'min': 0,
            'max': 100
        }
    });

    slider.noUiSlider.on('update', function (values, handle) {

        const value = Number(values[handle])

        sliderPercent.innerText = value.toFixed(0);
    });
}
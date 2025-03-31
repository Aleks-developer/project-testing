import NiceSelect from "nice-select2";

export const select = () => {
    new NiceSelect(document.getElementById("nice-select"), {
        searchable: false,
        placeholder: 'Выберите тип системы'
    });
}
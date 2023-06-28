import './style.css'

const COLOR_PALETTE = {
  '#373F51': 'Charcoal',
  '#008DD5': 'Celestial blue',
  '#DFBBB1': 'Pale Dogwood',
  '#F56476': 'Bright Pink',
  '#E43F6F': 'Cerise',
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option')
    option.value = color;
    option.innerText = COLOR_PALETTE[color];
    colorPickerSelect.append(option)
  });
};



const addEventListenerToColorpicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')
  const colorName = document.querySelector('#color-name')
  colorPickerSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;

    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-'
  })
};



const colorInputSelect = () => {
  const inputElement = document.getElementById("input-color");
  const newNameColor = document.getElementById("color-name")
  inputElement.addEventListener('input', (event) => {
    const newColor = event.target.value;
    newNameColor.innerText = inputElement.value
    document.body.style.backgroundColor = newColor;
  });
};






colorInputSelect();
addOptionsToColorPicker();
addEventListenerToColorpicker();










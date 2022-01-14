// Checkbox

const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('change', checkboxChanged)

function checkboxChanged() {
  if (checkbox.checked) {
    console.log('checked')
  } else {
    console.log('unchecked')
  }
}

// Radio

const radioButton = document.querySelector('#radio_button')
radioButton.addEventListener('click', radioChecked)

function radioChecked() {
  let radio = document.getElementsByName('radio')
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      console.log('The ' + (i + 1) + ' radio is selected')
    }
  }
}

// Select

const selectList = document.querySelector('#select') // object
selectList.addEventListener('change', selectedInd)

function selectedInd() {
  let selectedIndex = selectList.selectedIndex // number
  let options = selectList.options // array
  console.log(options[selectedIndex].text + ' is selected')
}

// Range

const inputRange = document.querySelector('#range')
const inputParagraph = document.querySelector('#input_p')

inputRange.addEventListener('input', function () {
  inputParagraph.innerHTML = inputRange.value
})

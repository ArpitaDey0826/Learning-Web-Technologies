let display = document.getElementById('display');

function press(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = 'Error';
  }
}

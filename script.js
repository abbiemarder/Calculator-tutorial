let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
//Store whether or not decimal was clicked
//Only allow 1 decimal per val
let decimalClicked = false;

//Hold values we want stored in memory
let valMemStored = "";

function numButPress(num) {}
function mathButPress(operator) {}
function equalButPress() {}

function clearButPress() {
  prevVal = ''
  newVal = ''
  resultVal = ''
  mathOperator = ''
  decimalClicked = false
  valMemStored = ''
  document.getElementById('entry').value = '0'
}

function copyButPress() {}
function pasteButPress() {}

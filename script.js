let prevVal = ''
let newVal = ''
let resultVal = ''
let mathOperator = ''
//Store whether or not decimal was clicked
//Only allow 1 decimal per val
let decimalClicked = false;

//Hold values we want stored in memory
let valMemStored = "";

function numButPress(num) {
  //Check if a number has already been clicked
  if (resultVal) {
    //Start new number
    newVal = num;
    //Reset to create a new result
    resultVal = "";
  } else {
    //Used to block multi decimals
    if (num === ".") {
      if (decimalClicked != true)
        //Take the current value of newVal and add the character pressed
        newVal += num;
      //Sets decimal check var to true, won't allow more
      decimalClicked = true;
    } else {
      newVal += num;
    }
  }
  //update the display
  document.getElementById("entry").value = newVal;
} 
 

function mathButPress(operator) {}
function equalButPress() {}

//Clears everything EXCEPT memory
function clearButPress() {
  prevVal = ''
  newVal = ''
  resultVal = ''
  mathOperator = ''
  decimalClicked = false
  document.getElementById('entry').value = '0'
}
//Store the current value in #entry in valMemStored
function copyButPress() {
    valMemStored = document.getElementById("entry").value
}
function pasteButPress() {
    if(valMemStored) {
        document.getElementById("entry").value;
        newVal = valMemStored
    }
}

let myText =  document.getElementById("answerGiver");
function addValue(numValue) {
    var characters = document.getElementById("answerGiver").value;
    if (characters.length > 28){
        newText = myText.value.substring(0,28);
        document.getElementById("answerGiver").value = newText;
    }
    document.getElementById("answerGiver").value += numValue;
}
function removeAll() {
    document.getElementById("answerGiver").value = '';
    equation = 0;
}
function equal() {
    let equation = document.getElementById("answerGiver").value;
    let parenthesis = equation.replace(")(","*");
    let numEquation = eval(parenthesis);
    let newEquation = numEquation.toString();
    document.getElementById("answerGiver").value = newEquation;
}
document.addEventListener('DOMContentLoaded', function() {
  let myText =  document.getElementById("answerGiver");
  myText.addEventListener('keydown', function(event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
      event.preventDefault(); // Prevent the default action (new line)
      console.log("pressed a letter")
    }
    const allowedKeys = [".", "+", "-", "*", "/", "%", "(", ")", "Backspace"];
    const isNumber = /^[0-9]$/.test(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      equal();
  } else if (!allowedKeys.includes(event.key) && !isNumber) {
    event.preventDefault(); // Block disallowed keys
  }
}); });


submitBtn = document.getElementById("submitDisplay");
textBox = document.getElementById("textBoxDisplay");
resultDisplay = document.getElementById("resultDisplay")

//Transform upcase text to lowercase. Cap first Letter
submitBtn.addEventListener("click", function(){
    let textSubmission = textBox.value.toLowerCase();
    textSubmission = textSubmission.split("")
    textSubmission[0] = textSubmission[0].toUpperCase();
    textSubmission = textSubmission.join("");
    resultDisplay.innerHTML = textSubmission
})
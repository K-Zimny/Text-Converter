submitBtn = document.getElementById("submitDisplay");
textBox = document.getElementById("textBoxDisplay");
resultDisplay = document.getElementById("resultDisplay");
let copyBtn = document.getElementById("copyButton");

let textSubmission; 

//Transform upcase text to lowercase. Cap first Letter
submitBtn.addEventListener("click", function(){
    textSubmission = textBox.value.toLowerCase();
    textSubmission = textSubmission.split("");
    textSubmission[0] = textSubmission[0].toUpperCase();
    textSubmission = textSubmission.join("");
    resultDisplay.innerHTML = textSubmission;
})

//Cap the first letter of each sentence
submitBtn.addEventListener("click", function(){
    textSubmission = textSubmission.split(". ");
    for (let index = 0; index < textSubmission.length; index++) {
        textSubmission[index] = textSubmission[index].charAt(0).toUpperCase() + textSubmission[index].slice(1);
    }
    textSubmission = textSubmission.join(". ");
    resultDisplay.innerHTML = textSubmission;
})


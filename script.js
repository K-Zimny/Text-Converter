submitBtn = document.getElementById("submitDisplay");
textBox = document.getElementById("textBoxDisplay");
resultDisplay = document.getElementById("resultDisplay")

// //Transform upcase text to lowercase. Cap first Letter
// submitBtn.addEventListener("click", function(){
//     let textSubmission = textBox.value.toLowerCase();
//     textSubmission = textSubmission.split("")
//     textSubmission[0] = textSubmission[0].toUpperCase();
//     textSubmission = textSubmission.join("");
//     resultDisplay.innerHTML = textSubmission
// })

let textSubmission; 
let textArray = []
//Transform upcase text to lowercase. Cap first Letter
submitBtn.addEventListener("click", function(){
    textSubmission = textBox.value.toLowerCase();
    textSubmission = textSubmission.split("")
    // console.log(textSubmission)
    textSubmission[0] = textSubmission[0].toUpperCase();
    textSubmission = textSubmission.join("");
    resultDisplay.innerHTML = textSubmission
})

submitBtn.addEventListener("click", function(){
    textSubmission = textSubmission.split(". ")
    console.log(textSubmission)
    for (let index = 0; index < textSubmission.length; index++) {
        textSubmission[index] = textSubmission[index].charAt(0).toUpperCase() + textSubmission[index].slice(1);
    }
    // textArray = textArray.split("")
    console.log(textSubmission)
    textSubmission = textSubmission.join(". ")
    resultDisplay.innerHTML = textSubmission

})
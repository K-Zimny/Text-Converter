submitBtn = document.getElementById("submitDisplay");
textBox = document.getElementById("textBoxDisplay");

submitBtn.addEventListener("click", function(){
    let textSubmission = textBox.value;
    console.log(textSubmission)
})
"use strict";
// const tag list
const wordView = document.querySelector(".main__text-outPut > span");
const chat = document.getElementById("chatWord");
const chatBtn = document.querySelector(".main__text-btn");
const resultText = document.querySelector('.result');
const endingForm = document.getElementById("endingForm");
const timeBar = document.getElementById("timeBar");
wordView.textContent = "제로초";

setInterval(() => {
    timeBar.value = timeBar.value - 1;
    if (timeBar.value === 0){
        alert("d");
        
    }
}, 1000);


endingForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (wordView.textContent[wordView.textContent.length-1] === chat.value[0]){
        resultText.textContent = "딩동댕";
        wordView.textContent =  chat.value;
        chat.value = "";
        chat.focus();
    } else {
        resultText.textContent = "땡";
        chat.value = "";
        chat.focus();
    }
});
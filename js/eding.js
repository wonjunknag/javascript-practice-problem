"use strict";
// const tag list
const wordView = document.querySelector(".main__text-outPut > span");
const chat = document.getElementById("chatWord");
const wordViewText = wordView.textContent;
const chatText = chat.value;

// input word view
function inputWordView() {
  chat.addEventListener("keydown", (key) => {
    if (key.keyCode === 13 && wordViewText === "") {
      wordView.innerHTML = "";
      let word = chat.value;
      wordView.innerHTML = word;
      chat.value = "";
    }
  });
}
inputWordView();
// input word check
function wordViewCheck() {}
wordViewCheck();
// input word timeout

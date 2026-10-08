const inputName = document.getElementById('inputName');
const inputText = document.getElementById('inputText');
const sendButton = document.getElementById('sendButton');
const messageText = document.getElementById('messageText');

sendButton.addEventListener('click', function () {
  if (inputName.value.trim() === "" || inputText.value.trim() === "") {
    alert("入力してね");
  } else {
    const textList = document.createElement('p');
    textList.textContent = `${inputName.value} : ${inputText.value}`;
    messageText.appendChild(textList);
    inputText.value = '';
  }
});

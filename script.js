const inputText = document.getElementById('inputText');
const sendButton = document.getElementById('sendButton');
const messageText = document.getElementById('messageText');

sendButton.addEventListener('click', function () {
  const inputValue = document.getElementById('inputText').value;
  const textList = document.createElement('p');
  textList.textContent = inputText.value;
  messageText.appendChild(textList);
  inputText.value = '';
});

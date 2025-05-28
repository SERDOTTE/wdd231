const openButton = document.querySelector('#openButton');
const closeButton = document.querySelector('#closeButton');
const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'One Apple contains 52 calories.';
});

openButton2.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'One Banana contains 105 calories.';
});

openButton3.addEventListener('click', () => {
  dialogBox.showModal();
  dialogBoxText.innerHTML = 'One Cherry contains 4 calories.';
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});

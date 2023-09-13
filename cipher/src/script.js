//const textInput = document.querySelector('input[type=text]'); 


  let userName = 'Вася';
function showMassage() {
  let message = 'Привет, ' + userName;
  alert(message);
}
showMassage(); // privet, vasa

let text = prompt("введите текст");
const textInput = () => {
  let result = ' ';
  for (let i = 0; i <textInput.length; i += 2){
    const nextChar = textInput[i + 1] || ' ';
    result = `${result}${nextChar}${textInput[i]}`;
  }
  alert(result)
}
textInput(); // свое назв фунции



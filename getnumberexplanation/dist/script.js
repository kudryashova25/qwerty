const getNumberExplanation = () =>{                   /*     https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const  */
const number =prompt(`Введите число`);
      
 switch (number) {
  case "666":
    console.log("devil number");
    break;
     
  case "42":
    console.log("answer for everything");
    break;
     
  case "7":
    console.log("prime number");
    break;
     
   default:
      alert(` ${number} - just a number`);
}
}
        
 const button=document.querySelector("button");
button.addEventListener('click', playGame);
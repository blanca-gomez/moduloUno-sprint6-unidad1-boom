const resultContainer = document.getElementById('result');
const restartButton = document.getElementById('restart');

let countdown;
let randomNumber;

function startGame(){
    return new Promise ((resolve) => {
        randomNumber = Math.floor(Math.random()*3)+1;
        console.log('El numero aleatorio es: ' + randomNumber);
        //cuenta atrás 5 segundos
        countdown = 5;
        let intervalCountDown = setInterval(() => {
          countdown --;
          countdownCounter();
          if (countdown === 0){
            clearInterval(intervalCountDown);
            resolve();
            }
        }, 1000)  
    })
};

function countdownCounter () {
  document.getElementById('countdown').innerText = 'cuenta atrás: ' + countdown;
};

function results (){
  const userInput = parseInt(document.getElementById('userInput').value);
  if (userInput === randomNumber){
    resultContainer.innerText = '¡Has salvado el mundo! \n Tu número era ' + userInput + ' y el número aleatorio era '+ randomNumber;
    const crownIcon = document.createElement('img');
    crownIcon.src='/moduloUno-sprint6-unidad1-boom/img/corona.png';
    crownIcon.alt ='corona';
    resultContainer.appendChild(crownIcon);
  }else{
    resultContainer.innerText = 'La bomba ha estallado \n Tu número era ' + userInput + ' y el número aleatorio era '+ randomNumber;
  }
};

function restartGame(){
  document.getElementById('countdown').innerText = '';
  document.getElementById('result').innerText = '';
  document.getElementById('userInput').value = '';

  startGame()
    .then(() => {
        results();
    })
};

restartButton.addEventListener('click', restartGame);

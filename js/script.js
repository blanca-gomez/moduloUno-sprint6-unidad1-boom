//Obtengo elementos del DOM

const user = document.getElementById('userInput');
const countDown = document.getElementById('countdown');
const resultContainer = document.getElementById('result');

const buttonReset = document.getElementById('restart'); 
const boombresults=document.createElement('p');


let counter = 5;
let interval;


// Puedes usar `setInterval()` para generar el contador de 5 segundos (recuerda que es del 5 al 0, por tanto el intervalo debería ser uno más) 5, 4, 3, 2, 1, 0 ...


function startCountDown () {
    return new Promise((resolve,reject) => {
        interval = setInterval(() => {
            countDown.innerHTML = `Cuenta atras: ${counter} segundos`;
            counter = counter -1;
            if(counter<0){
                clearInterval(interval);
                counter = 5;
                resolve();
            }
        },1000)   
    })
}

function boombGame(){
    const userValue = user.value;
    countDown.innerHTML = '';
    resultContainer.innerText = '';
    startCountDown()
        .then(() => {
           const randomnumber = Math.floor(Math.random()*3)+1;
            if(userValue === 1 || userValue === 2 || userValue === 3 ){
                boombresults.innerText = `tu número ${user.value} es el mismo que ${randomnumber}`;
            }
            if (userValue === randomnumber){
                boombresults.innerText = 'Has salvado el mundo!'
            }else{
                boombresults.innerText = 'La bomba ha estallado!'
            } 
            resultContainer.appendChild(boombresults);
        })
        .catch((error) =>{
        console.log('Ha ocurrido un error', error)
    });
    
};

buttonReset.addEventListener('click', () => {
    // Reinicia el mensaje de resultado
    clearInterval(interval)
    // Inicia un nuevo juego
    boombGame();
});

boombGame();

  
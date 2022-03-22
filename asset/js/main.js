//Dichiaro le variabili

//Container principale
let squareContainer = document.getElementById("squareContainer");
//Box dei numeri
let boxSquare = document.createElement("div");
//Pulsante di avvio del gioco
let playButton = document.getElementById("playButton");
//Livello di difficoltà
let difficult = document.getElementById("difficult");
//Numero di celle
let divNumbers = 0;
//Array dei numeri
let array = [];

//Creo un evento al click del bottone Play
playButton.addEventListener("click",
    function(){
        //Reset della griglia per nuova partita
        squareContainer.innerHTML = "";
        //L'utente sceglie il livello del gioco, quindi quante righe e colonne creare in base alla scelta
        //Livello facile, quindi 10*10
        if (difficult.value == "Easy"){
            divNumbers = 100;
            document.documentElement.style.setProperty('--level', '10');
        //Livello medio, quindi 9*9
        } else if (difficult.value == "Medium"){
            divNumbers = 81;
            document.documentElement.style.setProperty('--level', '9');
        //Livello difficile, quindi 7*7
        } else {
            divNumbers = 49;
            document.documentElement.style.setProperty('--level', '7');
        }
        //Estrarre elementi random dall'array
        function shuffle(array){
            return array.sort(() => Math.random() - 0.5);
        }
        //Aggiungo gli elementi all'array
        for (y = 1; y < divNumbers + 1; y++){
            array.push(y);
        }
        //Mescolo l'array
        array = shuffle(array);
        //Parte il ciclo per creare gli elementi in base al livello scelto (divNumbers)
        for (i = 0; i < divNumbers; i++){
            //Creo i contenitori per ogni elemento
            let squareContainer = document.getElementById("squareContainer");
            let boxSquare = document.createElement("div");
            squareContainer.appendChild(boxSquare);
            //Aggiungo la classe creata nel foglio di stile
            boxSquare.classList.add("box");
            boxSquare.classList.add("cursor");
            boxSquare.classList.add("zoom");
            //Aggiungo i numeri random ad ogni elemento
            boxSquare.innerHTML = `${array[i]}</span>`;
            //Aggiungo un ulteriore evento al click dell'elemento
            boxSquare.addEventListener("click",
                function(){
                    //Aggiungo una classe al click dell'elemento con this
                    this.classList.add("currentElement");   
                }
            );
        }
    }
);

//Script per generare un numero random
function getRandomInt(a, b) {
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (a - b) + b);
}
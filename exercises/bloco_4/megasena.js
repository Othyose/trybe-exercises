
let olivaGame = [56, 51, 4, 22, 10, 13];


let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);


let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawNumber = megaSenaNumbers[index];

  for (let gameIndex = 0; gameIndex < olivaGame.length; gameIndex += 1) {
    let olivaGameNumber = olivaGame[gameIndex];

    if (drawNumber === olivaGameNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('Você jogou: ' + olivaGame);
console.log('O sorteio deu: ' + megaSenaNumbers); 
console.log('O total de acertos foi: ' + numberOfHits);

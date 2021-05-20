
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/*
///////// Bonus 2 /////////

let mult = [];

let conta = 0;

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] * numbers[index+1]) {
    
    conta = numbers[index] * numbers[index+1];
    mult.push (conta);
  }
  else {
    conta = numbers[index] * 2;
    mult.push (conta);
  }
 
}

console.log(mult);

///////// Bonus 2 /////////

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
  if (index === (numbers.length - 1)) {
    console.log (numbers);
  }
}

///////// Bonus 1 /////////

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
  if (index === (numbers.length - 1)) {
    console.log (numbers);
  }
}

///////// 9 /////////

let array = [];
let div = [];

for (let index = 0 ; index <= 25; index += 1) {
  
  if(index >= 1){
    array.push(index);
    div.push([index] / 2);
  }

  if (index === 25) {
    console.log (div);
  }
}

///////// 8 /////////

let array = [];

for (let index = 0 ; index <= 25; index += 1) {
  
  if(index >= 1){
    array.push(index);
  }

  if (index === 25) {
    console.log (array);
  }
}

///////// 7 /////////

let smallest = 0;

for (let index = 0 ; index < numbers.length; index += 1) {

  if (smallest === 0){
    smallest = numbers[index];
  }
  if (smallest > numbers[index]){
    smallest = numbers[index];
  }

  if (index === (numbers.length - 1)){
    console.log (smallest);
  }

}

///////// 6 /////////

let impar = 0;

for (let index = 0 ; index < numbers.length; index += 1) {

  if ((numbers[index] % 2) === 0){
  impar += 1;
  }

  if (index === (numbers.length -1) && impar === 0){
    console.log('Nenhum valor impar encontrado.');
  }
  else if (index === numbers.length -1){
    console.log (impar);
  }

}

///////// 5 /////////

let biggest = 0;

for (let index = 0 ; index < numbers.length; index += 1) {

  if (biggest < numbers[index]){
    biggest = numbers[index];
  }

  if (index === (numbers.length - 1)){
    console.log (biggest);
  }

}

///////// 4 /////////

let sum = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
  
  sum += numbers[index];

  if (index === (numbers.length - 1)) {
    if (sum / 10 > 20) {
      console.log('Valor Maior que 20.');
    }
    else {
      console.log ('Valor menor que 20.');
    }
  }
  
}

///////// 3 /////////

let sum = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
  
  sum += numbers[index];

  if (index === (numbers.length - 1)) {
    console.log (sum / 10);
  }
  
}

///////// 2 /////////

let sum = 0;

for (let index = 0 ; index < numbers.length; index += 1) {
  
  sum += numbers[index];

  if (index === (numbers.length - 1)) {
    console.log (sum);
  }
  
}

///////// 1 /////////

for (let index = 0 ; index < numbers.length; index += 1) {
  console.log (numbers[index]);
}
*/
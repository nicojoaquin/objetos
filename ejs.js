//Ejercicio 1
// console.log(`Today is ${new Date().toLocaleDateString()}`);

/*............................*/

//Ejercicio 2
// class Persona {

/*............................*/

// };

//Ejercicio 3
// class Persona {
//   constructor() {
//     this.name = "Bob";
//     this.lastName = "Dylan";
//     this.birthDate = "May 24, 1941";
//   }
// }

/*............................*/

//Ejercicio 4
// class Persona {
//   constructor(name, lastName, birthDay) {
//     this.name = name;
//     this.lastName = lastName;
//     this.birthDay = birthDay;
//   };
// }

/*............................*/

//Ejercicio 5
// class Printer {
//   printerTest() {
//     return "Retorno"
//   }; 
// };

// const myPrinter = new Printer();

// const printerTest = myPrinter.printerTest();

// console.log(printerTest);

/*............................*/

//Ejercicio 6
// class Printer {
//   constructor(model) {
//     this.model = model;
//   }
//   printerTest() {
//     return "Retorno"
//   }; 
//   getModel() {
//     return `The model of the printer is: ${this.model}`;
//   };
// };

// const _model = "TX-200";

// const myPrinter = new Printer(_model);

// console.log(myPrinter.getModel());

/*............................*/

//Ejercicio 7
// class Counter {
//   constructor(valor) {
//     this.valor = valor;
//     };
//   increaseOne() {
//     this.valor++;
//   };
//   decreaseOne() {
//     this.valor--
//   };
//   getValue() {
//     return this.valor
//   };
// };

// const counter = new Counter(0);

// counter.increaseOne();

// console.log(counter.getValue());

// counter.increaseOne();

// counter.increaseOne();

// console.log(counter.getValue());

// counter.decreaseOne();

// counter.decreaseOne();

// console.log(counter.getValue());

/*............................*/

//Ejercicio 8
// class Person {

//   constructor(birthday) {
//     this.birthday = birthday;
//   };

//   getAge() {
//     const ageDifMs = Date.now() - new Date(this.birthday).getTime();
//     const ageDate = new Date(ageDifMs); 
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };

//   canDrinkAlcohol() {
//     if(this.getAge() >= 21) {
//       return true;
//     } else {
//       return false;
//     };
//   };

// };

// console.log(new Person("02/10/1998").canDrinkAlcohol());

/*............................*/

//Ejercicio 9
// class Calculadora {

//   constructor(numA, numB) {
//     this.numA = numA;
//     this.numB = numB;
//   };

//   suma() {
//     return this.numA + this.numB;
//   };

//   resta() {
//     return this.numA - this.numB;
//   };

//   multiplicacion() {
//     return this.numA * this.numB;
//   }

//   division() {
//     return this.numA / this.numB;
//   }

// };

// console.log(new Calculadora(2, 2).division());
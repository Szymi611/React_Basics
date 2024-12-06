// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 30;
let username: string = "Wojtek";
let isInstructor: boolean = true;

let hobiess: null;

// hobiess = 1; Error bc of type delcared upper

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Wojtek",
  age: 30,
};

// person = {
//   isEmployee: true,
// }; 

let people :{
  name: string;
  age: number;
}[]; // array of objects

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

type Person = {
  name: string;
  age: number;
}

let person: Person;

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

let people2: Person[]; // array of objects


//type inference
let course: string | number = "React - The Complete Guide";

course = 1234; 
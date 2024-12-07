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

// Functions & types

function add(a: number,b: number) : number {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray;
}

const demoArray = [1,2,3];

const upadatedArray = insertAtBeginning(demoArray, 0); // [0,1,2,3]
const stringArray = insertAtBeginning(["a","b","c"],"d"); // ["d","a","b","c"]
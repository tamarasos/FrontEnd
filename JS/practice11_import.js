import chalk from "chalk";
import { sayHelloTo, addNumbers } from "./practice11_method.js";
import Person from "../practice12_person.js";
sayHelloTo('John');
sayHelloTo('Marina');

console.log(addNumbers(100,200));

console.log(chalk.blue('hello world'));

const p1=new Person("Dua", "D");
p1.printFullName();
p1.age=17;
console.log(p1);


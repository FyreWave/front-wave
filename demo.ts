import { type } from "os";

type PersonTypings = {
  name: string;
  age: number;
  isMarried: boolean;
};

const anotherPerson: any = {
  name: "John",
  age: 30,
  isMarried: "SINGLE",
};

// person.age + 5;

// console.log(person.age);

if (anotherPerson.age > 64) {
  console.log("You are old, retire");
} else {
  console.log("You are young, keep working");
}

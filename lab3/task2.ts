/*1
Реализовать встроенный Readonly<T> не используя его. Этот тип
создает новый объект с неизменяемыми свойствами из объекта T.
interface Todo {
 title: string;
 description: string;
}
const todo: MyReadonly<Todo> = {
 title: "Hey",
 description: "foobar",
};
todo.title = "Hello"; // Error
todo.description = "barFoo"; // Error
 */

type MyReadonly<T extends Object> = {readonly [P in keyof T]: T[P]};


interface Todo {
 title: string;
 description: string;
}
const todo: MyReadonly<Todo> = {
 title: "Hey",
 description: "foobar",
};
todo.title = "Hello"; // Error
todo.description = "barFoo"; // Error
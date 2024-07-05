import { adjust, flow, map, update } from 'ramda';

/**
 * Below is a Todo and TodoList class. Even though their state is private, you're going to refactor them into a functional style.
 *
 * 🧑‍💻 Create a function for each method. Make sure these functions are easy to compose with the techniques you've learned so far.
 *    Use `todos` below (line 53) as the initial state and compose your functions to get the same sequence of operations as the class methods.
 */

class Todo {
  constructor(text, done = false) {
    this.text = text;
    this.done = done;
  }

  toggle() {
    this.done = !this.done;
  }
}

class TodoList {
  #todos = [];

  add(todo) {
    this.#todos.push(todo);
  }

  remove(index) {
    this.#todos.splice(index, 1);
  }

  get(index) {
    return this.#todos.at(index);
  }

  all() {
    return this.#todos;
  }
}

const todoList = new TodoList();
todoList.add(new Todo('Get groceries'));
todoList.add(new Todo('Feed cat'));
todoList.add(new Todo('Clean toilet'));
todoList.remove(1);
todoList.get(0).toggle();

const result1 = todoList.all();
console.log(result1);

// 👇👇👇 Only change code BELOW 👇👇👇

const todos = [];

// Create functions for each method
const createTodo = null;
const toggle = null;
const add = null;
const remove = null;
const get = null;

// Run the same operations as above but by composing functions
export const result2 = flow(todos, [
  // create a todo "Get groceries"
  // create a todo "Feed cat"
  // create a todo "Clean toilet"
  // remove the second todo
  // toggle the first todo
]);

console.log(result2);

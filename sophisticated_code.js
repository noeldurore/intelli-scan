/*
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a complex JavaScript program that performs various tasks related to data processing and manipulation.
 */

// Data structure representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I identify as ${this.gender}.`);
  }
}

// Data structure representing a shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.findIndex(i => i === item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  calculateTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.price;
    });
    return total;
  }
}

// Data structure representing an item
class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Example usage of the above classes
const john = new Person("John Doe", 25, "Male");
john.introduce();

const cart = new ShoppingCart();
const item1 = new Item("Book", 19.99);
const item2 = new Item("Shirt", 29.99);
const item3 = new Item("Chair", 99.99);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

console.log(`Total price: $${cart.calculateTotal().toFixed(2)}`);

cart.removeItem(item2);

console.log(`New total price: $${cart.calculateTotal().toFixed(2)}`);

class BaseBird {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} makes sound`);
  }
}

class Birds extends BaseBird {
  makeSound() {
    console.log(`${this.name} makes sound`);
  }

  fly() {
    console.log(`${this.name} can fly`);
  }
}

class Peacock extends Birds {
  makeSound() {
    console.log(`${this.name} makes sound`);
  }

  fly() {
    console.log(`${this.name} can fly`);
  }
}

class Penguin extends BaseBird {
  makeSound() {
    console.log(`${this.name} makes sound`);
  }
}

// const b = new Birds("Peacock");
const b = new Peacock("Peacock");
const pg = new Penguin("Penguin");
b.makeSound();
b.fly();

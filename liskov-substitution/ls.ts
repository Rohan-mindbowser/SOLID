class BaseBird {
  makeSound() {
    console.log("Birds can fly");
  }
}

class Bird extends BaseBird {
  fly() {
    console.log("Birds can fly");
  }
}

class Sparrow extends Bird {
  makeSound(): void {
    console.log("Sparrow makes sound");
  }

  fly(): void {
    console.log("Sparrow can fly");
  }
}

class Penguin extends BaseBird {
  makeSound(): void {
    console.log("Penguin makes sound");
  }
}

function penguinActivity(bird: BaseBird) {
  bird.makeSound();
}

penguinActivity(new Penguin());

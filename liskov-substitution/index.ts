class Bird {
  makeSound() {
    console.log("Birds can fly");
  }
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

class Penguin extends Bird {
  makeSound(): void {
    console.log("Penguin makes sound");
  }
  fly(): void {
    throw new Error("Penguin does not fly");
  }
}

function birdActivity(bird: Bird) {
  bird.fly();
}

birdActivity(new Bird());

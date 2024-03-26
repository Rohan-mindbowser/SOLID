interface IVehicle {
  fly(): void;
  decreaseSpeed(): void;
  increaseSpeed(): void;
}

class Plane implements IVehicle {
  fly() {
    console.log("This vehicle can fly");
  }

  decreaseSpeed() {
    console.log("Decrease the speed");
  }

  increaseSpeed() {
    console.log("Increase the speed");
  }
}

// Car class exmple

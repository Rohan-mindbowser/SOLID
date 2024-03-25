interface IVehicle {
  fly();
  drive();
  increaseSpeed();
}

class Plane implements IVehicle {
  fly() {
    console.log("This vehicle can fly");
  }

  drive() {
    console.log("Drive this vehicle");
  }

  increaseSpeed() {
    console.log("Increase the speed");
  }
}

// Car class exmple

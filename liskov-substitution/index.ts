class Vehicle {
  numberOfWheels() {
    return 2;
  }
  hasEngine(): boolean | null {
    return true;
  }
}

class Car extends Vehicle {
  numberOfWheels(): number {
    return 4;
  }
}

class Cycle extends Vehicle {
  hasEngine() {
    return null;
  }
}

const vehicles: Vehicle[] = [];
vehicles.push(new Vehicle());
vehicles.push(new Car());
vehicles.push(new Cycle());

for (let vehicle of vehicles) {
  console.log("has Engine-->", vehicle.hasEngine());
}

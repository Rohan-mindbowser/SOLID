class BaseVehicle {
  numberOfWheels() {
    return 2;
  }
}

class Vehicle extends BaseVehicle {
  hasEngine(): boolean | null {
    return true;
  }
}

class Car extends Vehicle {
  numberOfWheels(): number {
    return 4;
  }
}

class Cycle extends BaseVehicle {}

const vehicles: Vehicle[] = [];
vehicles.push(new Vehicle());
vehicles.push(new Car());

const baseVehicle: BaseVehicle[] = [];
baseVehicle.push(new Vehicle());
baseVehicle.push(new Car());
baseVehicle.push(new Cycle());

for (let vehicle of vehicles) {
  console.log("has Engine-->", vehicle.hasEngine());
}

for (let vehicle of baseVehicle) {
  console.log("numberOfWheels-->", vehicle.numberOfWheels());
}

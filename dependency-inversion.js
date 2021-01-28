
/*
Dependency Inversion Principle
*/

class Sensor {
    // Interface workaroud
}

const termometer = {
    measure() {
        console.log('Measure temperature using termometer.');
    }
}

class Termometer extends Sensor { }
Object.assign(Termometer.prototype, termometer);

class AirConditioner {

    constructor(desiredTemperature, sensor) {

        this.desiredTemperature = desiredTemperature;
        this.sensor = sensor;
    }

    start() {

        if (this.sensor instanceof Sensor) {
            this.sensor.measure();
        }
        // ... do some amazing stuff
    }
}

const air = new AirConditioner(25.0, new Termometer());
air.start();
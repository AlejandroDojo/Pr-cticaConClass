class Ninja {
    constructor(nombre, salud = 20) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log("El nombre del ninja es "+this.nombre);
    }
    showStats() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
    drinkSake() {
        console.log("+10 salud");
        this.salud+= 10;
    }
}


class Sensei extends Ninja{
    constructor (nombre) {
        super(nombre);
        this.salud = 200;
        this.fuerza = 10;
        this.velocidad = 10;
        this.sabiduria = 10;
    }
    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinkSake();
    }
}


// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

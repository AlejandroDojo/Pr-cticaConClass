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
        console.log("----- Información del Ninja -----");
        console.log("Nombre: "+ this.nombre);
        console.log("Fuerza: "+ this.fuerza);
        console.log("Velocidad: "+ this.velocidad);
        console.log("Salud: "+ this.salud);
    }
    drinkSake() {
        console.log("+10 salud");
        this.salud+= 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
console.log("-------------")
ninja1.drinkSake();
ninja1.showStats();
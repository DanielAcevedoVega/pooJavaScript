export class Persona{
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getNombre(){
        return this.nombre;
    }
    set setEdad(edad){
        this.edad = edad;
    }
    get getEdad(){
        return this.edad;
    }
    set setSexo(sexo){
        this.sexo = sexo;
    }
    get getSexo(){
        return this.sexo;
    }
    saludar(){
        return `Saludo usari@ ${this.nombre} que tiene ${this.edad} años y genero ${this.sexo}`
    }
}


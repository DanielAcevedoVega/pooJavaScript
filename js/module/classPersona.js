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
    get getSaludar(){
        return `Saludo usari@ ${this.nombre} que tiene ${this.edad} años y genero ${this.sexo}`
    }
    static esMayorDeEdad(edad){
        if(edad >= 18){
            return `${edad} años es mayor de edad`
        } else{
            return `${edad} años es menor de edad`
        }
    }
}


export class Estudiante extends Persona{
    carrera;
    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }
    get getSaludar(){
        return `Saludo usari@ ${this.nombre} que tiene ${Persona.esMayorDeEdad(this.edad)} y genero ${this.sexo}`
    }
    get getEstudiar(){
        return `Su carrera es ${this.carrera}`
    }
}

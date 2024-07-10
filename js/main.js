import { Estudiante, Persona } from "./module/classPersona.js";



let nombre = document.querySelector('#name');
let edad = document.querySelector('#date');
let genero = document.querySelector('#sexo');
let carrera = document.querySelector('#carrera');
let boton = document.querySelector('#btn');

boton.addEventListener('click',()=>{

    // console.log(nombre.value)
    // console.log(edad.value)
    // console.log(genero.value)

    // console.log(calcularEdad(edad.value))

    let edadActual = calcularEdad(edad.value)

    // let persona1 = new Persona(nombre.value, edadActual, genero.value)
    // console.log(persona1.getSaludar)

    let estudiante1 = new Estudiante(nombre.value, edadActual, genero.value, carrera.value)
    console.log(estudiante1)


    document.querySelector("#resultado").innerHTML =/*html*/`
    <h2>${estudiante1.getSaludar} </h2>
    <h2>${estudiante1.getEstudiar} </h2>
    `;
})

const calcularEdad = (fecha)=> {
    let hoy = new Date();
    let nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let m = hoy.getMonth() - nacimiento.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad;
}


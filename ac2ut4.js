//Creamos la clase
class Alumno{
    constructor(nombre, edad, nota){
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
}

let alumnos = [];

//Introduce los datos de los tres alumnos
for (let i = 0; i < 3; i++) {
    let nombre = prompt("Ingrese el nombre del alumno:");
    let edad = parseInt(prompt("Ingrese la edad del alumno:"));
    let nota = parseFloat(prompt("Ingrese la nota del alumno:"));

    //Creamos el objeto con los datos introducidos
    let nuevoAlumno = new Alumno(nombre, edad, nota);

    //Lo añadimos a la lista
    alumnos.push(nuevoAlumno);

}

//Mostramos la lista
console.log(alumnos);
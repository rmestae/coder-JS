import { TaskBoard } from "./taskboard.js";
import { Tarea } from "./tarea.js";
import { createDiv } from "./creatediv.js";

export const taskBoard = new TaskBoard([]);
taskBoard.printTasks();

console.log('Probando desde consola');
console.log(taskBoard.findAllItems());


let idBoton = JSON.parse(localStorage.getItem('idBoton')) || 0;


$("#boton_agregar").click ( (event) => {

    event.preventDefault();
    const id = idBoton;
    const title = $('#input-titulo').val();
    const location = $('#input-ubicacion').val();
    const date = $('#input-fecha').val();
    const hour = $('#input-hora').val();
    const note = $('#input-notas').val();

    const newTask = new Tarea(id, title, location, date, hour, note);
    idBoton++;

    localStorage.setItem('idBoton', JSON.stringify(idBoton));
    taskBoard.addTask(newTask);
    console.log(taskBoard.findAllItems());
    createDiv(newTask);
    // $("#form-tarea")[0].reset();
    
} );


$("#boton_limpiar--todo").click ( () => {

    localStorage.clear();

})






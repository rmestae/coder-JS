import { TaskBoard } from "./taskboard.js";
import { Tarea } from "./tarea.js";
import { createDiv } from "./creatediv.js";

const taskBoard = new TaskBoard([]);
taskBoard.printTasks();

console.log('Probando desde consola');
console.log(taskBoard.findAllItems());

$("#agregar").click ( (event) => {

    event.preventDefault();
    const title = $('#input-titulo').val();
    const location = $('#input-ubicacion').val();
    const date = $('#input-fecha').val();
    const hour = $('#input-hora').val();
    const note = $('#input-notas').val();

    const newTask = new Tarea(title, location, date, hour,note);
    taskBoard.addTask(newTask);
    console.log(taskBoard.findAllItems());
    createDiv(newTask);
} );

cd


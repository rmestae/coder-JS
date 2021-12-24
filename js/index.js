import { TaskBoard } from "./taskboard.js";
import { Tarea } from "./tarea.js";
import { createDiv } from "./creatediv.js";

const taskBoard = new TaskBoard([]);

console.log('Probando desde consola');
console.log(taskBoard.findAllItems());

const formTarea = document.getElementById('form-tarea');
const newTitle = document.getElementById('input-titulo');
const newLocation = document.getElementById('input-ubicacion');
const newDate = document.getElementById('input-fecha');
const newTime = document.getElementById('input-hora');
const newNote = document.getElementById('input-notas');

formTarea.addEventListener ('submit', (event) => {

    event.preventDefault();
    const title = newTitle.value;
    const location = newLocation.value;
    const date = newDate.value;
    const hour = newTime.value;
    const note = newNote.value;

    const nuevaTarea = new Tarea(title, location, date, hour,note);
    taskBoard.addTask(nuevaTarea);
    formTarea.reset();
    console.log(taskBoard.findAllItems());
    createDiv(nuevaTarea);
} );

// const nuevaTarea = new Tarea('title', 'location', 'date', 'hour','note');
// taskBoard.addTask(nuevaTarea);


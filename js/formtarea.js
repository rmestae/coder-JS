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

    const newTask = new Tarea(title, location, date, hour,note);
    taskBoard.addTask(newTask);
    formTarea.reset();
    console.log(taskBoard.findAllItems());
    createDiv(newTask);
} );
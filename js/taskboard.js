import { createDiv } from "./creatediv.js";
import { Tarea } from "./tarea.js";

let totalTasks = 1;
export class TaskBoard {

    constructor() {
        this.tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    }

    printTasks(){
        if (this.tareas){
            for (let i = 0; i<=this.tareas.length-1; i++){
                createDiv(this.tareas[i]);
            }
        } else {
            console.log("Taskboard vacío");
        }
    }

    findAllItems() {
        return this.tareas;
    }

    addTask(nuevaTarea) {
        this.tareas.push( nuevaTarea );
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }

    newTask(id, titulo, ubicacion, fecha, hora, notas){
        const nuevaTarea = new Tarea (id, titulo, ubicacion, fecha, hora, notas);
        this.addTask(nuevaTarea);
        totalTasks++;
    }

    findById( taskId ) {

        const task = this.tareas.find( element => element.id === taskId )

        if ( !task ) {
            throw new Error('No existe la tarea ' + taskId)
        }

        return task;
    }

    updateTask( taskName, taskProperty, taskChange ) {

        const task = this.findByTitle( taskName );
        const index = this.tareas.indexOf( taskProperty );
        this.lista[index].cantidad = cantidad;
        if( cantidad <= 0 ) {
            this.tareas[index].taskProperty = taskChange;
        }
 
    }

    deleteTask( taskId ) {
        const task = this.findById( taskId );
        const index = this.tareas.indexOf(task);
        this.tareas.splice( index, 1 );
    }

}
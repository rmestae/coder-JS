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

    newTask(titulo, ubicacion, fecha, hora, notas){
    
        const nuevaTarea = new Tarea (titulo, ubicacion, fecha, hora, notas);
        this.addTask(nuevaTarea);
        alert(`Tarea Nueva ${totalTasks} :'${titulo}' ha sido creada exitosamente.`)
        totalTasks++;
    }

    findByTitle( taskName ) {

        const task = this.tareas.find( element => element.titulo === taskName )

        if ( !task ) {
            throw new Error('No existe la tarea ' + taskName)
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

    deleteTask( taskName ) {

        const task = this.findByTitle( taskName );
        const index = this.tareas.indexOf(task);
        this.lista.splice( index, 1 );
    }

}
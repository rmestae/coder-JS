import { taskBoard } from "./index.js";
import { TaskBoard } from "./taskboard.js";

export const createDiv = (newTask) => {

    $(`<div class="nueva-tarea glass" id="tarea-${newTask.id}">
            <h2>
                ${newTask.titulo}
            </h2> 

            <p>
                <i class="fas fa-map-marker-alt"></i>
                ${newTask.ubicacion}
            </p>

            <p>
                <i class="fas fa-calendar"></i>
                ${newTask.fecha}
            </p>

            <p>
                <i class="fas fa-clock"></i>
                ${newTask.hora}
            </p>

            <p>
                <i class="fas fa-sticky-note"></i>
                ${newTask.notas}
            </p>

            <button id="boton_eliminarTarea-${newTask.id}" class="boton_borrar glass">X</button>

        </div>`).appendTo("#nuevas-tareas").slideDown();

        $(`#boton_eliminarTarea-${newTask.id}`).on ("click", () => {

            $(`#tarea-${newTask.id}`).toggle(
                "scale",
                
                function(){
                    console.log("eliminar id " + newTask.id );
                    taskBoard.deleteTask(newTask.id);
                    $(`#tarea-${newTask.id}`).remove();
                }
            );
        })
}

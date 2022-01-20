
export const createDiv = (newTask) => {

    
    $(`<div class='nueva-tarea glass'>
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

            <button class="boton_borrar glass" id="${newTask.id}">X</button>

        </div>`).appendTo("#nuevas-tareas");
}

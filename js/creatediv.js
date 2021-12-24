
export const createDiv = (newTask) => {

    const nuevaTarea = document.getElementById('nuevas-tareas');

    const tareaDiv = document.createElement('div');
    tareaDiv.className = "nueva-tarea";
    tareaDiv.innerHTML = `    
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
                                `

                        
        nuevaTarea.appendChild (tareaDiv);

}
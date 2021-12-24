

export const createDiv = (newTask) => {

    const nuevaTarea = document.getElementById('nuevas-tareas');

    const tareaDiv = document.createElement('div');
    tareaDiv.className = "nueva-tarea";
    tareaDiv.innerHTML = `
                                <h2>Nueva Tarea</h2>
                                <p>
                                ${newTask.titulo}
                                </p>

                                <p>
                                ${newTask.ubicacion}
                                </p>

                                <p>
                                ${newTask.fecha}
                                </p>

                                <p>
                                ${newTask.hora}
                                </p>

                                <p>
                                ${newTask.notas}
                                </p> `

                        
        nuevaTarea.appendChild (tareaDiv);

}
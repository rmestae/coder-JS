export class Tarea {
    constructor(id, titulo, ubicacion, fecha, hora, notas) {
        this.id = id;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.fecha = fecha;
        this.hora = hora;
        this.notas = notas;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        return this.titulo;
    }

    getLocation() {
        return this.ubicacion;
    }

    getDate() {
        return this.fecha;
    }

    getTime() {
        return this.hora;
    }

    getNotas() {
        this.notas;
    }
    
}
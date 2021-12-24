export class Tarea {
    constructor(titulo, ubicacion, fecha, hora, notas) {
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.fecha = fecha;
        this.hora = hora;
        this.notas = notas;
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
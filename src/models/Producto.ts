export class Producto{

    private nombre:string

    constructor(nombre:string){
        this.nombre = nombre;
    }

    conseguirNombre(){
        return `Nombre: ${this.nombre}`
    }

    cambiarNombre(nombre:string){
        this.nombre = nombre;
    }
}
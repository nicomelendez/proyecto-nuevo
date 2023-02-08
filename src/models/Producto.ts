export class Producto{

    private nombre:string
    private precio:number
    private categoria: Categoria
    constructor(nombre:string, precio:number, categoria:Categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    conseguirNombre(){
        return ` ${this.nombre}`
    }

    conseguirPrecio(){
        return `$ ${this.precio}`
    }

    conseguirCategoria(){
        return `Categoria: ${this.categoria.descripcion}`
    }

    cambiarNombre(nombre:string){
        this.nombre = nombre;
    }
}

interface Categoria{
    id:number,
    descripcion:string
}
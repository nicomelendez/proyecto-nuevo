import { useState } from 'react'
import { Producto } from '../models/Producto';

export const useProducto = () => {

    const [listaDeProductos, setProducto] = useState([])
    
    const conseguirProductos = () =>{
        return listaDeProductos;
    }

    const nuevoProducto = ({nombre, descripcion, precio}) => {
        if(nombre.trim() !== ''){
            const oProducto = new Producto(nombre, precio, descripcion);
            console.log(oProducto)
            setProducto([...listaDeProductos, oProducto])
            return oProducto;
        }
        return null;
    }

    const limpiarLista = () => {
        setProducto([]);
    }

    const eliminarDeLaLista = (index) => {
        setProducto(listaDeProductos.filter((_, i) => i !== index));
    }

    const cambiarNombre = (i, {nombre}) =>{
      const nuevaLista = listaDeProductos.map((producto,index)=>{
   
            if(index === i){
                producto.cambiarNombre(nombre)
            }
            return producto
            
        })
        setProducto(nuevaLista)
    }
    return {
        conseguirProductos,
        nuevoProducto,
        limpiarLista,
        eliminarDeLaLista,
        cambiarNombre
    }
}
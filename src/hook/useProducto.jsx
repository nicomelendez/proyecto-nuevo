import { useState } from 'react'
import { Producto } from '../models/Producto';

export const useProducto = () => {

    const [listaDeProductos, setProducto] = useState([])

    const conseguirProductos = () =>{
        return listaDeProductos;
    }

    const nuevoProducto = ({nombre}) => {
        if(nombre.trim() !== ''){
            const oProducto = new Producto(nombre);
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
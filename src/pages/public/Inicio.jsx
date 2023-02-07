import React,{useState, useEffect} from 'react'
import { useProducto } from '../../hook/useProducto'
import { useForm } from '../../hook/useForm'

const limpiarInput = (e)=>{
  e.target.nombre.value = '';
}

export const Inicio = () => {
  
  const [lista, setLista] = useState([])
  const {changed, form, limpiar} = useForm({})
  const {nuevoProducto, conseguirProductos, limpiarLista,eliminarDeLaLista, cambiarNombre} = useProducto();  
  const [index, setIndex] = useState(null)

  const enviar = (e) =>{
    e.preventDefault();
    const nuevo = nuevoProducto(form)
    if(nuevo !== null){
      limpiarInput(e)
      limpiar()
      return true;
    }
    alert('Debes elegir un nombre')
  }

  const mostrarInput = (item) =>{
    setIndex(item)
  }
  const cerrarInput = () => {
    setIndex(null)
  }

  const editarProducto = (i) =>{
    if(!form.nombre || form.nombre.trim() === ''){
      alert('error')
      return false;
    }
    cambiarNombre(i, form)
    limpiar()
    setIndex(null)
  }
   

  useEffect(()=>{
    setLista(conseguirProductos());
  },[conseguirProductos])

  return (

    <section>
      <form onSubmit={enviar} className='flex-col space-y-5 items-center mx-auto w-2/4 text-center' >
        <div>
          <label>
            Nombre
            <input className='w-full' type='text' name='nombre' onChange={changed}/>       
          </label>
        </div>
        <div>
          <button className='bg-white px-3 py-2'>Guardar</button>
        </div>
      </form>

      <ul className='py-5 w-3/5 mx-auto'>
        {lista.length !== 0 ? (<li className='text-center py-2 font-bold'><p>Lista de productos</p></li>) : (<></>)}
        {lista.length !== 0 ? lista.map((item,i)=>{

          return(<li className='flex py-2 justify-evenly gap-5' key={i}>
            <div className='w-2/4'>
            {index === i 
             ? (<div>
              <input className='' type='text' name='nombre' onChange={changed} />
             </div>) 
             : (<p className='font-ligth w-4/5'>{item.conseguirNombre()}</p>)}
            </div>
            
            <div className='flex gap-5 px-2'>
            {index === i 
             ? (<>
              <button className='bg-white px-2' onClick={()=>editarProducto(i)}>Modificar</button>
              <button className='bg-white px-2' onClick={cerrarInput}>Cerrar</button>
             </>) 
             : (<>
              <button className='bg-white px-2' onClick={()=>mostrarInput(i)}>Editar</button>
              <button className='bg-white px-2' onClick={()=>eliminarDeLaLista(i)}>Eliminar</button>
             </>)}
              
            </div>

          </li>)
        }) : (<div className='text-center text-lg'>
          <p>Añada productos</p>
        </div>)
        }
      </ul>

      <div className='flex justify-center py-5 gap-5 mx-auto w-3/5'>
        <button onClick={limpiarLista} className='bg-white px-3 py-2'>
          Limpiar
        </button>
        <button onClick={()=>console.log(lista)} className='bg-white px-3 py-2'>
          Console
        </button>
      </div>
    </section>
    
  )
}


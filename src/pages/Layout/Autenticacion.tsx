import React, { ReactElement, useEffect, useState } from 'react'
import useAuth from '../../hook/useAuth';

export const Autenticacion = ( {autorizado, noAutorizado} : autorizadoProps) => {

    const {auth} = useAuth();
    const [estaAutorizado, setEstaAutorizado] = useState(false);

    useEffect(()=>{
        
        
    },[auth])

  return (
    <>
        {estaAutorizado 
        ? autorizado 
        : noAutorizado}
    </>
  )
}

interface autorizadoProps{
    autorizado:ReactElement,
    noAutorizado: ReactElement
}
import React from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { routes } from '../../../routes/routes'

export const PublicLayout = () => {
  return (
    <div className='h-screen flex-col bg-slate-500 '>
        <nav className='h-32'>
            <ul className='flex justify-center gap-5'>
                {
                    routes.map(({name, to},i)=>{
                        return(
                            <li key={i}>
                                <NavLink to={to} >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>

        <Routes>
            {
                routes.map(({to, path, Component})=>{
                    return(
                        <Route key={to} path={path} element={<Component/>} />
                    )
                })
            }
            <Route path='/*' element={<Navigate to={routes[0].to} replace/>}/>
        </Routes>

        <footer>
            <p>
                Algo
            </p>
        </footer>
    </div>
  )
}

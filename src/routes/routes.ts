import { Inicio } from "../pages/public/Inicio";
import { Login } from "../pages/public/Login";

type JSXComponent = () => JSX.Element;

interface Route{
    to:string;
    path:string;
    Component: JSXComponent | any;
    name:string;
}

export const routes:Route[] = [
    {
        to: '/inicio',
        path:'/inicio/*',
        Component: Inicio,
        name: 'Inicio'
    },
    {
        to:'/login',
        path:'/login/*',
        Component: Login,
        name: 'Inicio de sesión'
    }
]
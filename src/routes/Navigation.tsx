import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { Autenticacion } from "../pages/Layout/Autenticacion";
import { PrivateLayout } from "../pages/Layout/private/PrivateLayout";
import { PublicLayout } from "../pages/Layout/public/PublicLayout";

export const Navigation = () =>{
    return(
        <Suspense fallback={<></>}>
            <BrowserRouter>
                <AuthProvider>
                    <Autenticacion autorizado={<PrivateLayout/>} noAutorizado={<PublicLayout/>} />
                </AuthProvider>
            </BrowserRouter>
        </Suspense>
    )
}
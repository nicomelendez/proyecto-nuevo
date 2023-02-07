import React, { useState, useEffect, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = React.memo(({children}) => {

   const [auth, setAuth] = useState({});
   
   useEffect(()=>{
    // authUser();
   },[]);

//    const authUser = async () => {
     
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('user');

//      if(!token || !user){
//         return false;
//      }

//      const userObj = JSON.parse(user);
//      const userId = userObj.id;

//      const request = await fetch(Global.urlDev+'usuario/'+userId,{
//         method: "GET",
//         headers: {
//             "Content-Type":"application/json",
//             "Authorization": token
//         }
//      })

//      const data = await request.json();

//      setAuth(data.usuario)
//    }

  return (
    <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
        {children}
    </AuthContext.Provider>
  )
})

export default AuthContext;
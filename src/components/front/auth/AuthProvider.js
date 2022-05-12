import jwtDecode from "jwt-decode";
import { useContext, createContext, useState, useEffect } from "react";
import authProvider from "../utils/authProvider"
let AuthContext = createContext(null);

export function AuthProvider({ children }) {
  let [user, setUser] = useState(null);
  let [authenticated, setAuthenticated] = useState(false);
  let [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    authProvider.checkAuth()
      .then(() => {
        setUser(jwtDecode(localStorage.getItem("token")));
        setAuthenticated(true)
        authProvider.getPermissions()
          .then(roles => {
            roles.includes('ROLE_ADMIN') ? setIsAdmin(true) : setIsAdmin(false)
          })
          .catch(() => setIsAdmin(false))
      }
      )
      .catch(() => {
        setUser(null);
        setAuthenticated(false)
        setIsAdmin(false)
      })
  }, [authenticated])


  return <AuthContext.Provider value={{ ...authProvider, user, authenticated, isAdmin, setAuthenticated }}>
    {children}
  </AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
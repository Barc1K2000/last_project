import {NavBar} from "../NavBar/NavBar"
import {BrowserRouter} from "react-router-dom"
import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "../../context/authContext";
import { useRoutes } from "../../routes";

function App() {
  const {token, login,logout, userId,isAdmin} = useAuth()
  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{token,login,logout,userId,isAuthenticated,isAdmin}}>
    <div className="App">
      <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated}/>
      {useRoutes(isAuthenticated)}
      </BrowserRouter>
    </div>
    </AuthContext.Provider>
  );
}


export default App;

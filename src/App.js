import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewElement from "./pages/newElement/NewElement";
import { productInputs, userInputs } from "./formSource";

//dark light mode
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { AuthContext } from './context/AuthContext'

function App() {
  const { darkMode } = useContext(DarkModeContext);
 //to protect Routes
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path='login' element={<Login />} />

            <Route index element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            } />

            <Route path='users'>
              <Route index element={
                <RequireAuth>
                  <List />
                </RequireAuth>
              } />


              <Route path=':userId' element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />


              <Route path='new'
                element={
                  <RequireAuth>
                    <NewElement inputs={userInputs}
                      title='Add New User' />
                  </RequireAuth>
                } />

            </Route>
            <Route path='products'>
              <Route index element={
                <RequireAuth>
                  <List />
                </RequireAuth>} />

              <Route path=':productId' element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />

              <Route
                path='new'
                element={
                  <RequireAuth>
                    <NewElement inputs={productInputs}
                      title='Add New Product' />
                  </RequireAuth>

                } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

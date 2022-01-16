import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import Appoinment from './pages/Appoinment/Appoinment/Appoinment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>


          <Switch>


            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>



            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>



            <PrivateRoute path="/dashBoard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>


          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

// if you want to continue this project start from video 75-5.
export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import Banner from './components/Home/Banner/Banner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';
import Login from './components/Home/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Contexts/AuthProvider';
import Detailes from './components/Home/Detailes/Detailes';
import AddService from './components/Home/AddService';
import MyBooking from './components/Home/MyBooking/MyBooking';
import ADashBoard from './components/Home/AdminDashBoard/ADashBoard';
import Home from './components/Home/Home/Home';
import Register from './components/Home/Ragister/Register';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/detailes/:serviceId">
              <Detailes></Detailes>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/aDashBoard">
              <ADashBoard></ADashBoard>
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

export default App;

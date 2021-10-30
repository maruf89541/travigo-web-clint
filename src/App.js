import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import Banner from './components/Home/Banner/Banner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';
import Login from './components/Home/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Detailes from './components/Home/Detailes/Detailes';
import AddService from './components/Home/AddService';
import MyBooking from './components/Home/MyBooking/MyBooking';
import ADashBoard from './components/Home/AdminDashBoard/ADashBoard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Banner></Banner>
              <Services></Services>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/detailes/:serviceId">
              <Detailes></Detailes>
            </Route>
            <Route path="/addService">
              <AddService></AddService>

            </Route>
            <Route path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/aDashBoard">
              <ADashBoard></ADashBoard>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

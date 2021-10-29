import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import Banner from './components/Home/Banner/Banner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';
import Login from './components/Home/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Detailes from './components/Home/Detailes/Detailes';

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
          </Switch>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

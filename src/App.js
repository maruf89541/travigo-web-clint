import logo from './logo.svg';
import './App.css';
import Header from './components/Home/Header/Header';
import Banner from './components/Home/Banner/Banner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;

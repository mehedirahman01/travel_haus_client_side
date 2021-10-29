import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Header from './Pages/HomePage/Header/Header';
import Footer from './Pages/HomePage/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Set Routes */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

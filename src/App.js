import './App.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Header from './Pages/HomePage/Header/Header';
import Footer from './Pages/HomePage/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import LoginPage from './Pages/LoginPage/LoginPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Packages from './Pages/PackagesPage/Packages/Packages';
import BookingPage from './Pages/BookingPage/BookingPage';
import MyBookingsPage from './Pages/MyBookingsPage/MyBookingsPage/MyBookingsPage';
import AllBookingsPage from './Pages/AllBookingsPage/AllBookingsPage/AllBookingsPage';
import AddPackagePage from './Pages/AddPackagePage/AddPackagePage';

function App() {
  return (
    <div className="App">
      {/* Set Routes */}
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/login">
              <LoginPage></LoginPage>
            </Route>

            <Route exact path="/packages">
              <Packages></Packages>
            </Route>

            <PrivateRoute exact path="/book/:_id">
              <BookingPage></BookingPage>
            </PrivateRoute>

            <PrivateRoute exact path="/myBookings">
              <MyBookingsPage></MyBookingsPage>
            </PrivateRoute>

            <PrivateRoute exact path="/allBookings">
              <AllBookingsPage></AllBookingsPage>
            </PrivateRoute>

            <PrivateRoute exact path="/addPackage">
              <AddPackagePage></AddPackagePage>
            </PrivateRoute>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

// dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import ServicesItem from './components/ServicesItem/ServicesItem';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import BlogsItem from './components/BlogsItem/BlogsItem';
import Appointment from './components/Appointment/Appointment';

function App() {
  
  return (
    <div>
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/services'><Services /></Route>
          <PrivateRoute path='/service/:serviceId'><ServicesItem /></PrivateRoute>
          <Route path='/doctors'><Doctors /></Route>
          <Route path='/blogs'><Blogs /></Route>
          <PrivateRoute path='/blog/:blogId'><BlogsItem /></PrivateRoute>
          <Route path='/about'><About /></Route>
          <PrivateRoute path='/contact'><Contact /></PrivateRoute>
          <Route path='/login'><Login /></Route>
          <Route path='/register'><Register /></Route>
          <PrivateRoute path='/appointment'><Appointment /></PrivateRoute>
          <Route path='*'><NotFound /></Route>
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

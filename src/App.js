import './App.css';
import Navbar from './components/Navbar';
import Mainbody from './components/Mainbody';
import Authors from './components/pages/Authors';
import Icons from './components/pages/Icons';
import Interfaceicon from './components/pages/Interfaceicon';
import Animatedicon from './components/pages/Animatedicon';
import Topicon from './components/pages/Topicon';
import Footer from './components/Footer';
import Pack from './components/pages/Pack';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch >
          <Route exact path='/'>
            <Mainbody />
          </Route>
          <Route  path='/authors'>
            <Authors />
          </Route>
          <Route  path='/icons'>
            <Icons />
          </Route>
          <Route  path='/interface-icons'>
            <Interfaceicon />
          </Route>
          <Route  path='/animated-icons'>
            <Animatedicon />
          </Route>
          <Route path="/most-downloads">
            <Topicon />
          </Route>
          <Route path="/pack">
            <Pack />
          </Route>
          
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;

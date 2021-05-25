import './App.css'; //Estilo

//componentes
import Devlog from './Components/Devlog.js';
import Proyects from './Components/Proyects.js';
import Navbar from './Components/Navbar.js';
import Whoami from './Components/Whoami.js';
import { Home } from './Components/Home';

//react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
      <div className='app-container'>
       <div className="sidebar-container">
          <Navbar/>    
        </div>
        <div className='main'>          
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/Whoami' component={Whoami}/>          
              <Route path='/Devlog' component={Devlog}/>      
              <Route path='/Proyects' component={Proyects}/>
          </Switch>              
        </div>
      </div>
  </Router>
  );
}

export default App;

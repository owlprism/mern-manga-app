import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Anime from './Components/Anime.jsx';
import Students from './Components/Students.jsx';
import SW from './Components/SW.jsx';
import Home from './Components/Home.jsx';
import Navigation from './Components/Navigation.jsx'

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation />
            <Switch>
                <Route path='/anime' component={Anime}/>
                <Route path='/students' component={Students}/>
                <Route path='/sw' component={SW}/>
                <Route path='/' component={Home}/>
            </Switch>
        </Router>
    </div>
  );
}


export default App;

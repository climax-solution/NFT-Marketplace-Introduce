import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import OriginalBuyback from './components/OriginalBuyback';
import './App.css';
import Home from "./pages/Home";
import Team from "./pages/Team";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/team" component={Team}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

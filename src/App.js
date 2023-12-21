import Navbar from './Navbar';
import Home from './Home';
import Santa from './Santa';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  document.title = "Merry Christmas Steve";
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
            <Navbar />
          </Route>
          <Route exact path="/santa">
            <Santa />
            <Navbar />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
export default App;









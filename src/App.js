import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizCharacter from './pages/QuizCharacter';
import './App.css';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quiz">
          <QuizCharacter />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

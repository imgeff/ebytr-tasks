import { Switch, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Task } from './pages/Task';
import './App.css';

function App() {

  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/tasks" component={ Task } />
    </Switch>
  );
}

export default App;

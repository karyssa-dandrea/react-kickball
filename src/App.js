import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import TeamList from './views/Teams/Teams';
import TeamDetail from './views/Teams/Team';
import PlayerDetail from './views/Players/Player';
import PlayerList from './views/Players/Players';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/teams"> Teams </NavLink>
          <NavLink to="/players"> Players </NavLink>
        </header>
        <Switch>
          <Route Path="/teams/:id" component={TeamDetail} />
          <Route Path="/teams" component={TeamList} />
          <Route Path="/players/:id" component={PlayerDetail} />
          <Route Path="/players" component={PlayerList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

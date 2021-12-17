import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import TeamList from './views/Teams/TeamList';
import TeamDetail from './views/Teams/TeamDetail';
import PlayerDetail from './views/Players/PlayerDetail';
import PlayerList from './views/Players/PlayerList';

function App() {
  return (
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
  );
}

export default App;

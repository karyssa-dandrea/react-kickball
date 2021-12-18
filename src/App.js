import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Teams from './views/Teams/Teams';
import Team from './views/Teams/Team';
import Player from './views/Players/Player';
import Players from './views/Players/Players';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/teams"> Teams </NavLink>
          <NavLink to="/players"> Players </NavLink>
          <NavLink to="/">Home</NavLink>
        </header>
        <Switch>
          <Route path="/teams/:id" component={Team} />
          <Route path="/teams" component={Teams} />
          <Route path="/players/:id" component={Player} />
          <Route path="/players" component={Players} />
          <Route path="/">
            <h1> Welcome to the Home Page!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

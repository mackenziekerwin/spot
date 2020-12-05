import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Hotspots from './components/Hotspots';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/hotspots' component={Hotspots} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/users/:username' component={Profile} />
      </Switch>
    </main>
  )
}

export default App;

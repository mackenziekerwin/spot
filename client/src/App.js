import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Hotspots from './components/Hotspots';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import DogTable from './components/DogTable';
import Breeds from './components/Breeds'

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/hotspots' component={Hotspots} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/users/:username' component={Profile} />
        <Route path='/breeds' component={Breeds} exact />
        <Route path='/breeds/:breed_id' component={DogTable} />
      </Switch>
    </main>
  )
}

export default App;

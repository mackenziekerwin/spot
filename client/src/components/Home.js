import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='App'>
      <h1>Spot!</h1>
      <p><Link to='/hotspots'>Hotspots</Link></p>
      <p><Link to='/leaderboard'>Leaderboard</Link></p>
      <p><Link to='/breeds'>Breeds</Link></p>
    </div>
  )
}

export default Home;

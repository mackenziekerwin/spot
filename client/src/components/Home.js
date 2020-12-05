import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p><Link to='/hotspots'>Hotspots</Link></p>
      <p><Link to='/leaderboard'>Leaderboard</Link></p>
    </div>
  )
}

export default Home;

import Graph from '../Graph'
import SidePanel from '../SidePanel'
import SearchBar from '../SearchBar'
import PieChart1 from '../PieChart1'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="side-panel">
      <SidePanel />
    </div>
    <div className="main-content">
      <SearchBar />
      <Graph />
      <PieChart1 />
    </div>
  </div>
)

export default Home

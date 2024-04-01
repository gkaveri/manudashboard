import {FaChartPie, FaTags, FaCalendarAlt, FaUser, FaCogs} from 'react-icons/fa'
import './index.css'

const SidePanel = () => (
  <div className="side-container">
    <div className="panel">
      <h1 className="heading1">Board</h1>
      <ul className="items">
        <li className="list-item">
          <FaChartPie className="pie1" />
          <h1 className="h2">Dashboard</h1>
        </li>
        <li className="list-item">
          <FaTags className="pie2" />
          <h1 className="h1">Transactions</h1>
        </li>
        <li className="list-item">
          <FaCalendarAlt className="pie" />
          <h1 className="h1">Schedules</h1>
        </li>
        <li className="list-item">
          <FaUser className="pie" />
          <h1 className="h1">Users</h1>
        </li>
        <li className="list-item">
          <FaCogs className="pie" />
          <h1 className="h1">Settings</h1>
        </li>
      </ul>
    </div>
    <div className="panel2">
      <h3>Help</h3>
      <h3>Contact Us</h3>
    </div>
  </div>
)

export default SidePanel

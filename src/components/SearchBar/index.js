import {IoIosCamera} from 'react-icons/io'
import {FaTags} from 'react-icons/fa'
import {AiOutlineLike} from 'react-icons/ai'
import {PiUsers} from 'react-icons/pi'
import './index.css'

const SearchBar = () => (
  <div className="head-part">
    <div className="top-section">
      <div className="top">
        <h1>Dashboard</h1>
      </div>
      <div className="search-container">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
        />
      </div>
    </div>
    <div className="abcd">
      <div className="box bo">
        <IoIosCamera className="revenue-icon" />
        <div className="content">
          <p className="para">Top Revenues</p>
          <h2>$2,129,430</h2>
        </div>
      </div>
      <div className="bo box box2">
        <FaTags className="revenue-icon" />
        <div className="content">
          <p className="para">Top Transactions</p>
          <h2>1,520</h2>
        </div>
      </div>
      <div className="bo box box3">
        <AiOutlineLike className="revenue-icon" />
        <div className="content">
          <p className="para">Top Likes</p>
          <h2>9,721</h2>
        </div>
      </div>
      <div className="bo box box4">
        <PiUsers className="revenue-icon" />
        <div className="content">
          <p className="para">Top Users</p>
          <h2>892</h2>
        </div>
      </div>
    </div>
  </div>
)

export default SearchBar

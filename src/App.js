import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
)

export default App

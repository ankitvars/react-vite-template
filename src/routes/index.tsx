import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import Header from '../components/Header'

function AppRoutes() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes
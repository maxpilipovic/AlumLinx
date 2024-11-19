import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'; // Import the Home component
// Import other components as needed (e.g., Profile, Jobs)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Add more routes for other pages like Profile, Jobs, etc */}
      </Routes>
    </Router>
  );
}

export default App;
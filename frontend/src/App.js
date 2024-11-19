import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'; //Landing page
//Import other profiles etc

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/*Add routes here*/}
      </Routes>
    </Router>
  );
}

export default App;
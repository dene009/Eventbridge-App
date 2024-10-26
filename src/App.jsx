import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from '../src/routes/routes';  // Import your routes array

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

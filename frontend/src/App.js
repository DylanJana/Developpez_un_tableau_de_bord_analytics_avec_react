import './App.css';
// Import Routes, Route to manage routes in my app
import {Routes, Route, Navigate} from 'react-router-dom';
// Import Differents Pages
import Home from './Pages/Home/Home';
import Profil from './Pages/Profil/Profil';
import Error404 from './Pages/Error404/Error404';

/**
 * Render routes of app
 * @returns {JSX}
 * @author Dylan
 * @version 1.0
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/** Dynamically path with user id */}
        <Route path='/user/:id' element={<Profil />} />
        <Route path='/404' element={<Error404 />} />
        {/** This route is use when page doesn't exist */}
        <Route path='*' element={<Navigate to="404"/>} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
// Import Routes, Route to manage routes in my app
import {Routes, Route} from 'react-router-dom';
// Import Differents Pages
import Home from './Pages/Home/Home';
import Profil from './Pages/Profil/Profil';
import Error404 from './Pages/Error404/Error404';
import Comming from './Pages/Comming/Comming';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        {/** Dynamically path with user id */}
        <Route path='/user/:id' element={<Profil />} />
        {/** Page to Comming */}
        <Route path='/comming-soon' element={<Comming />} />
        {/** This route is use when page doesn't exist */}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;

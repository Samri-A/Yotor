import logo from './logo.svg';
import { BrowserRouter , Route , Routes  } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Courses from './pages/Courses';
import Learn from './pages/Learn';
import Dashboard from './pages/Dashboard';

function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path='/register' element={<Register/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/learn' element={<Learn/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;

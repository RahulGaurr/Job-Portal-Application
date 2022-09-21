import './App.css';
import AddJob from './components/AddJob';
import ApplyJob from './components/ApplyJob';
import Navbar from './components/Navbar';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
         <Route path='/' element={ <Login />} />
         <Route path='/apply' element={ <ApplyJob />} />
         <Route path='/add' element={ <AddJob />} />
          
      </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;

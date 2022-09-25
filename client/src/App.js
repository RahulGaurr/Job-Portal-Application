import './App.css';
import AddJob from './components/AddJob';
import ApplyJob from './components/ApplyJob';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ApplyNewJob from './components/ApplyNewJob';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
         <Route path='/' element={ <Login />} />
         <Route path='/applyview' element={ <ApplyJob />} />
         <Route path='/add' element={ <AddJob />} />
         <Route path='/applyjob' element={<ApplyNewJob />}></Route>
          
      </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;

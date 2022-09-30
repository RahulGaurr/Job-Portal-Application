import './App.css';
import AddJob from './components/AddJob';
import Navbar from './components/Navbar';
import Login from './components/Login';
import ApplyView from './components/ApplyView';
import ApplyNewJob from './components/ApplyNewJob';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
         <Route path='/' element={ <Login />} />
         <Route path='/applyview' element={ <ApplyView />} />
         <Route path='/add' element={ <AddJob />} />
         <Route path='/applyjob' element={ <ApplyNewJob />} />     
      </Routes>
   </BrowserRouter>
   
   </>
  );
}

export default App;

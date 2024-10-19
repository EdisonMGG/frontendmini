import './App.css';
import AddLeave from './components/StudAddLeave';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import StudSignup from './components/StudSignup';
import StudLogin from './components/StudLogin';
import HodLogin from './components/HodLogin';
import FacultyLogin from './components/FacultyLogin';
import FacultyAddLeave from './components/FacultyAddLeave';
import SearchLeaveStud from './components/SearchLeaveStud';
import SearchLeaveFaculty from './components/SearchLeaveFaculty';
import Viewstud from './components/ViewStud';
import ViewFaculty from './components/ViewFaculty';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<HomePage/>}/>
      <Route path='/studsignup' element={<StudSignup/>}/>
      <Route path='/studlogin' element={<StudLogin/>}/>
      <Route path='/HodSignIn' element={<HodLogin/>}/>
      <Route path='/facultylogin' element={<FacultyLogin/>}/>
      <Route path='/studaddleave' element={<AddLeave/>}/>
      <Route path='/facultyaddleave' element={<FacultyAddLeave/>}/>
      <Route path='/searchleavestud' element={<SearchLeaveStud/>}/>
      <Route path='/searchleavefaculty' element={<SearchLeaveFaculty/>}/>
      <Route path='/viewStud' element={<Viewstud/>}/>
      <Route path='/viewFaculty' element={<ViewFaculty/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

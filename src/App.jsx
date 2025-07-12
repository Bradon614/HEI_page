import Navbar from './components/NavBar'
import Aside from './components/Aside'
import About from './components/about'
import Team from './components/team';
import Deboche from './components/deboucher';
import Admission from './components/admission';
import Techno from './components/techno';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  
  return (
    <>
      <Navbar/>
      <Aside/>
      <About/>
      <Team/>
      <Deboche/>
      <Admission/>
      <Techno/>
    </>
  )
}

export default App

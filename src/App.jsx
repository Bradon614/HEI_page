import Navbar from './components/NavBar'
import Aside from './components/Aside'
import About from './components/about'
import Team from './components/team';
import Deboche from './components/deboucher';
import Admission from './components/admission';
import Techno from './components/techno';

import Domaines from './components/domaine';
import Footer from './components/footer';


function App() {
  
  return (
    <>
      <Navbar/>
      <Aside/>
      <About/>
      <Team/>
      <Deboche/>
      <Domaines/>
      <Admission/>
      <Techno/>
      <Footer/>
    </>
  )
}

export default App

import Navbar from './components/NavBar'
import Aside from './components/Aside'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './components/about'
import Team from './components/team';

function App() {
  
  return (
    <>
      <Navbar/>
      <Aside/>
      <About/>
      <Team/>
    </>
  )
}

export default App

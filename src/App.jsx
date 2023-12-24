
import './App.css'
import About from './Components/Pages/About/About'
import Contact from './Components/Pages/Contact/Contact'
import Experinece from './Components/Pages/Experirnce/Experinece'
import Footer from './Components/Pages/Footer/Footer'
import Header from './Components/Pages/Header/Header'
import Navbar from './Components/Pages/Navbar/navbar'
import Services from './Components/Pages/Services/Services'
import Testimonials from './Components/Pages/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experinece></Experinece>
      <Services></Services>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App

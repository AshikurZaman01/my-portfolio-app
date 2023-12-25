
import './App.css'
import Contact from './Components/Pages/Contact/Contact'
import Footer from './Components/Pages/Footer/Footer'
import Header from './Components/Pages/Header/Header'
import Hero from './Components/Pages/Header/Hero/Hero'
import Main from './Components/Pages/Main/Main'


function App() {

  return (
    <div className='container'>
      <Header></Header>
      <Hero></Hero>

      <div className='divider'></div>

      <Main></Main>

      <div className='divider'></div>

      <Contact></Contact>

      <div className='divider'></div>

      <Footer></Footer>
    </div>
  )
}

export default App

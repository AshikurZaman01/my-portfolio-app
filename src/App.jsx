
import { IoIosArrowDropupCircle } from 'react-icons/io'
import './App.css'
import Contact from './Components/Pages/Contact/Contact'
import Footer from './Components/Pages/Footer/Footer'
import Header from './Components/Pages/Header/Header'
import Hero from './Components/Pages/Header/Hero/Hero'
import Main from './Components/Pages/Main/Main'
import { useEffect, useState } from 'react'


function App() {

  const [showScrollBtn, setshowScrollBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true)
      } else {
        setshowScrollBtn(false)
      }
    })
  }, [])

  return (
    <div id='up' className='container'>
      <Header></Header>
      <Hero></Hero>

      <div className='divider'></div>

      <Main></Main>

      <div className='divider'></div>

      <Contact></Contact>

      <div className='divider'></div>

      <Footer></Footer>

      {
        showScrollBtn &&
        <a href="#up">
          <button ><IoIosArrowDropupCircle className='scrollTop' /></button>
        </a>}

    </div>
  )
}

export default App

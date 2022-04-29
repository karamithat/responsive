import React from 'react'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Info from '../components/info/Info'
import Contact from '../components/contact/Contact'
import Blog from '../components/blog/Blog'
import FooterTop from '../components/footer/FooterTop'
import FooterBottom from '../components/footer/FooterBottom'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Info/>
        <Contact/>
        <Blog/>
        <FooterTop/>
        <FooterBottom/>
    </div>
  )
}

export default Home
import React from 'react'
import Aboutus from '../Component/About/Aboutus'
import Header from '../ReusableComponents/Header'
import FooterPage from './FooterPage'
import Cheff from '../ReusableComponents/Cheffs/Cheff'

function About() {
  return (
   <>
   <Header/>
   <Aboutus/>
   <Cheff/>
   <FooterPage/>
   </>
  )
}

export default About
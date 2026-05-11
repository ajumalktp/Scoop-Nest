import React from 'react'

import Second from '../Component/Home/Second'
import Header from '../ReusableComponents/Header'
import FeatureCards from '../Component/Home/FeatureCards'
import Card1 from '../Component/Home/Card1'
import Offer from '../Component/Home/Offer'
import Flavour from '../Component/Home/Flavour'
import Banner from '../Component/Home/Banner'
import FooterPage from './FooterPage'
import Trend from '../Component/Home/Trend'



function Home() {
  return (
   <>
   <Header/>
   <Second/>
   <FeatureCards/>
    <Banner/>
   <Trend/>
   <Card1/>
   <Offer/>
   <Flavour/>
   <FooterPage/>
   </>
  )
}

export default Home
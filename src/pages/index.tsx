import type { NextPage } from 'next'

import { Header } from '../components/Home/Header'
import { Banner } from '../components/Home/Banner'
import { TravelTypes } from '../components/Home/TravelTypes'
import { DividerHome } from '../components/Home/Divider'
import { TextBanner } from '../components/Home/TextBanner'
import { ContinentSlider } from '../components/Home/ContinentSlider'



const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <DividerHome />
      <TextBanner />
      <ContinentSlider/>
    </>
  )
}

export default Home

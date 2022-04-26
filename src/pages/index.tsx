import type { NextPage } from 'next'

import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { DividerHome } from '../components/Divider'
import { TextBanner } from '../components/TextBanner'
import { ContinentSlider } from '../components/ContinentSlider'



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

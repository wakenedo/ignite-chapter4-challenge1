import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Container } from '@chakra-ui/react'



const Home: NextPage = () => {
  return (
    <Container
    position="relative"
    maxWidth={1440}
    background='#F5F8FA'
    >
      <Header />
      <Banner />
      <TravelTypes />
    </Container>
  )
}

export default Home

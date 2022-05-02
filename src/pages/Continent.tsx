import { Box, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ContinentBanner } from '../components/Continent/ContinentBanner'
import { CountryDescription } from '../components/Continent/ContinentDescription'

import { ContinentHeader } from '../components/Continent/ContinentHeader'
import { CountryImages } from '../components/Continent/CountryImages'
import { CountryInfo } from '../components/Continent/ContinentInfo'




const Continent: NextPage = () => {
    return (
        <Box>
            <ContinentHeader />
            <ContinentBanner />
            <Container
                display="flex"
                maxWidth={1320}
                justifyContent="space-around"
                alignItems="center"
                marginBottom={20}
            >
                <CountryDescription />
                <CountryInfo />
            </Container>
            <CountryImages />
        </Box>
    )
}

export default Continent

import { Box, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CountryBanner } from '../components/ContinentBanner'
import { CountryDescription } from '../components/ContinentDescription'

import { CountryHeader } from '../components/ContinentHeader'
import { CountryImages } from '../components/CountryImages'
import { CountryInfo } from '../components/ContinentInfo'




const Country: NextPage = () => {
    return (
        <Box>
            <CountryHeader />
            <CountryBanner />
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

export default Country

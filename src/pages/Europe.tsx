import { Box, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CountryBanner } from '../components/CountryBanner'
import { CountryDescription } from '../components/CountryDescription'

import { CountryHeader } from '../components/CountryHeader'
import { CountryImages } from '../components/CountryImages'
import { CountryInfo } from '../components/CountryInfo'




const Europe: NextPage = () => {
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

export default Europe

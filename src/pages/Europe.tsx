import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CountryBanner } from '../components/CountryBanner'
import { CountryDescription } from '../components/CountryDescription'

import { CountryHeader } from '../components/CountryHeader'
import { CountryInfo } from '../components/CountryInfo'




const Europe: NextPage = () => {
    return (
        <>
            <CountryHeader />
            <CountryBanner />
            <Container
                display="flex"
                maxWidth={1220}
                justifyContent="space-around"
                alignItems="center"
            >
                <CountryDescription />
                <CountryInfo />
            </Container>




        </>
    )
}

export default Europe

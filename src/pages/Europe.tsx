import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { CountryBanner } from '../components/CountryBanner'

import { CountryHeader } from '../components/CountryHeader'




const Europe: NextPage = () => {
    return (
        <>
            <CountryHeader />
            <CountryBanner />
            <Container
                display="flex"
            >

            </Container>




        </>
    )
}

export default Europe

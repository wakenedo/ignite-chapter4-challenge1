import { Image, Container, Box } from '@chakra-ui/react'

export function TravelTypes() {
    return (
        <Box>
            <Container
                maxWidth={1160}
                height={145}
                justifyContent='space-between'
                display='flex'
            >
                <Image src="/Nightlife.png" alt="" />
                <Image src="/Beach.png" alt="" />
                <Image src="/Modern.png" alt="" />
                <Image src="/Classic.png" alt="" />
                <Image src="/More.png" alt="" />
            </Container>
        </Box>
    )
}
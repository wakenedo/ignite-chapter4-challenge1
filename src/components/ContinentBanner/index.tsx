import { Box, Container, Image } from '@chakra-ui/react'


export function ContinentBanner() {
    
    return (
        <Box>
            <Container
                maxWidth={1440}
            >
                <Image
                width={1440}
                height={500}
                marginBottom={20}
                src={"images/BannerEurope.png"} alt="BannerCountry" />
            </Container>
        </Box>
    )
}
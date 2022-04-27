import { Box, Container, Image } from '@chakra-ui/react'

export function ContinentSlider() {
    return (
        <Box>
            <Container
                maxWidth={1440}
                margin='auto'
            >
                <Image
                    width={1440}
                    height={460}
                    marginBottom={10}
                    
                    src="images/Continents.png" alt="ContinentsSwipingBanner"
                />
            </Container>
        </Box>
    )
}
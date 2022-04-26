import { Box, Container, Image } from '@chakra-ui/react'

export function ContinentSlider() {
    return (
        <Box>
            <Container
                maxWidth={1440}
                margin='auto'
            >
                <Image
                    width={1240}
                    height={450}
                    marginBottom={20}
                    
                    src="images/Continents.png" alt="Banner"
                />
            </Container>
        </Box>
    )
}
import { Box, Container, Image } from '@chakra-ui/react'

export function CountryHeader() {
    return (
        <Box
            height={100}
        >
            <Container
                display="flex"
            >
                <Container>
                    <Image
                        paddingTop={30}
                        src="Return.png" alt="Return"
                    />
                </Container>
                <Image
                    paddingTop={30}
                    src="images/Logo.png" alt="Logo" />




            </Container>
        </Box>
    )
}
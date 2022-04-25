import { Box, Container, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Box
            height={100}
        >
            <Container>
                <Image
                    margin="auto"
                    paddingTop={30}
                    src="images/Logo.png" alt="Logo" />

            </Container>
        </Box>
    )
}
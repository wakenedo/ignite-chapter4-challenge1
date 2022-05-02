import { Box, Container, Image } from '@chakra-ui/react'


export function Banner() {
    return (
        <Box>
            <Container
                maxWidth={1440}
            >
                <Image
                width={1440}
                height={335}
                marginBottom={20}
                src="images/Banner.png" alt="Banner" />
            </Container>
        </Box>
    )
}
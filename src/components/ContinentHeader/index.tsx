import { Box, Container, Image } from '@chakra-ui/react'
import Link from 'next/link'

export function CountryHeader() {
    return (
        <Box
            height={100}
            max-width={1100}
        >
            <Box
                display="flex"
                maxWidth={1100}
                
            >
                <Container
                maxWidth={100}
                >
                    <Link
                    href="./"
                    
                    >
                    <Image
                        paddingTop={30}
                        src="Return.png" alt="Return"
                        cursor="pointer"
                    />
                    </Link>
                </Container>
                <Image
                    paddingTop={30}
                    src="images/Logo.png" alt="Logo" />




            </Box>
        </Box>
    )
}
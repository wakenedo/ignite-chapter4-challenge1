import { Image, Container, Box } from '@chakra-ui/react'

export function TravelTypes() {
    return (
        <Box>
            <Container
                maxWidth={1440}
                height={145}
                justifyContent='space-between'
                display='flex'
            >
                <Image
                width={158} 
                height={145}
                src="/Nightlife.png" alt="" 
                />
                <Image 
                width={85} 
                height={145}
                src="/Beach.png" alt="" 
                />
                <Image 
                width={113} 
                height={145}
                src="/Modern.png" alt="" 
                />
                <Image
                width={100} 
                height={145} 
                src="/Classic.png" alt="" 
                />
                <Image
                width={101} 
                height={145}
                src="/More.png" alt="" 
                />
            </Container>
        </Box>
    )
}
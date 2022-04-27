import { Box, Container, Text } from '@chakra-ui/react'

export function CountryDescription() {
    return (
        <Box>
            <Container
            maxWidth={600}
            height={211}
            >
                <Text
                    fontFamily='poppins'
                    fontSize={18}
                    fontWeight={400}
                    textAlign='justify'
                    lineHeight={10}
                >
                    A Europa é, por convenção, um dos seis continentes do mundo.
                    Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais,
                    o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                </Text>
            </Container>
        </Box>
    )
}
import { Box, Container, Text } from "@chakra-ui/react";

export function TextBanner() {
    return (
        <Box>
            <Container
            height={101}
            maxWidth={839}
            marginBottom={20}
            >
                <Text
                fontFamily='poppins'
                fontSize={36}
                fontWeight={500}
                textAlign='center'
                marginTop={20}
                >
                    Vamos nessa?
                    <br/>
                    Então escolha seu continente
                </Text>
            </Container>
        </Box>
    )
}
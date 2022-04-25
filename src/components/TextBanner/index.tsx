import { Box, Container, Text } from "@chakra-ui/react";

export function TextBanner() {
    return (
        <Box>
            <Container
            width={839}
            height={101}
            
            >
                <Text
                fontFamily='poppins'
                fontSize={36}
                fontWeight='normal'
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
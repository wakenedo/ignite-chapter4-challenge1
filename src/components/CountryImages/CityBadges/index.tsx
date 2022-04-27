import { Box, Container, Image, Text } from "@chakra-ui/react";

export function CityBadges() {
    return (
        <Box
            maxWidth={270}
        >
            <Container>
                <Image
                    marginBottom={5}
                    src="pictures/London.png" alt="London"
                />
            </Container>
            <Container
                display="flex"
                alignItems="center"
                marginBottom={5}
                width={270}
            >
                <Container>
                    <Text
                        fontSize={16}
                        fontWeight={500}
                    >
                        Londres
                    </Text>
                    <Text
                        fontSize={12}
                    >
                        Reino Unido
                    </Text>
                </Container>
                <Container>
                    <Image
                        src="pictures/England.png" alt="flag"
                    />
                </Container>
            </Container>
        </Box>
    )
}
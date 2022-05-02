import { Box, Container, Image, Text } from "@chakra-ui/react";

export function CityBadges() {
    return (
        <Box
            maxWidth={270}
        >
            <Box>
                <Image
                    marginBottom={5}
                    src="pictures/London.png" alt="London"
                />
            </Box>
            <Box
                display="flex"
                alignItems="center"
                marginBottom={5}
                width={250}
            >
                <Container>
                    <Text
                        fontSize={16}
                        fontWeight={500}
                        marginLeft={2.5}
                    >
                        Londres
                    </Text>
                    <Text
                        fontSize={12}
                        marginLeft={2.5}
                    >
                        Reino Unido
                    </Text>
                </Container>
                <Box>
                    <Image
                        src="pictures/England.png" alt="flag"
                    />
                </Box>
            </Box>
        </Box>
    )
}
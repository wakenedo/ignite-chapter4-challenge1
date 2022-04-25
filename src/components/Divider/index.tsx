import { Box, Container, Divider } from "@chakra-ui/react";

export function DividerHome() {
    return (
        <Box>
            <Container
            maxWidth={1440}
            >
                <Divider
                    width={90}
                    border={2}
                    marginLeft={675}
                    marginTop={20}
                    borderColor='#47585B'
                />
            </Container>
        </Box>
    )
}
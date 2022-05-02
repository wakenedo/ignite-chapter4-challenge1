import { Box, Container, Grid, Text } from "@chakra-ui/react";
import { CityBadges } from "./CityBadges";

export function CountryImages() {
    return(
        <Box>
            <Container
            maxWidth={1220}
            >
                <Text
                fontFamily='poppins'
                fontSize={28}
                fontWeight={500}
                textAlign='left'
                marginBottom={10}
                >
                    Cidades +100
                </Text>
                <Grid
                templateColumns='repeat(4, 1fr)'
                gap={6}
                
                >
                    <CityBadges/>
                    <CityBadges/>
                    <CityBadges/>
                    <CityBadges/>
                    <CityBadges/>
                </Grid>

            </Container>
        </Box>
    )
}
import { Box, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <Box
            height={100}
        >
            <Image
            marginLeft={630}
            paddingTop={30}
            src="images/Logo.png" alt="Logo" />
        </Box>
    )
}
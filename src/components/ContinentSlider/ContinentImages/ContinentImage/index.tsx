import { Box, Image, Stack, Text } from "@chakra-ui/react";



export type ContinentProps = {
    data: {
        id: number
        name: string
        images: {
            image: string
            subText: string       
        }
    }
}

function ContinentImage({data, index}: ContinentProps) {
    console.log(data, index)
    return (
        <Stack
            alignItems="center"
            key={data.id}
        >
            <Image
                width={1440}
                height={460}
                marginBottom={10}
                alt="ContinentsSwipingBanner"
                src={data.images.image}
            ></Image>
            <Box
                position="absolute"
            >
                <Text
                    textAlign="center"
                    fontSize={48}
                    fontWeight={700}
                    color="#FFBA08"
                    marginTop={170}
                >
                    {data.name}
                </Text>
                <Text
                    textAlign="center"
                    fontSize={32}
                    fontWeight={700}
                    color="#FFBA08"
                >
                    {data.images.subText}
                </Text>
            </Box>
        </Stack>
    )
}
export default ContinentImage
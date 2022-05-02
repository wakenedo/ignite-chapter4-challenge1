import { Box, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link';
import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: '.swiper-pagination-active',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

export function ContinentSlider() {
    return (
        <Box
            width={1440}
            margin="auto"
            alignItems="center"
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Stack>
                            <Image
                                width={1440}
                                height={460}
                                marginBottom={10}
                                src="images/Europe.png" alt="ContinentsSwipingBanner"
                            />
                            <Box
                                position="absolute"
                            >
                                <Link
                                    href={`./Continent`}
                                >
                                    <Box
                                        marginLeft={500}
                                        cursor="pointer"
                                    >
                                        <Text
                                            textAlign="center"
                                            fontSize={48}
                                            fontWeight={700}
                                            color="#FFBA08"
                                            marginTop={170}

                                        >
                                            Europa
                                        </Text>
                                        <Text
                                            textAlign="center"
                                            fontSize={32}
                                            fontWeight={700}
                                            color="#FFBA08"

                                        >
                                            O continente mais exótico
                                        </Text>
                                    </Box>

                                </Link>
                            </Box>
                        </Stack>
                    </div>

                    <div className="swiper-slide">
                        <Stack>
                            <Image
                                width={1440}
                                height={460}
                                marginBottom={10}
                                src="images/Asia.jpg" alt="ContinentsSwipingBanner"
                            />
                            <Box
                                position="absolute"
                            >
                                <Link href="./Continent">
                                    <Box
                                        marginLeft={500}
                                        cursor="pointer"
                                    >
                                        <Text
                                            textAlign="center"
                                            fontSize={48}
                                            fontWeight={700}
                                            color="#FFBA08"
                                            marginTop={170}

                                        >
                                            Asia
                                        </Text>
                                        <Text
                                            textAlign="center"
                                            fontSize={32}
                                            fontWeight={700}
                                            color="#FFBA08"

                                        >
                                            O continente mais exótico
                                        </Text>
                                    </Box>
                                </Link>
                            </Box>
                        </Stack>
                    </div>

                    <div className="swiper-slide">
                        <Stack>
                            <Image
                                width={1440}
                                height={460}
                                marginBottom={10}
                                src="images/Africa.jpg" alt="ContinentsSwipingBanner"
                            />
                            <Box
                                position="absolute"
                            >
                                <Link
                                    href="./Continent"
                                >
                                    <Box
                                        marginLeft={500}
                                        cursor="pointer"
                                    >
                                        <Text
                                            textAlign="center"
                                            fontSize={48}
                                            fontWeight={700}
                                            color="#FFBA08"
                                            marginTop={170}

                                        >
                                            Africa
                                        </Text>
                                        <Text
                                            textAlign="center"
                                            fontSize={32}
                                            fontWeight={700}
                                            color="#FFBA08"

                                        >
                                            O continente mais selvagem
                                        </Text>
                                    </Box>
                                </Link>
                            </Box>
                        </Stack>
                    </div>

                    <div className="swiper-slide">
                        <Stack>
                            <Image
                                width={1440}
                                height={460}
                                marginBottom={10}
                                src="images/America.jpg" alt="ContinentsSwipingBanner"
                            />
                            <Box
                                position="absolute"
                            >
                                <Link href="./Continent">
                                    <Box
                                        marginLeft={500}
                                        cursor="pointer"
                                    >

                                        <Text
                                            textAlign="center"
                                            fontSize={48}
                                            fontWeight={700}
                                            color="#FFBA08"
                                            marginTop={170}

                                        >
                                            America do Norte
                                        </Text>
                                        <Text
                                            textAlign="center"
                                            fontSize={32}
                                            fontWeight={700}
                                            color="#FFBA08"

                                        >
                                            O continente mais organizado
                                        </Text>
                                    </Box>
                                </Link>
                            </Box>
                        </Stack>
                    </div>

                    <div className="swiper-slide">
                        <Stack>
                            <Image
                                width={1440}
                                height={460}
                                marginBottom={10}
                                src="images/AmericaLatina.jpg" alt="ContinentsSwipingBanner"
                            />
                            <Box
                                position="absolute"
                            >
                                <Link href="./Continent">
                                    <Box
                                        marginLeft={500}
                                        cursor="pointer"
                                    >
                                        <Text
                                            textAlign="center"
                                            fontSize={48}
                                            fontWeight={700}
                                            color="#FFBA08"
                                            marginTop={170}

                                        >
                                            America do Sul
                                        </Text>
                                        <Text
                                            textAlign="center"
                                            fontSize={32}
                                            fontWeight={700}
                                            color="#FFBA08"

                                        >
                                            O continente mais bonito
                                        </Text>
                                    </Box>
                                </Link>
                            </Box>
                        </Stack>
                    </div>


                </div>
                <div className="swiper-pagination"></div>



                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>


                <div className="swiper-scrollbar"></div>
            </div>
        </Box>
    )
}

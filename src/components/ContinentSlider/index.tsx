import { Box, Container, Image } from '@chakra-ui/react'
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
        bulletActiveClass: 'swiper-pagination-active',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',   
    },
});

export function ContinentSlider() {
    return (
        <>
            <div className="swiper">
                <Box
                maxWidth={1440}
                />
                <div className="swiper-wrapper">
                    <Container 
                    maxWidth={1440}
                    />
                    <div className="swiper-slide">
                        <Image
                            width={1440}
                            height={460}
                            marginBottom={10}
                            src="images/Europe.png" alt="ContinentsSwipingBanner"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Image
                            width={1440}
                            height={460}
                            marginBottom={10}
                            src="images/Asia.jpg" alt="ContinentsSwipingBanner"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Image
                            width={1440}
                            height={460}
                            marginBottom={10}
                            src="images/Africa.jpg" alt="ContinentsSwipingBanner"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Image
                            width={1440}
                            height={460}
                            marginBottom={10}
                            src="images/America.jpg" alt="ContinentsSwipingBanner"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Image
                            width={1440}
                            height={460}
                            marginBottom={10}
                            src="images/AmericaLatina.jpg" alt="ContinentsSwipingBanner"
                        />
                    </div>


                </div>

                <div className="swiper-pagination"></div>


                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>


                <div className="swiper-scrollbar"></div>
            </div>
        </>
    )
}

{/*<Box >        
            <Container
                maxWidth={1440}
                margin='auto'

            >
                <Image
                    width={1440}
                    height={460}
                    marginBottom={10}
                    src="images/Continents.png" alt="ContinentsSwipingBanner"
                />
            </Container>
    </Box>*/}
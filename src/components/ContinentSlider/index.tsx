import { Box } from '@chakra-ui/react'
import { useState } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import continents from '../../constants/continents';
import ContinentImages from './ContinentImages';
import ContinentImage, { ContinentProps } from './ContinentImages/ContinentImage';

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
        <Box
            width={1440}
            margin="auto"
            alignItems="center"
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <ContinentImages />
                    </div>

                    <div className="swiper-slide">
                        <ContinentImages  />
                    </div>

                    <div className="swiper-slide">
                        <ContinentImages />
                    </div>

                    <div className="swiper-slide">
                        <ContinentImages  />
                    </div>

                    <div className="swiper-slide">
                        <ContinentImages  />
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

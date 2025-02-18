import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Pagination, Autoplay} from "swiper/modules"

// img
import img1 from "../../../assets/img/swiper.png"
import img2 from "../../../assets/img/swiper.png"
import img3 from "../../../assets/img/swiper.png"
import img4 from "../../../assets/img/swiper.png"

const SwiperComponent = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{clickable: true}}
            autoplay={{delay: 4000, disableOnInteraction: false}}
            loop
            className="w-full h-85 max-[900px]:h-60 max-[500px]:h-40 max-[460px]:h-32">
            <SwiperSlide>
                <img
                    src={img1}
                    alt="Slide 1"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={img2}
                    alt="Slide 2"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src={img3}
                    alt="Slide 3"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>

            <SwiperSlide>
                <img
                    src={img4}
                    alt="Slide 4"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent

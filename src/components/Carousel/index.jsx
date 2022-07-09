import './style.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box} from '@mui/material';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {Navigation,Autoplay} from "swiper";
import imgCarousel1 from '../../assets/carousel/sli-3090.png'
import imgCarousel2 from '../../assets/carousel/sli-cong-thai-hoc1.jpg'
import imgCarousel3 from '../../assets/carousel/sli-AMD.jpg'

const Carousel = () => {
   return (
      <Box px={1}>
         <Swiper
            className="my-swiper"
            speed={1500}
            autoplay={{
               delay: 3000
            }}
            navigation={true}
            modules={[Navigation,Autoplay]}
         >
            <SwiperSlide>
               <Box>
                  <img src={imgCarousel1} alt=""/>
               </Box>
            </SwiperSlide>
            <SwiperSlide>
               <Box>
                  <img src={imgCarousel2} alt=""/>
               </Box>
            </SwiperSlide>
            <SwiperSlide>
               <Box>
                  <img src={imgCarousel3} alt=""/>
               </Box>
            </SwiperSlide>
            {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
            {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
         </Swiper>
      </Box>
      
   );
};

export default Carousel;
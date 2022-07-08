import './style.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Box} from '@mui/material';
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation} from "swiper";
import imgCarousel from '../../assets/sli-3090.png'
const Carousel = () => {
   return (
      <Swiper navigation={true} modules={[Navigation]} className="my-swiper">
         <SwiperSlide>
            <Box>
               <img src={imgCarousel} alt=""/>
            </Box>
         </SwiperSlide>
         {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
         {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
      </Swiper>
   );
};

export default Carousel;
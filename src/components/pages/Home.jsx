import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import './Home.css'
//Images
import Slider1 from '../../assets/Slider1.jpg'
import Slider2 from '../../assets/Slider2.jpg'
import Slider3 from '../../assets/Slider3.jpg'

const Home = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container_slider">
            <img className="slider_image" src={Slider1} />
            <div className="container_slider_text_header">
              <h4>
                <b>
                  "Fantastic ambience, Tasty food. The new dawn of fine
                  catering"
                </b>
              </h4>{' '}
              <br />
              <b>
                <i>- THE DAILY STAR</i>
              </b>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container_slider">
            <img className="slider_image" src={Slider2} />
            <div className="container_slider_text_header">
              <h4>
                <b>"Authentic Pan Asian and European foods under one roof"</b>
              </h4>{' '}
              <br />
              <b>
                <i>- ICE TODAY</i>
              </b>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container_slider">
            <img className="slider_image" src={Slider3} />
            <div className="container_slider_text_header">
              <h4>
                <b>"Arguably the best place to eat in Dhaka?"</b>
              </h4>{' '}
              <br />
              <b>
                <i>- PROTHOM ALO</i>
              </b>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Home

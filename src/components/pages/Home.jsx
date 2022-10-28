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
      <div className="container_intro">
        <p style={{ width: '70%', margin: 'auto' }}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
        </p>
        <p style={{ paddingTop: '1rem', margin: 'auto' }}>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed.
        </p>
        <p style={{ paddingTop: '1rem', margin: 'auto', width: '70%' }}>
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best, every pleasure is to
          be welcomed.
        </p>
        <p style={{ paddingTop: '3rem', margin: 'auto' }}>
          <b>Blood & Cheese</b>
        </p>
        <p
          style={{
            borderBottom: '3px solid #D2BF65',
            width: '30%',
            margin: '2rem auto',
          }}
        ></p>
      </div>
    </div>
  )
}

export default Home

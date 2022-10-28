import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Career.css'
// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper'
//Images
import Career1 from '../../assets/Career1.jpg'
import Career2 from '../../assets/Career2.jpg'
import Career3 from '../../assets/Career3.jpg'
import Career4 from '../../assets/Career4.jpg'
import Career5 from '../../assets/Career5.jpg'
import Career6 from '../../assets/Career6.jpg'
import CareerGroup from '../../assets/CareerGroup.jpg'

const Career = () => {
  return (
    <div>
      <div className="container_careers_intro">
        <h2>KAMPSOAHUS CAREERS</h2>
        <h3>
          <b>A rewarding Career</b>
        </h3>
        <p>
          Careers with Hawksmoor are among the best. We offer generous pay,
          extensive benefits, award-winning restaurants, fantastic career
          opportunities and some of the happiest people in the business (as
          voted by the people who work here). We are proud to be the only
          restaurant group to named in the Best Companies to work for list for
          10 years in a row.
        </p>
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 600px
            600: {
              width: 600,
              slidesPerView: 2,
              spaceBetween: 190,
            },
            // when window width is >= 300px
            300: {
              width: 300,
              slidesPerView: 1,
              spaceBetween: 100,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img className="slider_image" src={Career1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_image" src={Career2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_image" src={Career3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_image" src={Career4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_image" src={Career5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="slider_image" src={Career6} alt="" />
          </SwiperSlide>
        </Swiper>
        <br />
        <p>
          We want to offer you a great job, that is good for your career, and a
          really good environment to work in. We are constantly working on
          creating a strong culture to support and reward our teams and to make
          sure we remain a brilliant place to work.
        </p>
      </div>
      <div className="container_careers_benefits">
        <h1>THE PACKAGE</h1>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#D2BF65' }}>THE BASICS</h2>
          <h6 style={{ textAlign: 'justify' }}>
            In addition to your basic pay, all of the service charge goes to the
            people who work in the restaurants including everyone who works in
            the kitchens. We give everyone reasonable hours, flexibility
            wherever we can and daily staff meals on shift. We want you to feel
            you can be yourself at work and we will always treat you as an
            adult, so if you are Front of House, you can wear your own clothes
            to work. Time off is important: you will have 28 days to take
            (including Christmas Day and Boxing Day off), and you will be also
            be paid service charge on your breaks and holiday days. If savings
            are important to you, we offer additional money from the company; we
            will put 3% of your pay (on top of what you already earn) into your
            pension if you do.
          </h6>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#D2BF65' }}>PERKS AND BENEFITS</h2>
          <h6 style={{ textAlign: 'justify' }}>
            We want you to experience our restaurants as a guest and for you to
            be proud to bring your friends and family so we'll give you 50% off
            food for a table of 2, or a bigger table if you are bringing your
            family. You can make your money go further with access to our
            benefits platform, including money off shopping, holidays, gym
            membership, insurance and lots more, through our employee package
            with Lifeworks. You also have access to free private GP appointments
            and a BUPA cash plan with money back on dentist, opticians, physio,
            prescriptions and more.
          </h6>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#D2BF65' }}>DEVELOPMENT</h2>
          <h6 style={{ textAlign: 'justify' }}>
            We will invest in your development. Our training ranges from free
            English language courses to our annual trips programme to farms,
            fish markets, vineyards and charcoal forests. We offer
            qualifications, including WSET and Health and Safety, Food Safety
            and HR. We run an industry leading 5-year, 5-step management
            development programme. By the time you've worked your way through it
            all, you'll have the skills you need to be a great General Manager
            or Head Chef (or even to run your own restaurant…!). And there's
            room to grow with us: we aim to fill 80% of our management jobs
            through internal promotion.
          </h6>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#D2BF65' }}>
            SUPPORT FOR YOUR LIFE INSIDE AND OUTSIDE WORK
          </h2>
          <h6 style={{ textAlign: 'justify' }}>
            We offer paid company maternity and paternity leave to help you care
            for new family members. To provide peace of mind, we sign everyone
            up to our income insurance, life assurance and employee support
            schemes with Hospitality Action and Lifeworks from Day 1. These give
            you, and your immediate family members, free access to legal advice,
            financial support and face-to-face counselling. Hawksmoor is proud
            to be a signatory to the Mindful Employer mental health charter for
            employers and to support Fair Kitchens making sure our chefs working
            in a healthy kitchen culture.
          </h6>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center', paddingTop: '2rem' }}>
          WORK AT ONE OF THE BEST COMPANIES IN THE UK
        </h2>
        <div className="container_careers_team">
          <div>
            <h6 style={{ textAlign: 'center' }}>
              We are immensely proud of being the only restaurant to be selected
              in the Best Companies list for 10 consecutive years - not because
              it's a lovely award (which of course it is) but because it is
              decided by the people that work here. So, you don't need to take
              our word for it! If you want to know what working at Hawksmoor is
              like, we'd always encourage you to speak to someone who already
              works here for an honest view.
            </h6>
          </div>
          <div>
            <img className="careers_image_team" src={CareerGroup} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career

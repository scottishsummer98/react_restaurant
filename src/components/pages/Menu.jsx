import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Menu.css'
// Import Swiper styles
import 'swiper/css'
//Menu Images
import App1 from '../../assets/App1.webp'
import App2 from '../../assets/App2.webp'
import App3 from '../../assets/App3.webp'
import App4 from '../../assets/App4.webp'
import App5 from '../../assets/App5.webp'
import Main1 from '../../assets/Main1.webp'
import Main2 from '../../assets/Main2.webp'
import Main3 from '../../assets/Main3.webp'
import Main4 from '../../assets/Main4.webp'
import Main5 from '../../assets/Main5.webp'
import Main6 from '../../assets/Main6.webp'
import Main7 from '../../assets/Main7.webp'
import Main8 from '../../assets/Main8.webp'
import Main9 from '../../assets/Main9.webp'
import Main10 from '../../assets/Main10.webp'
import Main11 from '../../assets/Main11.webp'
import Main12 from '../../assets/Main12.webp'
import Bev1 from '../../assets/Bev1.webp'
import Bev2 from '../../assets/Bev2.webp'
import Bev3 from '../../assets/Bev3.webp'
import Des1 from '../../assets/Des1.webp'
import Des2 from '../../assets/Des2.webp'
import Des3 from '../../assets/Des3.webp'

const AppData = [
  {
    id: 1,
    image: App1,
    name: 'Nori-Wrapped Prawn Sui Mai',
    desc: 'Prawn Dumpling wrapped in traditional japanese nori weed',
    portion: '4 pieces',
    price: 'BDT 429',
  },
  {
    id: 2,
    image: App2,
    name: 'Wonton in Chili Oil',
    desc: 'Stir fried chicken dumplings cooked with chili oil',
    portion: '5 pieces',
    price: 'BDT 358',
  },
  {
    id: 3,
    image: App3,
    name: 'Prawn Tempura',
    desc: 'Deep fried crispy whole prawn tempura',
    portion: '5 pieces',
    price: 'BDT 638',
  },
  {
    id: 4,
    image: App4,
    name: 'Crispy Cabbage Roll',
    desc: 'Cabbage shredded and fried till crispy',
    portion: '4 pieces',
    price: 'BDT 330',
  },
  {
    id: 5,
    image: App5,
    name: 'Fried Cheese Wonton (Beef)',
    desc: 'Cheesy deep fried beef wonthons',
    portion: '5 pieces',
    price: 'BDT 369',
  },
]
const MainsData = [
  {
    id: 1,
    image: Main1,
    name: 'Beef Noodles Soup',
    desc: 'Beef, vegetable and noodle in broth',
    portion: '1:1',
    price: 'BDT 385',
  },
  {
    id: 2,
    image: Main2,
    name: 'Grilled Chicken Rice Bowl',
    desc:
      'Egg fried rice topped with fried egg, and grilled chicken thigh on the side',
    portion: '1:1',
    price: 'BDT 473',
  },
  {
    id: 3,
    image: Main3,
    name: 'Seafood Rice Bowl',
    desc: 'Egg fried rice served with oriental chili fish and prawn tempura',
    portion: '1:1',
    price: 'BDT 572',
  },
  {
    id: 4,
    image: Main4,
    name: 'Sichuan Chicken in Glazed-Peanut',
    desc: 'Chicken breast cubes with honey roasted peanuts',
    portion: '1:1',
    price: 'BDT 374',
  },
  {
    id: 5,
    image: Main5,
    name: 'Chicken Nanban',
    desc: 'Fried chicken in house-special nanban sauce',
    portion: '1:1',
    price: 'BDT 402',
  },

  {
    id: 6,
    image: Main6,
    name: 'Chicken in Black Pepper Sauce',
    desc: 'Chicken and shiitake mushrooms in black pepper gravy',
    portion: '1:1',
    price: 'BDT 391',
  },
  {
    id: 7,
    image: Main7,
    name: 'Beef Bulgogi',
    desc: 'Korean-style beef strips with subtle, salty, sweet heat',
    portion: '1:1',
    price: 'BDT 545',
  },
  {
    id: 8,
    image: Main8,
    name: 'Garlic Beef with Kangkong',
    desc:
      'Marinated roast beef and kangkong stir-fried in soy and seasoned garlic paste',
    portion: '1:1',
    price: 'BDT 545',
  },
  {
    id: 9,
    image: Main9,
    name: 'Stir-Fried Calamari',
    desc: 'Calamari in spicy red pepper sauce',
    portion: '1:1',
    price: 'BDT 385',
  },
  {
    id: 10,
    image: Main10,
    name: "Fisherman's Basket",
    desc:
      'Sliced fish, Squid and shrimp in a concoction of basil, oriental sauces and bell peppers',
    portion: '1:1',
    price: 'BDT 473',
  },
  {
    id: 11,
    image: Main11,
    name: 'Seafood BBQ',
    desc:
      'Combo of grilled crab, prawn and octopus marinated in house special sauce',
    portion: '1:1',
    price: 'BDT 506',
  },
  {
    id: 12,
    image: Main12,
    name: 'Special Chili Crab',
    desc: 'Crab with spicy, savoury sauce',
    portion: '1:1',
    price: 'BDT 506',
  },
]
const DesData = [
  {
    id: 1,
    image: Des1,
    name: 'Choclate Peanute Brownie',
    desc:
      'Rich choclate brownies filled with mixed nuts. Served with vanilla icecream',
    portion: '1:1',
    price: 'BDT 143',
  },
  {
    id: 2,
    image: Des2,
    name: 'Red Rubies in Coconut Milk',
    desc: 'Creamy coconut milk icecream with cherry & nuts',
    portion: '1:1',
    price: 'BDT 213',
  },
  {
    id: 3,
    image: Des3,
    name: 'Sweet Sesame Crisps',
    desc: 'Sesame seeds crips and sweetend till perfection',
    portion: '1:1',
    price: 'BDT 198',
  },
]
const BevData = [
  {
    id: 1,
    image: Bev1,
    name: 'Iced Tea',
    desc: 'Available in Peach/ Wild Berries/ Lychee/ Apple Mint flavours',
    portion: '1 Glass',
    price: 'BDT 204',
  },
  {
    id: 2,
    image: Bev2,
    name: 'Thai Milk Iced Tea',
    desc: 'Iced tea with creamy caramel milk',
    portion: '1 Glass',
    price: 'BDT 220',
  },
  {
    id: 3,
    image: Bev3,
    name: 'Soft Drinks',
    desc: 'Pepsi/ Fanta/ Seven Up/ Mountain Dew',
    portion: '250ml Bottle',
    price: 'BDT 20',
  },
]

const Menu = () => {
  return (
    <div className="container_menu">
      <div className="container_menu_appetizers" id="appetizers">
        <div className="container_menu_appetizers_header">
          <h2>APPETIZERS</h2>
          <p>
            Appetizers are meant to whet the appetite before the following
            courses
          </p>
        </div>
        <div className="container_menu_appetizers_body">
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={98}
            loop={true}
            breakpoints={{
              // when window width is >= 600px
              600: {
                width: 600,
                slidesPerView: 2,
                spaceBetween: 130,
              },
              // when window width is >= 300px
              300: {
                width: 300,
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
          >
            {AppData.map(({ id, image, name, desc, portion, price }) => {
              return (
                <SwiperSlide key={id}>
                  <img className="container_image" src={image} alt="" />
                  <div style={{ paddingTop: '1rem' }}>
                    <h5>
                      <b>{name}</b>
                    </h5>
                    <p>{desc}</p>
                    <h6>{portion}</h6>
                    <h6>
                      <b>{price}</b>
                    </h6>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="container_menu_mains" id="mains">
        <div className="container_menu_mains_header">
          <h2>MAINS</h2>
          <p>
            Your hearts will also fill along with your tummy with our delicious
            mains courses
          </p>
        </div>
        <div className="container_menu_mains_body">
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={98}
            loop={true}
            breakpoints={{
              // when window width is >= 600px
              600: {
                width: 600,
                slidesPerView: 2,
                spaceBetween: 130,
              },
              // when window width is >= 300px
              300: {
                width: 300,
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
          >
            {MainsData.map(({ id, image, name, desc, portion, price }) => {
              return (
                <SwiperSlide key={id}>
                  <img className="container_image" src={image} alt="" />
                  <div style={{ paddingTop: '1rem' }}>
                    <h5>
                      <b>{name}</b>
                    </h5>
                    <p>{desc}</p>
                    <h6>{portion}</h6>
                    <h6>
                      <b>{price}</b>
                    </h6>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="container_menu_desserts" id="desserts">
        <div className="container_menu_desserts_header">
          <h2>DESSERTS</h2>
          <p>Sweettooth? Not a problem, we got you covered</p>
        </div>
        <div className="container_menu_mains_body">
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={98}
            loop={true}
            breakpoints={{
              // when window width is >= 600px
              600: {
                width: 600,
                slidesPerView: 2,
                spaceBetween: 130,
              },
              // when window width is >= 300px
              300: {
                width: 300,
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
          >
            {DesData.map(({ id, image, name, desc, portion, price }) => {
              return (
                <SwiperSlide key={id}>
                  <img className="container_image" src={image} alt="" />
                  <div style={{ paddingTop: '1rem' }}>
                    <h5>
                      <b>{name}</b>
                    </h5>
                    <p>{desc}</p>
                    <h6>{portion}</h6>
                    <h6>
                      <b>{price}</b>
                    </h6>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      <div className="container_menu_beverages" id="beverages">
        <div className="container_menu_beverages_header">
          <h2>BEVERAGES</h2>
          <p>Chilled beverages to refresh your mood</p>
        </div>
        <div className="container_menu_mains_body">
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={98}
            loop={true}
            breakpoints={{
              // when window width is >= 600px
              600: {
                width: 600,
                slidesPerView: 2,
                spaceBetween: 130,
              },
              // when window width is >= 300px
              300: {
                width: 300,
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
          >
            {BevData.map(({ id, image, name, desc, portion, price }) => {
              return (
                <SwiperSlide key={id}>
                  <img className="container_image" src={image} alt="" />
                  <div style={{ paddingTop: '1rem' }}>
                    <h5>
                      <b>{name}</b>
                    </h5>
                    <p>{desc}</p>
                    <h6>{portion}</h6>
                    <h6>
                      <b>{price}</b>
                    </h6>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Menu

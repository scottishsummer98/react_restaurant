import React from 'react'
import './Restaurants.css'
import DBanani from '../../assets/DBanani.jpeg'
import DBashundhara from '../../assets/DBashundhara.jpg'
import DDhanmondi from '../../assets/DDhanmondi.jpeg'
import DGulshan from '../../assets/DGulshan.jpeg'
import DUttara from '../../assets/DUttara.jpeg'
import CChatteshwari from '../../assets/CChatteshwari.jpeg'
import CAgrabad from '../../assets/CAgrabad.jpeg'
import CHillview from '../../assets/CHillview.jpeg'

const dhakaresData = [
  {
    id: 1,
    image: DBanani,
    name: 'KAMPSAOHUS BANANI',
    addr: '28, Floor: 26th, Ahmed Tower, 30 Kamal Atartuk Avenue, Dhaka, 1213',
    contno: '+029877855, +8801778554541',
  },
  {
    id: 2,
    image: DBashundhara,
    name: 'KAMPSAOHUS BASHUNDHARA',
    addr: 'Jabbar Molla Tower (2nd floor, Evercare Hospital Rd, Dhaka, 1229',
    contno: '+027896544, +8801978887458',
  },
  {
    id: 3,
    image: DDhanmondi,
    name: 'KAMPSAOHUS DHANMONDI',
    addr: 'Rangs KB Square, 4th Floor, House 49/A Satmoshjid Road, Dhaka, 1209',
    contno: '+027784859, +8801789965456',
  },
  {
    id: 4,
    image: DGulshan,
    name: 'KAMPSAOHUS GULSHAN',
    addr: 'Block- B, House No, 2B Road No 71, Dhaka-1212',
    contno: '+028897894, +8801658998789',
  },
  {
    id: 5,
    image: DUttara,
    name: 'KAMPSAOHUS UTTARA',
    addr: 'Road No: 16, Road Sonargaon Jonopoth Road, Dhaka, 1230',
    contno: '+029987898, +8801718899878',
  },
]
const ctgresData = [
  {
    id: 1,
    image: CChatteshwari,
    name: 'KAMPSAOHUS CHATTESHWARI',
    addr: 'Hakim Plaza, 168, 169 College Road, Chattagram',
    contno: '+029834855, +8801712554541',
  },
  {
    id: 2,
    image: CAgrabad,
    name: 'KAMPSAOHUS AGRABAD',
    addr: 'Agrabad C/A S.Alam Center, 58 Sabdar Ali Rd, Chattagram, 4102',
    contno: '+029892544, +8801578827858',
  },
  {
    id: 3,
    image: CHillview,
    name: 'KAMPSAOHUS HILLVIEW',
    addr:
      '6th Floor, Innovative Bhuiyan Orchid, 1025/A Bayazid Bostami Rd, Chattagram, 4203',
    contno: '+028878959, +8801554786546',
  },
]

const Restaurants = () => {
  return (
    <div>
      <div className="container_dhk_restaurants" id="dhaka">
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Visit Our Finest Restaurants In the Capital Dhaka
        </h3>
        <div className="container_restaurants_body" id="dhakarestaurants">
          {dhakaresData.map(({ id, image, name, addr, contno }) => {
            return (
              <div style={{ textAlign: 'center' }} key={id}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <img className="restaurant_image" src={image} alt="" />
                </div>
                <h4>{name}</h4>
                <h6>
                  <b>{addr}</b>
                </h6>
                <h6 style={{ color: '#D2BF65' }}>{contno}</h6>
              </div>
            )
          })}
        </div>
      </div>
      <div className="container_ctg_restaurants" id="ctg">
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Our Restaurants In the Beautiful Port City Chattagram
        </h3>
        <div className="container_restaurants_body" id="dhakarestaurants">
          {ctgresData.map(({ id, image, name, addr, contno }) => {
            return (
              <div style={{ textAlign: 'center' }} key={id}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <img className="restaurant_image" src={image} alt="" />
                </div>
                <h4>{name}</h4>
                <h6>
                  <b>{addr}</b>
                </h6>
                <h6 style={{ color: '#D2BF65' }}>{contno}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Restaurants

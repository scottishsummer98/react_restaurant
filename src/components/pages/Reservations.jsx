import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import './Reservations.css'
//Images
import Reserve from '../../assets/Reserve.jpg'

const Reservations = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_blrrgzm',
      'template_1xw3cry',
      form.current,
      'FlCJkxjnryxtekfTX',
    )

    e.target.reset()
  }
  return (
    <div className="container_reservations">
      <div className="container_reservations_intro">
        <h2>MAKE A RESERVATION</h2>
        <Link to="/restaurants" style={{ textDecoration: 'none' }}>
          <h5>
            For table sizes of 11 or more please contact the restaurants
            directly
          </h5>
        </Link>
        <img className="container_reservation_image" src={Reserve} alt="" />
      </div>
      <div className="container_reservations_form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="reservee_email"
            placeholder="Enter Reservee Email"
            required
          />
          <select name="restaurant_name">
            <option selected>Please Select a Restaurant</option>
            <option value="KAMPSAOHUS BANANI">KAMPSAOHUS BANANI</option>
            <option value="KAMPSAOHUS BASHUNDHARA">
              KAMPSAOHUS BASHUNDHARA
            </option>
            <option value="KAMPSAOHUS DHANMONDI">KAMPSAOHUS DHANMONDI</option>
            <option value="KAMPSAOHUS GULSHAN">KAMPSAOHUS GULSHAN</option>
            <option value="KAMPSAOHUS UTTARA">KAMPSAOHUS UTTARA</option>
            <option value="KAMPSAOHUS CHATTESHWARI">
              KAMPSAOHUS CHATTESHWARI
            </option>
            <option value="KAMPSAOHUS AGRABAD">KAMPSAOHUS AGRABAD</option>
            <option value="KAMPSAOHUS HILLVIEW">KAMPSAOHUS HILLVIEW</option>
          </select>
          <select name="reserving_day">
            <option selected>Please Select a Day</option>
            <option value="SUNDAY">SUNDAY</option>
            <option value="MONDAY">MONDAY</option>
            <option value="TUESDAY">TUESDAY</option>
            <option value="WEDNESDAY">WEDNESDAY</option>
            <option value="THURSDAY">THURSDAY</option>
            <option value="FRIDAY">FRIDAY</option>
            <option value="SATURDAY">SATURDAY</option>
          </select>

          <select name="reserving_time">
            <option selected>Please Select Arriving Time</option>
            <option value="11 AM">11 AM</option>
            <option value="12 PM">12 PM</option>
            <option value="1 PM">1 PM</option>
            <option value="2 PM">2 PM</option>
            <option value="3 PM">3 PM</option>
            <option value="4 PM">4 PM</option>
            <option value="5 PM">5 PM</option>
            <option value="6 PM">6 PM</option>
            <option value="7 PM">7 PM</option>
            <option value="8 PM">8 PM</option>
            <option value="9 PM">9 PM</option>
            <option value="10 PM">10 PM</option>
            <option value="11 PM">11 PM</option>
          </select>
          <select name="guest_adults">
            <option selected>Please Select Number Of Adults</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5-10">5-10</option>
          </select>
          <select name="guest_childrens">
            <option selected>Please Select Number Of Chilren (Below 10)</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5-10">5-10</option>
          </select>
          <input
            type="text"
            name="reservee_name"
            placeholder="Please Enter Reservee Name"
            required
          />

          <input
            type="text"
            name="reservee_contactno"
            placeholder="Please Enter Reservee Contact No"
            required
          />
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Reservations

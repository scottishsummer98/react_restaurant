import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BsCurrencyPound } from 'react-icons/bs'
import './CardsAndBooks.css'
import Book1 from '../../assets/Book1.jpg'
import Book2 from '../../assets/Book2.jpg'

const bookData = [
  {
    id: 1,
    desc:
      "Hawksmoor: Restaurants & Recipes gives a glimpse into the realities of restaurants, the trials and tribulations we've faced along the way, as well as the people, places and plates that have made it work. All proceeds go to Action Against Hunger, a charity very close to our hearts.",
    price: '30.00',
  },
  {
    id: 2,
    desc:
      "Hawksmoor at Home is a practical cookbook which shows you how to buy and cook great steak and seafood and indeed much else (including how to cook both the 'best burger in Britain' and the 'best roast beef in Britain'); how to mix terrific cocktails and choose wine to accompany your meal. Above all Hawksmoor at Home entertains and informs in the inimitable 'Hawksmoor' way.",
    price: '35.00',
  },
]
const helpData = [
  {
    id: 1,
    Ques: 'HOW CAN I ORDER A HAWKSMOOR AT HOME MEAL KIT?',
    Ans:
      'Unfortunately,  we ended our meal kit deliveries in May 2022.  You are still able to order Hawksmoor steak from Ocado, and our gift cards are valid in all our UK restaurants.',
  },
  {
    id: 2,
    Ques: 'MY GIFT CARD IS CLOSE TO EXPIRY, CAN I EXTEND IT?',
    Ans:
      'In certain cases, we are happy to extend the gift card expiry date by 6 months.  Please contact shop@thehawksmoor.com with your gift card number, and the team will look into this for you.',
  },
  {
    id: 3,
    Ques: 'HOW LONG DOES IT TAKE FOR A GIFT CARD TO ARRIVE?',
    Ans:
      'Digital gift cards can either be emailed across immediately after purchase, or scheduled to be emailed on a specific date.  You can select delivery date when placing your order.',
  },
  {
    id: 4,
    Ques: 'HOW DO I CHECK MY GIFT CARD BALANCE?',
    Ans:
      'Use our Gift Card Balance Check page to see the balance on your physical or digital gift card.',
  },
  {
    id: 5,
    Ques: 'WHAT LANGUAGES ARE AVAILABLE?',
    Ans: 'The website is only available in English.',
  },
  {
    id: 6,
    Ques: 'REGISTERED COMPANY ADDRESS & VAT NUMBER',
    Ans:
      'Underdog restaurants Ltd t/a Hawksmoor Restaurants Ltd, Hawksmoor House Unit 6, Corbet Place, London E1 6NN. VAT registration number: 166 1753 96',
  },
  {
    id: 7,
    Ques: 'GET IN TOUCH',
    Ans:
      'If you need help with an order, please get in touch on shop@thehawksmoor.com',
  },
]

const CardsAndBooks = () => {
  return (
    <div>
      <hr />
      <div className="container_navlinks">
        <div>
          <Link to="#cards" style={{ textDecoration: 'none' }}>
            GIFT CARDS
          </Link>
        </div>
        <div>|</div>
        <div>
          <Link to="#books" style={{ textDecoration: 'none' }}>
            BOOKS
          </Link>
        </div>
        <div>|</div>
        <div>
          <Link to="#help" style={{ textDecoration: 'none' }}>
            HELP
          </Link>
        </div>
      </div>
      <div className="container_books" id="books">
        {bookData.map(({ id, desc, price }) => {
          return (
            <div className="container_books_body">
              <div class="img__wrap">
                <img className="books_image" src={Book1} alt="" />
                <div class="img__description_layer">
                  <p class="img__description">{desc}</p>
                </div>
              </div>
              <h4>HAWKSMOOR: RESTAURANTS & RECIPES</h4>
              <h5>
                £ <b>{price}</b>
              </h5>
            </div>
          )
        })}
      </div>
      <div className="container_help" id="help">
        <h2>HELP</h2>
        <p className="container_help_header">
          Discover the most frequently asked questions we receive at Hawksmoor
          at Home. If you did not find the answer to your question here, please
          contact us.
        </p>
        <div className="container_help_body">
          {helpData.map(({ id, Ques, Ans }) => {
            return (
              <div class="accordion" key={id}>
                <div>
                  <h2 id={`header` + id}>
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse` + id}
                      aria-expanded="false"
                      aria-controls={`collapse` + id}
                    >
                      <b>{Ques}</b>
                    </button>
                  </h2>

                  <div
                    id={`collapse` + id}
                    class="accordion-collapse collapse"
                    aria-labelledby={`header` + id}
                  >
                    <div class="accordion-body">
                      <b>{Ans}</b>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CardsAndBooks

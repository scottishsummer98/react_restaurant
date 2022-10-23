import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './CardsAndBooks.css'

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
      <div className="container_help">
        <h2>HELP</h2>
        <p style={{ width: '50%', textAlign: 'center', margin: 'auto' }}>
          Discover the most frequently asked questions we receive at Hawksmoor
          at Home. If you did not find the answer to your question here, please
          contact us.
        </p>
        <div className="container_help_body"></div>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsAndBooks

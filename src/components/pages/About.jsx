import React from 'react'
import './About.css'
import Story from '../../assets/Story.jpg'
import Food from '../../assets/Food.jpg'
import Quality from '../../assets/Quality.jpg'
const About = () => {
  return (
    <div>
      <div className="container_about_journey" id="journey">
        <div className="container_about_journey_header">
          <h2>KAMPSAOHUS STORY</h2>
        </div>
        <div className="container_about_journey_body">
          <img className="image" src={Story} alt="" />
          <p style={{ textAlign: 'justify' }}>
            Bacon ipsum dolor amet tongue leberkas pork belly biltong landjaeger
            rump ground round. Hamburger filet mignon chuck ribeye kevin venison
            shankle beef ribs beef meatloaf pancetta sirloin fatback. Landjaeger
            t-bone chislic ham ham hock shoulder pastrami filet mignon alcatra
            strip steak boudin pork loin picanha prosciutto. Boudin pig cow
            capicola, turkey kevin fatback. Ham pancetta spare ribs jerky beef
            t-bone boudin rump pig ground round leberkas.
            <br />
            <br />
            Flank bacon swine cupim, biltong andouille rump ball tip chislic
            meatloaf. Ground round kevin pancetta turkey pig. Chicken leberkas
            ground round jerky biltong corned beef capicola ham drumstick
            hamburger. Pork chop ham ball tip spare ribs, fatback bacon ribeye
            boudin meatloaf hamburger picanha porchetta doner shank. Tongue
            shoulder beef ribs boudin salami tenderloin, ham hock chuck strip
            steak hamburger short loin prosciutto shank ribeye. Prosciutto jerky
            ribeye ham hock.
          </p>
        </div>
      </div>
      <div className="container_about_food" id="food">
        <div className="container_about_food_header">
          <h2>FOOD QUALITY AND HEIGENE</h2>
        </div>
        <div className="container_about_food_body">
          <p style={{ textAlign: 'justify' }}>
            Shoulder burgdoggen pastrami frankfurter filet mignon meatball swine
            kielbasa andouille fatback cupim chicken. Tail chislic jerky cow
            chuck pork chop porchetta turducken tenderloin strip steak. Short
            loin tongue biltong beef landjaeger. Tail biltong landjaeger
            hamburger. Beef ribs pork belly pork chop andouille pastrami brisket
            jowl shank chislic venison flank picanha pancetta shoulder bacon.
            Swine turkey drumstick, rump ball tip spare ribs beef ribs.
            <br />
            <br />
            Flank bacon swine cupim, biltong andouille rump ball tip chislic
            meatloaf. Ground round kevin pancetta turkey pig. Chicken leberkas
            ground round jerky biltong corned beef capicola ham drumstick
            hamburger. Pork chop ham ball tip spare ribs, fatback bacon ribeye
            boudin meatloaf hamburger picanha porchetta doner shank. Tongue
            shoulder beef ribs boudin salami tenderloin, ham hock chuck strip
            steak hamburger short loin prosciutto shank ribeye. Prosciutto jerky
            ribeye ham hock.
          </p>
          <img className="image" src={Food} alt="" />
        </div>
        <div className="container_about_food_body">
          <img className="image" src={Quality} alt="" />
          <p style={{ textAlign: 'justify' }}>
            Landjaeger strip steak frankfurter t-bone. Ham tail jerky porchetta
            rump t-bone. Chicken hamburger shank ball tip pig kevin. Alcatra
            fatback beef chuck tail bresaola hamburger swine beef ribs. Venison
            tail chislic short loin, frankfurter salami ball tip. Chislic pork
            tail turducken, pork loin tri-tip pork belly porchetta meatloaf
            capicola.
            <br />
            <br />
            Alcatra pork belly shank, meatloaf cow salami bacon pastrami
            frankfurter turkey beef tri-tip chicken pig. Capicola burgdoggen
            turducken brisket chislic pork chop. Capicola ham flank, ribeye
            chuck prosciutto porchetta swine kielbasa burgdoggen brisket. Ground
            round swine tail, doner chislic pig cow ball tip drumstick pork
            burgdoggen filet mignon shoulder beef ribs.
          </p>
        </div>
      </div>
      <div className="container_about_purpose" id="purpose">
        <div className="container_about_purpose_header">
          <h2>KAMPSAOHUS PURPOSE</h2>
          <p style={{ textAlign: 'justify' }}>
            Dolor voluptate eiusmod, alcatra veniam cupidatat id prosciutto qui
            reprehenderit ball tip in. Pork belly alcatra nostrud consectetur,
            sed leberkas in exercitation eiusmod fugiat pariatur velit beef
            veniam jowl. Non laboris et, jowl picanha aute ham hock pig doner
            aliquip pork belly cupim kevin. Deserunt ullamco spare ribs
            tenderloin enim ground round strip steak velit rump sausage swine
            sunt mollit. Short loin nisi in pancetta officia venison qui, labore
            kielbasa.
          </p>
          <iframe
            class="video"
            src="https://www.youtube.com/embed/xu5BujaGgf8"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default About

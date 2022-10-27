import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './News.css'
//Images
import News1 from '../../assets/News1.jpg'
import News2 from '../../assets/News2.jpg'
import News3 from '../../assets/News3.jpg'
import News4 from '../../assets/News4.jpeg'
import News5 from '../../assets/News5.jpeg'

const NewsData = [
  {
    id: 1,
    image: News1,
    title: 'The Sacred Six',
    desc1:
      "Our most popular cocktail for over a decade, 'Shaky' Pete Jeary's ode to the Power Shandy remains unchanged. Somewhere between homemade ginger beer and shandy, with an added gin kick, this incredibly refreshing pick-me-up now appears lightly disguised on lists across the land (Wobbly Bob's Ginger Brew anyone?). ",
    desc2:
      "A turbo-shandy for the discerning drinker. This was created by our very own 'Shaky' Pete Jeary after a visit to Hay's Wharf, a former brewhouse on London's South Bank that became a depository for exotic imports (ginger, lemons) in the seventeenth century. It's incredibly refreshing - somewhere between homemade ginger beer and shandy, with an added gin kick. After making a late appearance on our list, it quickly became one of our bestsellers.",
    desc3:
      "Also available in non-alcoholic form - just ask for a Steady Pete - Ceder's alcohol-free 'Gin', ginger, lemon, Thornbridge Big Easy.",
  },
  {
    id: 2,
    image: News2,
    title: "The Big Matt Burger's Last Stand",
    desc1:
      "In truth, we've always had a soft spot for Maccy D's.Founders Huw and Will first bonded over breakfast McMuffins while waiting for the school bus. Then, in the early days of Hawksmoor, they travelled to Golden Arches HQ in Des Plaines, Illinois for some first-hand inspiration. What did they learn?",
    desc2:
      "A commitment to consistency: not for flawless repetition, but to a minimum standard and common goals; building a loyal following - they're pretty good at that; and an obsession with the details others miss, like getting the fries just right. Perhaps, then, it's no surprise that the Big Matt burger was created. But what started as a wry tribute to a classic has accidentally become a bit of a cult hit. One burger reviewer - yes, they exist - scored it 97 out of 100.",
    desc3:
      'Anatomy Of The Big Matt Burger Two, dry-aged beef patties, Hawksmoor special sauce, Sparkenhoe red Leicester cheese, shredded lettuce, onions and homemade pickles. Beef dripping fries on the side. “Premium. Aesthetically pleasing. Adventurous yet recognisable.” Not our words.',
  },
  {
    id: 3,
    image: News3,
    title: 'Part-Time Vegetarians',
    desc1:
      'School dinner mounds of greying green beans, waterlogged cauliflower and mushy carrots, a small pile of sweetcorn (from a tin?) and a dollop of (delicious) creamed spinach. No butter or sauce, but ketchup, horseradish and three different kinds of mustard were offered when asked.',
    desc2:
      "We were in a venerable steakhouse at the tail end of a poorly thought-through stateside holiday that had morphed into a brutally relentless research trip. After a week of beef-centric lunches and dinners, mid-afternoon burgers and late-night bar snacks, Huw's wife finally snapped and politely enquired about the Vegetarian options available upon request written on the menu. The elderly waiter looked a little confused, as if it were the first time he'd heard such a question, and went away to check with the kitchen. When the food arrived: 'One King's Cut Prime Rib of Beef'. And, with no hint of shame in his voice, 'For the lady, an assiette of assorted vegetables.' Or, as it was renamed by Huw on his return, “F*ck you” on a plate'. Like the surly service they'd encountered at another legendary steakhouse the day before, there was something right and proper about it. The belligerent 'Come here for steak or don't come here.'  was completely in keeping with a place that's a living monument to beef with every wall, and even the ceiling, dripping with chophouse history. Of such quirks institutions are made.",
    desc3:
      "This was during Hawksmoor's early days and we realised that although our dream was to emulate even a fraction of those beef palaces' longevity, we didn't want to follow the same path. Instead, we everything on the menu had to live up to the steak, so that even vegetarians cajoled along by friends or colleagues were shocked at how well they could eat. Every starter, side and pesky vegetarian main course had to fit with our 'British steak restaurant' approach, which meant that we couldn't fall back on the usual pasta or risotto. They also had to have real presence and personality so they didn't look out of place next to a 400g rib-eye. So no token goat's cheese tart. The solution for us has been charcoal. We are constantly experimenting with myriad vegetables cooked over and directly on top of those glowing embers that are such an intrinsic ingredient in our steaks and seafood. We make clay from the ash to encase root vegetables and slow-cook tomato and more on resting shelves above the grills to intensify their natural flavour and impart a delicate smokiness. It's been a real challenge, but one that's been helped by the well-kept secret that many of us who have been to Hawksmoor for years are really part-time vegetarians. When we eat meat (as we have to and which we love) we eat the good stuff, but the other three or four days a week sees us eating seafood and veg. And, now when checking out new restaurants we often find ourselves marvelling not at the latest dude-food excess that's gripped the twittersphere, but at a simply prepared vegetable dish that's more about the talents of mother nature than a superstar chef.",
  },
  {
    id: 4,
    image: News4,
    title: 'Sustainability at Kampsoahus',
    desc1:
      "Ever since we first started Hawksmoor we wanted to do things the right way.  As our ambitions have grown, we've focused on building a restaurant company with real integrity, to show that you can be successful while prioritising the things you care about most.  For us, that has always included championing regenerative agriculture and proper management of pastureland that offsets and removes carbon from the atmosphere, sustainable fishing practices and local, seasonal sourcing.",
    desc2:
      "Hawksmoor has just been awarded a maximum 3* rating from the Sustainable Restaurant Association for the 12th consecutive year - which we're proud to say makes us one of the most sustainable restaurant groups in the country. As COP26 kicks off in Glasgow, we want to let you know about sustainability at Hawksmoor, and our plans to go even further. Over the years we perhaps haven't talked about the work we do behind the scenes, which ranges from bones for dogs or recipe ideas for staff taking leftovers home, to 100% of our food waste being sent to anaerobic digestion where it's turned into bio gas, or the oil in our chip fryers being used to power vehicles. However, it now feels like these things need to be discussed more. This year we switched the entire company over to green energy, reducing our footprint by the equivalent of taking 103 cars off the road, planting 8000 trees or switching 18000 lightbulbs to LED.",
    desc3:
      "We're really proud to say that we're going even further by minimising and offsetting our carbon footprint to become carbon neutral in 2022, and we have signed up to the United Nation's “Race to Zero”, with a goal to become a 'net zero company' (an even higher bar than carbon neutral) by 2030. This year we've put 100 of our managers through carbon literacy training and we're setting up green teams in the restaurants so all staff can get even more involved in cutting emissions, waste and food waste and constantly making improvements - big and small - across the company and the supply chain. As we've said on our website for years, we do this kind of thing “not because it's trendy and cool or because we're natural tree-huggers or hippy peaceniks. We do it because we want to - it's the kind of company we want to be and the kind of restaurants we want to run. We want a business we can be proud of - whether that's making sure the food we serve is as good as possible, that the animals lived a decent life, or that everyone who works with us enjoys what they do.” We hope that from time to time you feel as proud to be part of it as we do.",
  },
  {
    id: 5,
    image: News5,
    title: "No mandatory restrictions' means what?",
    desc1:
      "We want to make the promise of a more normal-feeling world as real as possible for you, while continuing to do all we can to minimise risk and ensure you feel as comfortable as possible while you're with us.",
    desc2:
      "When you arrive, you will no longer have to check in, wear masks or have your group size limited by the Rule of 6. However, if you'd like to wear a mask please do so, and if you'd like a table 1m+ from the next please call ahead and we will accomodate you wherever we can.",
    desc3:
      "Behind the scenes we will be continuing key measures of what we believe has been a gold-standard response to running a restaurant during this pandemic, such as social distancing among staff, a minimu of twice-weekly testing, and our enhanced cleaning regime. While we won't make wearing masks mandatory for staff, they will have the option to wear one, and they will all have one at all times in case a customer would feel more comfortable if they wore one. We have also given the choice over to our teams, so one or two restaurants may all be wearing masks for a short period of time if they would prefer to. Please don't hesitate to tell us if you'd rather your waiter wore a mask, either when booking or at any point while you're with us. We're thrilled that we're moving to a stage where we can give customers the best possible experience in our restaurants. In particular, to be able to welcome larger groups and help celebrate all those long-postponed occasions in true Hawksmoor fashion. We've been proud that we;ve been considered a 'gold standard' for running a restaurant during the Covid pandemic, and we will continue in that vein to ensure you can all have the best possible experience at Hawksmoor.",
  },
]
const News = () => {
  const [isOpened, setIsOpened] = useState(false)
  function toggler() {
    setIsOpened((wasOpened) => !wasOpened)
  }
  function singleNews(id) {
    const selectedNews = NewsData.filter((ND) => {
      return ND.id === id
    })
    return
  }
  const [searchNews, setSearchNews] = useState('')
  return (
    <div>
      <div className="container_news">
        {!isOpened ? (
          <div className="row">
            <div className="col-lg-3">
              <div className="container_news_search">
                <h2 className="f2">News</h2>
                <div className="pa2">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search News"
                    onChange={(event) => {
                      setSearchNews(event.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {NewsData.filter((val) => {
                if (searchNews == '') {
                  return val
                } else if (
                  val.title.toLowerCase().includes(searchNews.toLowerCase())
                ) {
                  return val
                }
              }).map(({ id, image, title, desc1, desc2, desc3 }) => {
                return (
                  <div className="container_news_articles" key={id}>
                    <div>
                      <img
                        style={{ width: '25rem', height: '15rem' }}
                        src={image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 style={{ color: '#D2BF65', marginBottom: '1rem' }}>
                        {title}
                      </h5>
                      <p style={{ textAlign: 'justify', marginBottom: '4rem' }}>
                        {desc1.substring(0, 100) + '......'}
                      </p>
                      <button
                        className="button"
                        key={id}
                        onClick={() => {
                          toggler()
                          singleNews(id)
                        }}
                      >
                        READ MORE
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div>
            <div className="container_news_single">
              <div>
                <img
                  className="container_news_image_single"
                  src={News4}
                  alt=""
                />
              </div>
              <div>
                <h2 style={{ textAlign: 'center' }}>sdasdasda</h2>
                <p style={{ textAlign: 'justify' }}>
                  sdfsdf
                  <br />
                  <br />
                  <br />
                  sdfsdfsd
                </p>
              </div>
            </div>
            <div>
              <p style={{ marginTop: '1rem', textAlign: 'justify' }}>
                sdfsdfds
              </p>
            </div>
            <button className="button" onClick={toggler}>
              Get Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default News

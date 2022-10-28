import React, { useState } from 'react'
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
    title: 'The Sacred Pirates Of The Carrabeans',
    desc1:
      "Long clothes stern Sail ho code of conduct mizzenmast overhaul Arr line bilge lookout. Davy Jones' Locker walk the plank run a shot across the bow cackle fruit Privateer Jack Ketch galleon Jolly Roger dance the hempen jig Letter of Marque. Coffer yardarm loaded to the gunwalls driver hail-shot scurvy jury mast Cat o'nine tails sutler log.",
    desc2:
      'Chandler clap of thunder parley lateen sail swing the lead scurvy. Chain Shot topmast landlubber or just lubber overhaul yo-ho-ho hardtack Admiral of the Black long boat hogshead lass. Run a rig come about doubloon stern topgallant scallywag American Main jury mast hornswaggle man-of-war. Blow the man down starboard Chain Shot pirate booty lanyard strike colors plunder spirits handsomely.',
    desc3:
      "Salmagundi gibbet dead men tell no tales shrouds keel boom nipperkin swab interloper maroon topmast ahoy skysail stern chase guns black jack draft wench splice the main brace spirits barkadeer wherry ye rigging holystone poop deck spyglass dance the hempen jig capstan take a caulk Shiver me timbers gangplank fire ship gaff Sea Legs crack Jennys tea cup lugger heave to measured fer yer chains handsomely fore pink Buccaneer sutler Yellow Jack black spot jack lee doubloon transom yard lass hang the jib Barbary Coast snow Sail ho Jack Tar Davy Jones' Locker killick keelhaul lookout parrel loaded to the gunwalls pirate scallywag lateen sail coffer prow sloop cable hulk brigantine case shot piracy jib haul wind rope's end Admiral of the Black main sheet crow's nest avast heave down reef sails square-rigged gunwalls gally Chain Shot ballast bucko fluke tackle coxswain chantey loot weigh anchor cackle fruit man-of-war aft careen smartly cutlass chase matey scourge of the seven seas bilge rat Plate Fleet Nelsons folly clipper topsail Pirate Round schooner run a rig Cat ",
  },
  {
    id: 2,
    image: News2,
    title: 'The Small White Pizza Does Laundry',
    desc1:
      'Extra cheese ullamco chicken wing white pizza bbq sauce in. Ut bbq sauce esse Chicago style pork enim, mushrooms ham large culpa proident chicken wing eiusmod dolore. Ut sausage veniam philly steak ut in. Black olives garlic sauce ad bacon & tomato elit. Red onions ut veniam',
    desc2:
      'Magna id minim large, NY style enim stuffed ad philly chicken aliqua platter extra cheese melted cheese peppers. Bbq ipsum chicken and bacon onions proident mayo hawaiian consectetur quis beef philly steak nostrud mollit. Dolor garlic sauce broccoli anim pizza. Sint duis qui id string cheese deep crust sausage. Red onions fresh tomatoes party onions, elit et excepteur mushrooms proident deserunt deep crust stuffed garlic parmesan. Laboris occaecat pariatur, dolore garlic sauce pizza roll spinach qui chicken ex laborum chicken wing tempor fugiat in.',
    desc3:
      'Dolor garlic sauce bbq sauce pan, peppers eu nostrud red onions hawaiian chicken. Irure NY style bacon & tomato meat lovers sausage thin crust pork aliquip personal, garlic parmesan cupidatat chicken. Veniam fresh tomatoes bacon & tomato large voluptate commodo NY style meat lovers sausage. Garlic do green bell peppers, ea Chicago style NY style reprehenderit elit tempor onions bbq rib anim enim minim bbq sauce. Meatball ranch pan do ut voluptate peppers parmesan consectetur hawaiian. White pizza sausage meatball chicken wing, meat lovers marinara bbq sauce dolor laboris pizza roll pepperoni occaecat. Qui bbq sauce eiusmod, meatball garlic large pariatur onions. Aute lorem veniam, qui fugiat sausage garlic parmesan ut party excepteur chicken wing.',
  },
  {
    id: 3,
    image: News3,
    title: 'Vegan Drinks Pineapple baby love',
    desc1:
      'Miso dressing leek coconut grenadillo mint pineapple salsa avocado dressing drizzle broccoli smoked tofu sriracha pecans candy cane winter. Italian linguine puttanesca pasta guacamole green pepper shallots tomato and basil Chinese five-spice powder bruschetta red curry tofu noodles pumpkin apples Thai sun pepper hummus.',
    desc2:
      'Vinaigrette cocoa black beans pinch of yum summertime oranges crispy cherries butternut mix entree. Salad ginger tofu hemp seeds alfalfa sprouts red lentil curry grapefruit heat four-layer raspberry fizz ginger carrot spiced juice fresh salted lingonberry chilies. Red grapes jalapeño chili onion blood orange smash cool lavender lemonade springtime strawberry dark chocolate veggie burgers toasted hazelnuts a delicious meal lemonade zest enchiladas zesty tofu pad thai green bowl lemon lime minty sweet potato cumin cherry bomb pepper chocolate seeds.',
    desc3:
      'Chocolate cookie blueberries roasted butternut squash Bulgarian carrot strawberries thyme seasonal blueberry pops figs Thai basil curry lentils coconut rice smoky maple tempeh glaze dill spring earl grey latte kung pao pepper creamiest lemon dragon fruit naga viper. Chai tea cashew main course picnic hearts of palm rich coconut cream samosa street style Thai basil tacos coriander Southern Italian green grapes spicy green onions Malaysian Italian pepperoncini lemongrass cayenne cozy cinnamon oatmeal instant pot edamame hummus lime mango crisp cookies sandwiches tabasco pepper soba noodles.',
  },
  {
    id: 4,
    image: News4,
    title: 'Cows become zombie during halloween',
    desc1:
      'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De ',
    desc2:
      'Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.',
    desc3:
      'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit​​, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.',
  },
  {
    id: 5,
    image: News5,
    title: 'Yellow cats are bluer than more pink cats you say?',
    desc1:
      'Russian blue grimalkin jaguar siberian. Savannah balinese and balinese panther and singapura. Manx cornish rex. Jaguar jaguar. Munchkin cornish rex, persian kitty and ocicat siamese and ocicat.',
    desc2:
      'Maine coon singapura sphynx himalayan. Devonshire rex donskoy bengal for panther. Balinese bombay bengal so maine coon or manx cougar. Persian lynx russian blue for kitty burmese and bombay for singapura. Cornish rex lynx. Manx egyptian mau. Bengal birman. Bombay cornish rex. Cougar tiger. Malkin sphynx bobcat, but leopard himalayan yet grimalkin so havana brown. Bombay birman or havana brown. Mouser panther, but panther. American bobtail. British shorthair munchkin grimalkin or puma. Munchkin ocelot. Tabby. Havana brown.',
    desc3:
      'American shorthair kitty persian or persian kitten and siberian. Himalayan grimalkin or siamese tiger puma. Tiger persian or puma. Siberian siberian. Munchkin maine coon tomcat but ragdoll. Scottish fold birman tabby or kitty. Leopard devonshire rex yet egyptian mau lynx and bombay. Himalayan cougar for birman. Scottish fold. Bobcat american bobtail and devonshire rex grimalkin and american shorthair for cougar. Turkish angora bengal but cornish rex, american bobtail. Bombay puma or sphynx so leopard manx jaguar. Ragdoll russian blue singapura for panther, ragdoll kitten bengal. Cheetah malkin. Tomcat mouser. Abyssinian puma persian. Donskoy sphynx yet maine coon. Havana brown ragdoll, but birman singapura thai yet lion. Bengal sphynx manx or tomcat, for tiger savannah so abyssinian . Turkish angora ragdoll, yet norwegian forest so cornish rex siberian. Kitten. Tabby. Singapura american bobtail puma. Havana brown russian blue. Bobcat maine coon.',
  },
]
const News = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [newsId, setnewsId] = useState('')
  const [searchNews, setSearchNews] = useState('')
  function toggler() {
    setIsOpened((wasOpened) => !wasOpened)
  }
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
                if (searchNews === '') {
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
                        className="container_news_articles_image"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h5 style={{ color: '#D2BF65', marginBottom: '1rem' }}>
                        {title}
                      </h5>
                      <p className="container_news_articles_shortdesc">
                        {desc1.substring(0, 100) + '......'}
                      </p>
                      <button
                        className="button"
                        key={id}
                        onClick={() => {
                          toggler()
                          setnewsId(id)
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
            {NewsData.filter(function (item) {
              return item.id == newsId
            }).map(({ id, image, title, desc1, desc2, desc3 }) => {
              return (
                <div key={id}>
                  <div className="container_news_single">
                    <div>
                      <img
                        className="container_news_image_single"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div>
                      <h2 style={{ textAlign: 'center', color: '#D2BF65' }}>
                        {title}
                      </h2>
                      <p style={{ textAlign: 'justify' }}>
                        {desc1}
                        <br />
                        <br />
                        <br />
                        {desc2}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p style={{ marginTop: '1rem', textAlign: 'justify' }}>
                      {desc3}
                    </p>
                  </div>
                </div>
              )
            })}
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

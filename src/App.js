import React from 'react';
import './fonts/Vacations-Brush.ttf';
import $ from 'jquery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Sticky from 'react-sticky-el';

// hero photos
import hdr_home from './images-stock/hdr_home.jpg'; // right anchored images work better here
import rings from './images-stock/rings.png'; // rings image
import film_strip from './images-stock/film_banner.png'; // film strip empty
import img1 from './images-stock/film-banner-1.jpg'; // film strip images
import img2 from './images-stock/film-banner-2.jpg'; // film strip images
import img3 from './images-stock/film-banner-3.jpg'; // film strip images
import img4 from './images-stock/film-banner-4.jpg'; // film strip images
import img5 from './images-stock/film-banner-5.jpg'; // film strip images
import icon_rsvp from './images-stock/icon_rsvp.png';
import icon_registry from './images-stock/icon_registry.png';
import icon_hotel from './images-stock/icon_hotel.png';

// about us photos
import becky from './images-stock/becky.jpg';
import james from './images-stock/james.jpg';

// pet photos
import evey from './images/evey.jpg';
import oliver from './images/oliver.jpg';
import simon from './images/simon.jpg';
import boots from './images/boots.jpg';

// timeline photos
import timeline_bg from './images-stock/timeline_bg.jpg'; // timline pic
import gt_image from './images/gt_image.jpg'; // timline pic
import amicalola from './images-stock/amicalola.jpg'; // timline pic
import braves from './images-stock/braves.jpg'; // timline pic
import moulin_rouge from './images-stock/moulin_rouge.jpg'; // timline pic
import sunflower from './images-stock/sunflower.jpg'; // timline pic
import vday from './images-stock/vday.jpg'; // timeline pic
import engaged from './images-stock/engaged.jpg'; // timline pic
import evey_beach from './images-stock/evey_beach.jpg'; // timline pic

// countdown stuff
import Countdown from './components/Countdown.js';
import CountdownDay from './components/CountdownDay.js';

// components
import Hero from './components/Hero.js';
import Menu from './components/Menu.js';

import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import RegistryModal from './components/RegistryModal.js';
import RSVPModal from './components/RSVPModal.js';
import AccomodationsModal from './components/AccomodationsModal.js';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      live: false,
      modalShow: false,
      RSVPmodalShow: false
    }
  }

  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = './Timeline.js';
    script.async = true;
    document.body.appendChild(script);
    $("#sticky-menu > #sticky-menu").addClass('test');
  }    

  render() {
    return (
      <div className="App">
        <div className="main-section">
          <img id='rings_top' src={rings} alt="..."/> {/* rings image */}
          <div className="hero-text">
            <h2>The Wedding of</h2><h3>James &amp; Becks</h3>
            {/* <h3 style={{textAlign: 'center'}}>We're getting married!!!</h3> */}
            {/* <h3>We're getting married!!!</h3> */}
            <div style={{paddingTop: "0", paddingBotton: "0"}} id='countdown' className="section">
              <div className='hero-menu'>
                <div className='container-fluid countdown-container'>
                  {/* <h3 className='title'>Countdown to: Anniversary #4</h3> */}
                  <h4 className='title'>Anniversary #5 &nbsp; &#8226; October&nbsp;10th,&nbsp;2025 &nbsp; &#8226; &nbsp; <CountdownDay /></h4>
                </div>
              </div>
            </div>
            <AnchorLink className='arrow-container' href='#top-menu'>
              <span className="arrow"></span>
              <span className="arrow"></span>
              <span className="arrow"></span>  
            </AnchorLink>
          </div>

          <Sticky style={{height: "100%"}} id="sticky-menu">
            <Menu id='top-menu' className='menu'>
              <ul>
                <li><AnchorLink href='#details'>Details</AnchorLink></li>
                <li><AnchorLink href='#about-us'>About&nbsp;Us</AnchorLink></li>
                <li><AnchorLink href='#pets'>Pets</AnchorLink></li>
                <li><AnchorLink href='#timeline'>Timeline</AnchorLink></li>
              </ul>
            </Menu>
          </Sticky>
          <Hero id='home' className='home max_width_80 section' backgroundimage={hdr_home} />
          <div style={{paddingTop: "0", paddingBotton: "0"}} id='countdown' className="">
              <div className='countdown-section'>
                <div className='container-fluid countdown-container'>
                  <Countdown />
                </div>
              </div>
            </div>
        </div>

        <Container id='details' className='details'>
          <div id='buttons details' className="section">
            <div>
              <div style={{paddingTop: '2.5rem'}}>
                <h2>Wedding Venue</h2>
                <p style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0'}}>Church on the Hill</p>
                <p style={{fontSize: '1.25rem', marginBottom: '0'}}>123 Peachtree Road,</p>
                <p style={{fontSize: '1.25rem', marginBottom: '0'}}>Atlanta, GA, 30314</p>
                <p style={{fontSize: '1.25rem', marginBottom: '0'}}>at 5pm</p>
              </div>
              <div className='icon-container container-fluid justify-content-around'>
                <div>
                  <Button variant="primary" onClick={() => this.setState({RSVPmodalShow: true})} className='main_button align-self-center'>
                    <div>
                      <span>RSVP</span><span><Card.Img id="rsvp" variant="top" src={icon_rsvp} /></span>
                    </div>
                  </Button>
                  <RSVPModal
                    show={this.state.RSVPmodalShow}
                    onHide={() => this.setState({RSVPmodalShow: false})}
                  />
                </div>
                <div>
                  <Button variant="primary" onClick={() => this.setState({modalShow: true})} className='main_button align-self-center'>
                    <div>
                      <span>Registry</span><span><Card.Img id="registry" variant="top" src={icon_registry} /></span>
                    </div>
                  </Button>
                  <RegistryModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({modalShow: false})}
                  />
                </div>   
                <div>
                  <Button variant="primary" onClick={() => this.setState({AccomodationsModalShow: true})} className='main_button align-self-center'>
                    <div>
                      <span>Hotel&nbsp;Info</span><span><Card.Img id="hotel" variant="top" src={icon_hotel} /></span>
                    </div>
                  </Button>
                  <AccomodationsModal
                    show={this.state.AccomodationsModalShow}
                    onHide={() => this.setState({AccomodationsModalShow: false})}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        
        {/* <img id='about_us' src={about_us_banner} alt="..."/> */}
        <div id="film_images">
          <img id='film_strip' src={film_strip} alt="..."/> {/* film strip banner */}
          <div>
            <img id='' src={img1} alt="..."/> {/* film strip image */}
            <img id='' src={img2} alt="..."/> {/* film strip image */}
            <img id='' src={img3} alt="..."/> {/* film strip image */}
            <img id='' src={img4} alt="..."/> {/* film strip image */}
            <img id='' src={img5} alt="..."/> {/* film strip image */}
          </div>
        </div>
        <div id="about-us" className='container-fluid about-us section'>
          {/* <h2>About Us</h2> */}
          <div className='container-fluid d-flex justify-content-around align-items-center'>
            <Container>
              <Row className="justify-content-md-center top-bio section" style={{paddingBottom: '0'}}>
                <Col>
                  <h2>About Us</h2>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col className="bio-card section" id="bride" xs={12} md={6}>
                  <h2>The Bride</h2>
                  <Card>
                    <Card.Img id="bg_photo" variant="top" src={becky} />
                  </Card>
                  <h2 style = {{marginTop: '10px'}}>Becky Cunningham</h2>
                </Col>
                <Col className="bio-card section" id="groom" xs={12} md={6}>
                  <h2>The Groom</h2>
                  <Card>
                    <Card.Img id="bg_photo" variant="top" src={james} />
                  </Card>
                  <h2 style = {{marginTop: '10px'}}>James Cowart</h2>
                </Col>
                <div className="about_text">
                  <p>We're just two nerds destined for a lifetime of fun! We met by chance at Georgia Tech and grew to love each other</p>
                  <p>We have lovely families, pets, and we share all of our passions.</p>
                </div>
              </Row>
            </Container>
          </div>
        </div>

        <div id='pets' className='fur-babies container-fluid section'>
          <h2>Our Fur Babies</h2>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={evey} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Evey</Card.Title>
                      <Card.Text>
                        {/* <em>The Knight</em> */}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={oliver} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Oliver</Card.Title>
                      <Card.Text>
                        {/* <em>The Prince</em> */}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={simon} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Simon</Card.Title>
                      <Card.Text>
                        {/* <em>The Duke</em> */}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={boots} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Boots</Card.Title>
                      <Card.Text>
                        {/* <em>The Squire</em> */}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div id='timeline' className='container-fluid timeline section'>
          <div className="timeline-container" id="timeline-1">
              <div className="timeline-header">
                  <h2 className="timeline-header__title">Our Story</h2>
                  <h3 className="timeline-header__subtitle">James and Becks</h3>
              </div>
              <div className="timeline">
                  <div className="timeline-item" data-text="April&nbsp;28, 2018" data-short-text="Apr 28, 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={gt_image} alt="..." /> 
                      <h3 className="timeline__content-title">The Day We Met</h3>
                      <p className="timeline__content-desc"><strong>@ Georgia Tech</strong></p>
                      <p className="timeline__content-desc">We met at Orientation and made small talk. We were the last 2 people to leave the building.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="October&nbsp;27, 2018" data-short-text="Sep 5, 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={braves} alt="..." />
                      <h3 className="timeline__content-title">Went to the Game</h3>
                      <p className="timeline__content-desc"><strong>@ Braves Stadium</strong></p>
                      <p className="timeline__content-desc">Saw the ATL Braves play against the Boston RedSox</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="December&nbsp;14, 2018" data-short-text="Dec 14, 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={amicalola} alt="..." />
                      <h3 className="timeline__content-title">Hiked a Waterfall</h3>
                      <p className="timeline__content-desc"><strong>@ Amicalola Falls</strong></p>
                      <p className="timeline__content-desc">We hiked to the top of a waterfall and watched the Lunar Eclipse of a Super Blood Moon that night.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="February&nbsp;14, 2019" data-short-text="Feb 14, 2019">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={moulin_rouge} alt="..." />
                      <h3 className="timeline__content-title">Moulin Rouge on Broadway</h3>
                      <p className="timeline__content-desc"><strong>@ NYC</strong></p>
                      <p className="timeline__content-desc">Saw Moulin Rouge. It was fantastic!</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="October&nbsp;20, 2019" data-short-text="Oct 20, 2019">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={sunflower} alt="..." />
                      <h3 className="timeline__content-title">Sunflower Field</h3>
                      <p className="timeline__content-desc"><strong>@ Fausett Farms</strong></p>
                      <p className="timeline__content-desc">Had a fun photoshoot within the sunflowers!</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="February&nbsp;15, 2020" data-short-text="Feb 15, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={vday} alt="..." />
                      <h3 className="timeline__content-title">Valentine's Day Hike</h3>
                      <p className="timeline__content-desc"><strong>@ Savannah Rapids</strong></p>
                      <p className="timeline__content-desc">Got "locked in love" at the Lover's Gate</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="March&nbsp;14, 2020" data-short-text="Mar 14, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={engaged} alt="..." />
                      <h3 id="engaged" className="timeline__content-title">GOT ENGAGED!!!<br/>on Pi Day 3.14<br/></h3>
                      <p className="timeline__content-desc"><strong>@ Becky's alma mater</strong></p>
                      <p className="timeline__content-desc">We went to a beautiful performance of West Side Story at Davidson Fine Arts, Becky's former secondary school. Afterward, we strolled through a courtyard and walked into an empty ampitheatre. James proposed on stage, and we lived happily ever after!</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="10&nbsp;10, 2020" data-short-text="10&nbsp;10, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={timeline_bg} alt="..." /> 
                      <img className="timeline__img" src={evey_beach} alt="..." />
                      <h3 className="timeline__content-title">WE'RE GETTING MARRIED!</h3>
                      <p className="timeline__content-desc"><strong>@ The Cowart House</strong></p>
                      <p className="timeline__content-desc">Come celebrate with us!!!</p>
                    </div>
                  </div>
              </div>
              <br />
              <br />
              <h2 style={{'color': 'white', 'position': 'relative'}}>Thanks for stopping by!</h2>
          </div>
      </div>
    </div>
    );
  }
}
export default App;

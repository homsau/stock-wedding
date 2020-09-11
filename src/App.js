import React from 'react';
import './fonts/Vacations-Brush.ttf';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import hdr_home from './images/hdr_home.jpg';
// import hdr_james_becks from './images/hdr_james_becks.png';
import about_us_banner from './images/about_us_banner.jpg';
// OUR PICS
import about_us_green from './images/about_us_green.jpg';
// import james_headshot from './images/james_headshot.jpg';
// import becky_headshot from './images/becky_headshot.jpg';
// FUR BABIES
import evey from './images/evey.jpg';
import oliver from './images/oliver.jpg';
import simon from './images/simon.jpg';
import boots from './images/boots.jpg';
import beach_feet from './images/beach_feet.jpg';
// import green_bg from './images/green_bg.jpg';
import gt_image from './images/gt_image.jpg';
import gt_graduation_night from './images/gt_graduation_night.jpg'; // front pic
import dating from './images/dating.jpg'; // front pic
import amicalola from './images/amicalola.jpg'; // front pic
import daffodils from './images/daffodils.jpg'; // front pic
import moulin_rouge from './images/moulin_rouge.jpg'; // front pic
import surprise_party from './images/surprise_party.jpg'; // front pic
import birthday_flowers from './images/birthday_flowers.jpg'; // front pic
import vday from './images/vday.jpg'; // front pic
import becky_wine from './images/becky_wine.gif';
// import becky_gif from './images/becky_gif.gif';
import james_gif from './images/james_gif.gif';
import engaged from './images/engaged.jpg'; // front pic
import getting_married from './images/getting-married.jpg';

import Hero from './components/Hero.js';
//import HorizontalSplit from './components/HorizontalSplit.js';
import Countdown from './components/Countdown.js';
// import CardFlip from './components/CardFlip.js';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import VerticallyCenteredModal from './components/VerticallyCenteredModal.js';
import RSVPVerticallyCenteredModal from './components/RSVPVerticallyCenteredModal.js';
// import RSVP from './components/RSVP.js';
// import TestForm from './components/TestForm.js';
// import './App.css';
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
  }    

  render() {
    return (
      <div className="App">
        <Hero id='home' className='home' backgroundimage={hdr_home} >
          <div className="hero-image-text">
            <h1>James &amp; Becks</h1>
            <h2 style={{textAlign: 'left'}}>We're getting married!!!</h2>
          </div>
          <div>
            <AnchorLink className='arrow-container' href='#countdown'>
              <span className="arrow"></span>
              <span className="arrow"></span>
              <span className="arrow"></span>  
            </AnchorLink>
          </div>
        </Hero>

        <div id='countdown' className="section">
          <div className='hero-menu'>
            <div className='container-fluid countdown-container'>
              <h3 className='title'>Countdown to</h3>
              <h2 className='title'>October 10th, 2020</h2>
              <Countdown />
            </div>
          </div>
        </div>

        <div id='buttons' className="section">
          <div>
            <div className='container-fluid d-flex py-4 justify-content-around'>
              <div>
                <Button variant="primary" onClick={() => this.setState({RSVPmodalShow: true})} className='main_button align-self-center'>
                  <div>
                    RSVP
                  </div>
                </Button>
          ​
                <RSVPVerticallyCenteredModal
                  show={this.state.RSVPmodalShow}
                  onHide={() => this.setState({RSVPmodalShow: false})}
                />
              </div>
              <div>
                <Button variant="primary" onClick={() => this.setState({modalShow: true})} className='main_button align-self-center'>
                  <div>
                    Registry
                  </div>
                </Button>
                
                <VerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={() => this.setState({modalShow: false})}
                />
              </div>
            </div>
            <div style={{paddingTop: '1.5rem'}}>
              <h3>Venue Location:</h3>
              <p style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0'}}>10695 Bell Road,</p>
              <p style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0'}}>Duluth, GA, 30097</p>
            </div>
            <div style={{paddingTop: '1.5rem'}}>
              <h3>Hyatt Place:</h3>
              <p style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0'}}>Info coming soon</p>
              {/* <p style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0'}}>11505 Medlock Bridge Rd,</p>
              <p style={{fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0'}}>Johns Creek, GA 30097</p> */}
            </div>
          </div>
        </div>
        

        <img id='about_us' src={about_us_banner} alt="..."/>
        <div className='container-fluid about-us section'>
          {/* <h2>About Us</h2> */}
          <div className='container-fluid d-flex justify-content-around align-items-center'>
            <Container>
              <Row className="justify-content-md-center top-bio section">
                <Col>
                  <h2>About Us</h2>
                  <Card.Img id="bg_photo" variant="top" src={about_us_green} />
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col className="bio-card section" xs={12} md={6}>
                  <h2>The Bride</h2>
                  <Card>
                    <Card.Img variant="top" src={becky_wine} />
                    <Card.Title>Rebecca Lynn Cunningham</Card.Title>
                    <Card.Body>
                      <Card.Text>
                        fiancee: &#123;
                        occupation: Web Developer;
                        age: 27; &#125;
                        {/* <p>birthday: June 10;</p>
                        <p>jokes: puns;</p>
                        <p>strength: love;</p>
                        <p>&#125;</p>  */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="bio-card section" xs={12} md={6}>
                  <h2>The Groom</h2>
                  <Card>
                    <Card.Img variant="top" src={james_gif} />
                    <Card.Title>James Powell Cowart</Card.Title>
                    <Card.Body>
                      <Card.Text>
                        fiance: &#123;
                        occupation: Web Developer;
                        age: 30; &#125;
                          {/* <p>birthday: June 10;</p>
                          <p>jokes: puns;</p>
                          <p>strength: love;</p>
                          <p>&#125;</p>  */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div id='fur_babies' className='fur-babies container-fluid section'>
          <h2>Our Fur Babies</h2>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={evey} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Evey</Card.Title>
                      <Card.Text>
                        <em>The Knight</em>
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
                        <em>The Prince</em>
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
                        <em>The Duke</em>
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
                        <em>The Squire</em>
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
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={gt_image} alt="..." /> 
                      <h3 className="timeline__content-title">The Day We Met</h3>
                      <p className="timeline__content-desc"><strong>@ Georgia Tech</strong></p>
                      <p className="timeline__content-desc">We met at Orientation and made small talk. We were the last 2 people to leave the building.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="October&nbsp;27, 2018" data-short-text="Oct 27, 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={gt_graduation_night} alt="..." />
                      <h3 className="timeline__content-title">Graduated as Web Developers</h3>
                      <p className="timeline__content-desc"><strong>@ Georgia Tech</strong></p>
                      <p className="timeline__content-desc">We crushed it.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="December&nbsp;14, 2018" data-short-text="Dec 14, 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={dating} alt="..." />
                      <h3 className="timeline__content-title">Started Dating!</h3>
                      <p className="timeline__content-desc"><strong>@ ATL</strong></p>
                      <p className="timeline__content-desc">...and still are!</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="January&nbsp;21, 2019" data-short-text="Jan 21, 2019">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={amicalola} alt="..." />
                      <h3 className="timeline__content-title">Birthday Hiking Adventure</h3>
                      <p className="timeline__content-desc"><strong>@ Amicalola Falls</strong></p>
                      <p className="timeline__content-desc">We hiked to the top of a waterfall and wwatched the Lunar Eclipse of a Super Blood Moon that night.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="February&nbsp;14, 2019" data-short-text="Feb 14, 2019">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={daffodils} alt="..." />
                      <h3 className="timeline__content-title">First Valentine’s Day</h3>
                      <p className="timeline__content-desc"><strong>@ Augusta, GA</strong></p>
                      <p className="timeline__content-desc">D &amp; D <em>(Dinner &amp; Daffodils!)</em></p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="July&nbsp;3, 2019" data-short-text="Jul 3, 2019">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={moulin_rouge} alt="..." />
                      <h3 className="timeline__content-title">BROADWAY!</h3>
                      <p className="timeline__content-desc"><strong>@ NYC</strong></p>
                      <p className="timeline__content-desc">Saw Moulin Rouge. It was fantastic!</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="January&nbsp;4, 2020" data-short-text="Jan&nbsp;4, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={surprise_party} alt="..." />
                      <h3 className="timeline__content-title">James’ 30th Birthday&nbsp;Party</h3>
                      <p className="timeline__content-desc"><strong>@ The Cowart House</strong></p>
                      <p className="timeline__content-desc">It was a total surprise! A Dragon Ball Z themed party fit for a true 90's dude. Lots of delicious food, great company, and hilarious banter.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="February&nbsp;15, 2020" data-short-text="Feb 15, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={vday} alt="..." />
                      <h3 className="timeline__content-title">Valentine's Day Hike</h3>
                      <p className="timeline__content-desc"><strong>@ Savannah Rapids</strong></p>
                      <p className="timeline__content-desc">Got "locked in love" at the Lover's Gate</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="March&nbsp;14, 2020" data-short-text="Mar 14, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={engaged} alt="..." />
                      <h3 id="engaged" className="timeline__content-title">GOT ENGAGED!!!<br/>-on Pi Day 3.14-<br/><span style={{fontSize: "2rem"}}>1st night of quarantine</span></h3>
                      <p className="timeline__content-desc"><strong>@ Becky's alma mater</strong></p>
                      <p className="timeline__content-desc">We went to a beautiful performance of West Side Story at Davidson Fine Arts, Becky's former secondary school. Afterward, we strolled through a courtyard and walked into an empty ampitheatre. James proposed on stage, and we lived happily ever after!</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="June&nbsp;10, 2020" data-short-text="Jun 10, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={birthday_flowers} alt="..." />
                      <h3 className="timeline__content-title">Becky's 27th Birthday!!!</h3>
                      <p className="timeline__content-desc"><strong>@ Marietta, GA</strong></p>
                      <p className="timeline__content-desc">We had a lovely picnic with homemade sushi and an in-house showing of What A Girl Wants.</p>
                    </div>
                  </div>
                  <div className="timeline-item" data-text="10&nbsp;10, 2020" data-short-text="10&nbsp;10, 2020">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={getting_married} alt="..." />
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

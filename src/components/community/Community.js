import React ,{useState} from "react";
import Logo from "../../images/community/logo.jpg";
import Card_Img from "../../images/community/r.jpg";
import "./Community.css"
import { Row, Col } from "react-bootstrap";
import about_img from "../../images/community/about.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

const Community = () => {


  let What_we_do = [
    {
      id:1,
      imageSrc :Card_Img

    },
    {
      id:2,
      imageSrc :Card_Img
    },
    {
      id:3,
      imageSrc :Card_Img
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  };

  const upcoming_events_map = What_we_do.map((event, index) => (
    <Card key={index} event={event} />
  ));

  const [eventSlider, setEventSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settings}>{upcoming_events_map}</Slider>
    ) : (
      upcoming_events_map
    )
  );

  const responsive = (media) => {
    if (media.matches) {
      setEventSlider(<Slider {...settings}>{upcoming_events_map}</Slider>);
    } else {
      setEventSlider(upcoming_events_map);
    }
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);



  return (
    <>
    <Row className= "about-info justify-content-center"  >
      
      <Col className = "about-txt align-items-center" sm={12} lg={9} md={9} xl={10}>
       <img
            src={about_img}
            alt="Card"
            className="img-fluid about-img"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            data-aos-delay="100"
            data-aos-anchor=".example-selector"
            data-aos-anchor-placement="top-center"
          ></img> 
      <div   className="container col-lg 6 col-sm-12 about-body"
      
             data-aos="fade-left"
             data-aos-easing="ease-in-sine"
             data-aos-duration="1000"
             data-aos-delay="100"
             data-aos-anchor=".example-selector"
             data-aos-anchor-placement="top-center"
      >
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title text-center font-weight-bolder">About Us</h5>
            <p className="card-text about-para " >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium, quibusdam repudiandae, voluptates facere maxime
              dolore vero, consequuntur asperiores nemo officiis debitis cum?
              Nam magnam quis vel laborum alias, omnis itaque.
            </p>
          </div>
        </div>
      </div>
      </Col>
    </Row>

    <Row className= "who_block">
      <Col  sm={12} lg={6} md={6} xl={6}>
      
      <div className="container " >
        <div className="card who">
          <div className="card-body">
            <img src={Logo} className="img-fluid who-design-left" alt="Logo" />
            <h5 className="card-title text-center font-weight-bolder">Who are we</h5>
            <img src={Logo} className="img-fluid who-design-right" alt="Logo" />
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium, quibusdam repudiandae, voluptates facere maxime
              dolore vero, consequuntur asperiores nemo officiis debitis cum?
              commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </p>
          </div>
        </div>
      </div>

      </Col>

    </Row>
    
     <Row className="justify-content-center">
    <div className="container events mt-2 mt-lg-5 what_we_do">{eventSlider}</div>
    </Row>

     <Row className="row2  justify-content-center">
       <Col sm={12} lg={9} md={9} xl={8} className="col2">

       <div className='msg-card ' >
          <div className ="msg-wrap mission"> 
          <div className= "msg-block">
            <div className='msg-title card-title' >
                            Our Mission
                    </div>
                    <div className='msg-text'>
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </div>
                    </div>
                    <div className='msg-img'>

                    </div>
          </div>
                
       </div>
       </Col>
     </Row>

     <Row className="row2 justify-content-center">
       <Col sm={12} lg={9} md={9} xl={8} className="col2">

       <div className='msg-card ' >
          <div className ="msg-wrap"> 

          <div className='msg-img'>

          </div>

                <div className= "msg-block" style={{marginLeft :"10px"}}>
                  <div className='msg-title card-title' >
                                  Our Values
                  </div>
                  <div className='msg-text'>
                              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                  </div>
                </div>
                    
          </div>
                
       </div>
       </Col>
     </Row>

    </>
  );
};

export default Community;

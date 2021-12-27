import React from "react";
import Logo from "../../images/community/logo.jpg";
import Card_Img from "../../images/community/r.jpg";
import "./Community.css"
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
    <Row >
      <Col sm={12} lg={7} md={6} xl={5} className = "col1">
      <div className="container my-4 mx-5" >
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title font-weight-bolder">About Us</h5>
            <p className="card-text">
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
     <Row >
        <Col>
        <div className="container my-4">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} className="img-fluid who-design-left" alt="Logo" />
            </div>
            <div className="col-md-6 who">
              <h2 className="card-title mt-2 text-center font-weight-bolder">Who we are</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                officia vero, tempora placeat ad illum error perspiciatis
                obcaecati excepturi nam pariatur deleniti unde similique, dicta
                aliquid totam consequatur corporis. Eveniet!
              </p>
            </div>

            <div className="col-md-3">
              <img src={Logo} className="img-fluid who-design-right" alt="Logo"  />
            </div>
          </div>
        </div>
      </div>
        </Col>
      

     </Row>
     <Row>
     <div className="container my-4">
        <div className="container card text-center">
          <h5 className="card-titler">What we do</h5>
          <div className="card-group">
            <div className="card mx-2">
              <img src={Card_Img} className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            <div className="card mx-2">
              <img src={Card_Img} className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div className="card mx-2">
              <img src={Card_Img} className="card-img-top" alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </Row>
     
     <Row className="row2 justify-content-center">
       <Col sm={12} lg={9} md={9} xl={8} className="col2">

       <div className='msg-card ' >
          <div className ="msg-wrap"> 
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

     <Row className="row2 justify-content-center">
       <Col sm={12} lg={9} md={9} xl={8} className="col2">

       <div className='msg-card ' >
          <div className ="msg-wrap"> 
          <div className= "msg-block">
            <div className='msg-title card-title' >
                            Our Vision
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

     

    </>
  );
};

export default About;

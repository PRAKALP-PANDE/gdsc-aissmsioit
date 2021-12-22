import React from "react";

import Logo from "../../images/community/logo.jpg";
import Card_Img from "../../images/community/r.jpg";

const Community = () => {
  return (
    <>
      <div className="container my-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">About Us</h5>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium, quibusdam repudiandae, voluptates facere maxime
              dolore vero, consequuntur asperiores nemo officiis debitis cum?
              Nam magnam quis vel laborum alias, omnis itaque.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="card">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </div>
            <div className="col-md-6">
              <h2 className="card-title mt-2">Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                officia vero, tempora placeat ad illum error perspiciatis
                obcaecati excepturi nam pariatur deleniti unde similique, dicta
                aliquid totam consequatur corporis. Eveniet!
              </p>
            </div>

            <div className="col-md-3">
              <img src={Logo} className="img-fluid" alt="Logo"  />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="container card text-center">
          <h5 className="card-titler">What we do</h5>
          <div className="card-group">
            <div className="card mx-2">
              <img
                src={Card_Img}
                className="card-img-top"
                alt="Card" 
              />
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
              <img
                src={Card_Img}
                className="card-img-top"
                alt="Card" 
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
            </div>
            <div className="card mx-2">
              <img
                src={Card_Img}
                className="card-img-top"
                alt="Card" 
              />
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

      <div className="container my-4">
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <img src={Card_Img} className="img-fluid" alt="Card" />
            </div>
            <div className="col-md-8">
              <h2 className="card-title mt-2">Mission</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                officia vero, tempora placeat ad illum error perspiciatis
                obcaecati excepturi nam pariatur deleniti unde similique, dicta
                aliquid totam consequatur corporis. Eveniet!
              </p>
            </div>
          </div>
        </div>

        <div className="card my-4">
          <div className="row p-2">
            <div className="col-md-8">
              <h2 className="card-title mt-2">Vision</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                labore perferendis, culpa officia quibusdam ut magni delectus
                mollitia expedita maiores officiis exercitationem! Magni,
                veritatis cupiditate sunt hic culpa atque libero.
              </p>
            </div>
            <div className="col-md-4">
              <img src={Card_Img} className="img-fluid" alt="Card" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;

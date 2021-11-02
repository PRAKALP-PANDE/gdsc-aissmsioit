import React from "react";

const GetInTouch = () => {
  const submitForm = async (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const mobile_number = event.target[2].value;
    const message = event.target[3].value;

    if (
      name.length === 0 ||
      email.length === 0 ||
      mobile_number.length === 0 ||
      message.length === 0
    ) {
      const contactError = document.getElementById("contact_error");
      contactError.innerHTML = "Please Enter Valid Data!";
    } else {
      const response = await fetch(
        "https://gdsc-web-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            mobile_number: mobile_number,
            message: message,
          }),
        }
      );
    }
  };

  return (
    <>
      <form className="container my-5">
        <div className="text-center">
          <span id="contact_error" className="text-danger"></span>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            id="contact_name"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="contact_email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Mobile Number</label>
          <input
            type="number"
            className="form-control"
            id="contact_number"
            placeholder="Enter your mobile number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="contact_message"
            rows="4"
            placeholder="Enter message"
          ></textarea>
        </div>
        <input
          className="btn btn-primary mt-2"
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default GetInTouch;

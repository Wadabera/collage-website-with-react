import React from "react";
import "./Contact.css";
import msg from "../../assets/msg-icon.png";
import mail from "../../assets/mail-icon.png";
import phone from "../../assets/phone-icon.png";
import location from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "acdd3557-c048-4686-a41d-ed02186f0239");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact_col">
        <h3>
          Send us a message <img src={msg} alt="" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul>
          <li>
            {" "}
            <img src={mail} alt="" />
            Email:{" "}
            <a href="mailto:Contact@GreatStack.dev">Contact@GreatStack.dev</a>
          </li>
          <li>
            {" "}
            <img src={phone} alt="" />
            Phone: <a href="tel:+11234567890">+1 123-456-7890</a>
          </li>
          <li>
            <img src={location} alt="" /> Address: 77 Massachusetts Ave,
            Cambridge
            <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact_col">
        <form  onSubmit={onSubmit}>
          <label>your name</label>
          <input
            type="text"
            name="name"
            placeholder="enter you name"
            required
          />
          <label>phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="enter your phone number"
            required
          />
          <label>write your message here</label>
          <textarea
            name="message"
            id=""
            rows="6"
            placeholder="enter your messages"
            required
          ></textarea>
          <button type="submit" className="btn dark_btn">
            {" "}
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;

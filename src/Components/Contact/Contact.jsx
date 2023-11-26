import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { BsInstagram } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      showWarningMessage();
    } else {
      emailjs.sendForm(
        "service_4myki0v",
        "template_1riu8oe",
        form.current,
        "gGgw9W1gn8q3VWmXn"
      );
      setName("");
      setEmail("");
      setMessage("");
      showSuccessMessage();
    }
  };

  const showSuccessMessage = () => {
    toast.success("Email send successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showWarningMessage = () => {
    toast.warning("Please fill all the inputs!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <section className="contact section container" id="contact">
      <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span> </span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Contact Me</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <BsInstagram className="icon" />
              </div>
              <h4>Instagram</h4>
              <span className="userName">@dduwcsm4nhj</span>

              <div>
                <a
                  href="https://www.instagram.com/dduwcsm4nhj/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  DM me here!
                  <BiRightArrowAlt className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiFillFacebook className="icon" />
              </div>
              <h4>Facebook</h4>
              <span className="userName">Nguyễn Đức Mạnh</span>

              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100012166986679"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  DM me here!
                  <BiRightArrowAlt className="icon" />
                </a>
              </div>
            </div>

            <div className="card">
              <div>
                <AiFillLinkedin className="icon" />
              </div>
              <h4>LinkedIn</h4>
              <span className="userName">Manh Nguyen</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/manh-nguyen-73530b265/"
                  className="flex"
                  target="_blank"
                  rel="noreferrer"
                >
                  DM me here!
                  <BiRightArrowAlt className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form grid">
          <h3>Email can be sent to me here!</h3>
          <form ref={form} onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              name="message"
              placeholder="Write your message here"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <button
              onClick={handleClick}
              className="formBtn"
              type="submit"
              name="submit"
            >
              Send!
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

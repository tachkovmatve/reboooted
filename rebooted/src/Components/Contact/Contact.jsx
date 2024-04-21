import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "01113100-056a-4e1e-b182-e0531807868f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad cupiditate laudantium officiis hic consequatur repudiandae fugit, laborum repellendus sapiente dolorem libero iste unde dolor. At deserunt cupiditate ratione animi laboriosam doloremque odio cum libero pariatur. Lorem ipsum dolor sit amet consectetur</p>
            <ul>
                <li><img src={mail_icon} alt="" /> tachkovmatveyy@gmail.com</li>
                <li><img src={phone_icon} alt="" />+48791227706</li>
                <li><img src={location_icon} alt="" />al. Tysiaclecia Panstwa Polskiego 19 <br /> Kielce, Poland
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' required/>
                <label htmlFor="">Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter Your Phone Number' required/>
                <label htmlFor="">Write Your Messages Here</label>
                <textarea name="" id=""  rows="6" placeholder='Write Your Message' required></textarea>
                <button type='submit' className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
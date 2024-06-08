import React, { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_7y77jvs',
        'template_augumwv',
        form.current,
        '0mgg32MGiW3pyeqw5'
      )
      .then(
        (result) => {
          console.log(result.text)
          console.log('Message sent successfully')
          alert('Message sucessfully sent')
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>
          "A hardworking and passionate job seeker with strong organizational skills, eager to secure a position where I can expand my skills and knowledge while also contributing to the organization's goals.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Pavan Swamullapally
          <br />
          Hyderabad, Telangana state
          <br />
          India
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[17.463997, 78.4278693]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.463997, 78.4278693]}>
              <Popup>
                Pavan, Lives Here.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}
export default Contact

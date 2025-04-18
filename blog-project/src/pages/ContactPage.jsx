import React from 'react'
import PageHeading from '../component/PageHeading'

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <PageHeading heading={"Where We're"}/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.299639479353!2d34.54736444104843!3d36.78736556853714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15278b65b10810c3%3A0x5a0a237eac5a5448!2sMETALL%C4%B0CA!5e0!3m2!1str!2str!4v1736842975494!5m2!1str!2str" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
  )
}

export default ContactPage
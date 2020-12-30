import React from "react"

import SocialNetwork from "app/footer/SocialNetwork"

import "app/footer/footer.css"

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <div className="footer__title">Dejan</div>
        <p className="footer__description">
          I am Dejan and this is my personal website.
        </p>

        <SocialNetwork />

        <p className="footer__copy">
          {`All rights reserved by Dejan - ${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  )
}

export default Footer

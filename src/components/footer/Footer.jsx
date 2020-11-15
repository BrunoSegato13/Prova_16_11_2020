import React from 'react';
import './index.css';

//Images
import twitter from '../../assets/twitter.png';
import whatssap from '../../assets/whatssap.png';
import facebook from '../../assets/facebook.png';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="media">
          <div className="info">
            <legend>Contato</legend>
            <ul>
              <li>Email: snappacking@snap.com</li>
              <li>Phone: +55 (45) 12345678</li>
              <li>Phone: +55 (45) 12345678</li>
            </ul>

          </div>
          <div className="social-media">
            <ul>
              <a href=""><img src={facebook} alt="facebook" /></a>
              <a href=""><img src={whatssap} alt="whatssap" /></a>
              <a href=""><img src={twitter}alt="twitter" /></a>
            </ul>
          </div>
        </div>
        
        <div className="Copyright">
          <hr />
          <p>Todos os direitos reservados &copy; Snap Packing 2020</p>
        </div>
      </div>


    </>
  )
}

export default Footer;
import React from 'react'
import '../CSS/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faCopyright } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
  return <>
  
  <footer>
  <FontAwesomeIcon icon={faCopyright} /> 2024 All Rights Reserved <br /> Designed by <span className='text-white font-semibold underline'> <a target='_blank' href="https://www.linkedin.com/in/nilesh-yadav-0691a52b1/">Nilesh Kumar Yadav</a> </span> <br />
            <div className="footer_links">
                <a target='blank' href="https://www.instagram.com/nileshyadav_06/profilecard/?igsh=MWU5Nmcxdno1a3psaA==" ><FontAwesomeIcon icon={faInstagram} beatFade /></a>
                <a target='blank' href="https://www.facebook.com/nileshyaduvanshi.yadavji?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} beatFade /></a>
                <a target='blank' href="https://www.linkedin.com/in/nilesh-yadav-0691a52b1/"><FontAwesomeIcon icon={faLinkedin} beatFade /></a>
                <a href="https://github.com/nileshyadav-06" target='blank'><FontAwesomeIcon icon={faGithub} beatFade /></a>
            </div>
        </footer>
  </>
}

export default Footer

import React from 'react'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa';

const Footer = () => {

  const year = new Date().getFullYear()
  
  return (<footer className='login-footer'>
                  <ul>
                    <li><a href='https://github.com/YaredBachaGari/'><FaGithub/></a></li>
                    <li><a href='https://twitter.com/BachaYared'><FaTwitter/></a></li>
                    <li><a href='https://m.facebook.com/100002521598014/'><FaFacebook/></a></li>
                    <li><a href='https://www.linkedin.com/in/yared-gari-472620111/'><FaLinkedin/></a></li>
                  </ul>
                  <hr style={{width:'35%', margin:'0 auto'}}></hr>
                  <div> &copy; {year>2022 ? `2022-${year}`:'2022'} Implemented by Yared Gari as educational exercise during multiverse bootcamp.</div>
              </footer>
  )
}

export default Footer
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Styles/Footer.css'

function Footer() {
  return (
        <div className='footer'>
            <div className='socialMedia'>
              <FacebookIcon />
              <TwitterIcon /><InstagramIcon /><YouTubeIcon />
          </div>
          <p>&copy; 2022 ccd something</p>
        </div>
  )
}
export default Footer
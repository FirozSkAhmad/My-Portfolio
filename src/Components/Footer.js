import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <a href='https://www.linkedin.com/in/shaik-firoz-ahmad-b0b77b242/' target="_blank">
                    <LinkedInIcon />
                </a>
            </div>
            <p>&copy; 2023</p>
        </div>
    )
}

export default Footer

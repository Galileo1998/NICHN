import React from 'react';
import { ReactComponent as YoutubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";

import "./SocialLinks.scss";

export default function SocialLinks(){
    return(
        
        <div className="social-links">
            <a href="https://www.youtube.com/" className="youtube" target="_blank" rel="noreferrer">
                <YoutubeIcon />
            </a>
            <a href="https://twitter.com/" className="twitter" target="_blank" rel="noreferrer">
                <TwitterIcon />
            </a> 
            <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noreferrer">
                <FacebookIcon />
            </a>   
        </div>
        
    )
}

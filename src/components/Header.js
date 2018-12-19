import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="panel top forceMobileView">
                    <div className="sections desktop">
                        <div className="left">
                            <h1 style={{color:"white"}}>HoriZon.</h1>
                            {/* <a href="#" title="Brand Name">
                                <svg style={{ width: '107px', height: '31px' }}>
                                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" />
                                </svg>
                            </a> */}
                        </div>
                        <div className="right">
                            <ul className="menu uppercase crop" style={{color:"white"}}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">The Conference</a></li>
                                <li><a href="#">Speakers</a></li>
                                <li><a href="#">Past Events</a></li>
                                <li><a href="#">RSVP</a></li>                                
                                {/* <li><a href="http://twitter.com/designmodo" target="_blank"><svg className="twitterIcon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter" /></svg></a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="sections compact hidden">
                        <div className="left"><a href="#" title="Brand Name"><svg style={{ width: '107px', height: '31px' }}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" /></svg></a></div>
                        <div className="right"><span className="button actionButton sidebarTrigger" data-sidebar-id={1}><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu" /></svg></span></div>
                    </div>
                </nav>

                <nav className="sidebar deepPurple" data-sidebar-id={1}>
                    <div className="close"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#close" /></svg></div>
                    <div className="content">
                        <a href="#" title="Brand Name" className="logo"><svg width={120} height={50}><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#logo" /></svg></a>
                        <ul className="mainMenu uppercase" style={{color:"white"}}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">The Conference</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">Past Events</a></li>
                            <li><a href="#">RSVP</a></li>                            
                        </ul>
                        <ul className="subMenu">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press &amp; Media</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <ul className="social">
                            <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#twitter" /></svg></a></li>
                            <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#facebook" /></svg></a></li>
                            <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#googlePlus" /></svg></a></li>
                            <li><a href="#"><svg><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#pinterest" /></svg></a></li>
                        </ul>
                    </div>
                </nav>                
            </div>
        )
    }
}

export default Header;
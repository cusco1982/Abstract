import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/pagestyle.css";
import profileImage from "../images/about.jpg";



class Profile extends Component {
    
    
    render() {
        return (
            <body>
                <div id="colorlib-page">
                    <div class="container-wrap">

                        <aside id="colorlib-aside" role="complementary" className="border js-fullheight">

                            <div class="text-center">

                            
                            <img class="author-img" src={require('../images/about.jpg')} />
                                {/* <div class="author-img" style={{ backgroundImage: "url(" + { profileImage } + ")" }}></div> */}


                                <h1 id="colorlib-logo"><a href="/profile">Julian Ayllon</a></h1>
                                {/* <span class="position"><a href="#">Full Stack Web Developer</a><br /> in New Jersey</span> */}
                            </div>

                            <nav id="colorlib-main-menu" role="navigation" className="navbar">
                                <div id="navbar" className="collapse">
                                    <ul>
                                        <li><Link to="#" data-nav-section="images">Images</Link></li>
                                        <li><Link to="#" data-nav-section="about">About</Link></li>
                                        <li><Link to="/">Main</Link></li>
                                        {/* <li><a href="#" data-nav-section="about">About</a></li>
                                <li><a href="#" data-nav-section="services">Projects</a></li>
                                <li><a href="#" data-nav-section="skills">Skills</a></li>
                                <li><a href="#" data-nav-section="education">Education</a></li>
                                <li><a href="#" data-nav-section="contact">Contact</a></li> */}
                                    </ul>
                                </div>
                            </nav>

                            <div className="colorlib-footer">
                                {/* <p>
                            <a href="https://github.com/cusco1982" style="color:black" target="_blank">Check out my
							GitHub!</a>
                        </p> */}
                                <ul>            
                                    <li>
                                        <a className="icon-facebook2" style={{color:"black"}} href="https://www.facebook.com/hooleean28" target="_blank" rel="noopener noreferrer">FB</a>
                                    </li>
                                    <li>
                                        <a className="twitter-logo" style={{color:"black"}} href="https://twitter.com/hooleean28" target="_blank" rel="noopener noreferrer">Twitter</a>
                                    </li>
                                    <li>
                                        <a className="instagram-logo" style={{color:"black"}} href="https://www.instagram.com/hooleean28" target="_blank" rel="noopener noreferrer">iG</a>
                                    </li>
                                    <li>
                                        <a className="linkedin-logo" style={{color:"black"}} href="https://www.linkedin.com/in/julian-ayllon" target="_blank" rel="noopener noreferrer">linkedIn</a>
                                    </li>


                                    {/* <li><a href="https://www.facebook.com/hooleean28" target="_blank"><i class="icon-facebook2"
                                style="color:black"></i></a></li>
                            <li><a href="https://twitter.com/hooleean28" target="_blank"><i class="icon-twitter2"
                                style="color:black"></i></a></li>
                            <li><a href="https://www.instagram.com/hooleean28/" target="_blank"><i class="icon-instagram"
                                style="color:black"></i></a></li>
                            <li><a href="www.linkedin.com/in/julian-ayllon" target="_blank"><i class="icon-linkedin2"
                                style="color:black"></i></a></li> */}
                                </ul>
                            </div>

                        </aside>


                        {/*  <Link className="main-link" to="/">Main</Link>  */}

                    </div>
                </div>

            </body>


        );
    }
}

export default Profile;
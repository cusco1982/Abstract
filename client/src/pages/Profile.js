import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/pagestyle.css";



class Profile extends Component {
    render() {
        return (
            <body>

                <aside id="colorlib-aside" role="complementary" className="border js-fullheight">

                    <div class="text-center">
                        <div className="author-img" style={{backgroundImage: "url(../images/about.jpg);"}}></div>
                        <h1 id="colorlib-logo"><a href="index.html">Julian Ayllon</a></h1>
                        {/* <span class="position"><a href="#">Full Stack Web Developer</a><br /> in New Jersey</span> */}
                    </div>

                    <nav id="colorlib-main-menu" role="navigation" class="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li><Link to="#" data-nav-section="images">Images</Link></li>
                                <li><Link to="#" data-nav-section="about">About</Link></li>
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
                                <Link className="facebook-logo" to="https://www.facebook.com/hooleean28">FB</Link>
                            </li>
                            <li>
                                <Link className="twitter-logo" to="https://twitter.com/hooleean28">Twitter</Link>
                            </li>
                            <li>
                                <Link className="instagram-logo" to="https://www.instagram.com/hooleean28">iG</Link>
                            </li>
                            <li>
                                <Link className="linkedin-logo" to="www.linkedin.com/in/julian-ayllon">linkedIn</Link>
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


            </body>


        );
    }
}

export default Profile;
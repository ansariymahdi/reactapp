import React from 'react'
import User from './../../assets/img/user.png'
class Profile extends React.Component {
    constructor() {
        super()

    }

    
    render() {
        return (
            <div class="card-layout">
                <div class="container">
                    <div class="row padding-bottom-100 padding-top-100" >
                        <div class="col-xs-12 col-sm-5 col-lg-5 text-right">
                                <div class="foto">
                                <img src={User} alt="Ukieweb"/>
                               
                            </div>
                            </div>
                                <div class="col-xs-12 col-sm-7 col-lg-7">
                                <h1 class="title">Jonh Doe</h1>
                                <h3 class="sub-title">Web Designer &amp; Mobile Application Developer</h3>
                                 
                                <div class="social">
                                        <ul class="animated fadeIn visible" data-animation="fadeIn" data-animation-delay="600">
                                         
                                        <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-facebook"></i></a></li>
                                            <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-linkedin"></i></a></li>
                                            <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-google-plus"></i></a></li>
                                            <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-dribbble"></i></a></li>
                                            <li><a class="ukie-icons hover-animate" href="#"><i class="fa fa-youtube"></i></a></li>
                                        
                                    </ul>
                                    </div>
                               
                            </div>
                            </div>

                </div>

            </div>
          )
    }
}

export default Profile

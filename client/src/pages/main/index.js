import React from "react";
import "./style.css";

function Main() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 text-center main-cat1">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">Need Help?</h1>
                    <h5 className="animated fadeInUp" id="subheadHeader">We are here to help you if you are a vicitm of human trafficing.</h5>
                    <button className="btn btn-lg btn-danger">Get Help Now</button>
                </div>

                <div className="col-md-6 text-center main-cat2">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">Donate</h1>
                    <h5 className="animated fadeInUp" id="subheadHeader">Your contribution in time or resources allows us to help more victims.</h5>
                    <button className="btn btn-lg btn-danger">Donate Now</button>
                </div>
            </div>
            <div className="row">
                <div class="card-deck">
                    <div className="animated fadeIn card text-white link-white bg-dark mb-3 main-card">
                        <div className="card-header main-card-header">Together we're giving futures back</div>
                        <div className="card-body">
                            <h5 className="card-title main-card-title">YOU ARE IMPORTANT</h5>
                            <p className="card-text">With your donations, we combine all our resources and talents
                            to accomplish two things: One, to help those we’ve rescued have a second chance at life.
                            Two, to continue searching for those who are still trapped and rescue them.</p>
                        </div>
                    </div>
                    <div className="animated fadeIn card text-white link-white bg-dark mb-3 main-card tonyaMain tonya-tint">
                    </div>
                    <div className="animated fadeIn card text-white link-white bg-dark mb-3 main-card">
                        <div className="card-header main-card-header">All financial gifts support our mission</div>
                        <div className="card-body">
                            <h5 className="card-title main-card-title">HOW TO DONATE</h5>
                            <p className="card-text">All financial gifts support our mission: rescuing and support
                            services to stabilize victims of abuse, human trafficing, and sex trafficing.</p>
                            <ul>
                                <li>Secure online donation</li>
                                <li>Electronic check</li>
                                <li>Mailed Check</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col main-flood text-center">
                    <h1 className="main-header animated fadeInUp" id="mainHeader">HB 2290 - Human Trafficking Awareness Month</h1>
                    {/* <h5 className="animated fadeInUp" id="subheadHeader">We are here to help you if you are a vicitm of human trafficing.</h5> */}
                    <button className="btn btn-lg btn-danger">Learn More</button>
                </div>
            </div>
            <div className="row bg-dark">
                <div className="col">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fas fa-users fa-5x"></i>
                            <h3>36 Million</h3>
                            <p>Estimated people who are slaves across the world</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-female fa-5x"></i>
                            <h3>55%</h3>
                            <p>Are women and girls</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-male fa-5x"></i>
                            <h3>45%</h3>
                            <p>Are men and boys</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <i className="fas fa-child fa-5x"></i>
                            <h3>26%</h3>
                            <p>Are children</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i className="fas fa-money-bill-alt fa-5x"></i>
                            <h3>$90</h3>
                            <p>Average cost of slave</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <i class="fas fa-dollar-sign fa-5x"></i>
                            <h3>$150 billion dollars</h3>
                            <p>How much money slavery generates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
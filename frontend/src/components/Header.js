import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faBrain, faLightbulb} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header id="section-2">
            <div className="overlay"/>

            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="/Videos/header-video.mp4" type="video/mp4"/>
            </video>

            <div className="container h-100">
                <div className="row text-start align-items-center h-100">
                    <div className="d-flex h-100 text-start align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">Orbit's <span className="text-glitch-large">Synthwave</span></h1>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6">
                                    <hr/>
                                </div>
                            </div>
                            <p className="lead mb-0">Synthwave Music and Retro Design inspired by the 80s</p>
                            <button className="btn btn-light m-2 mt-4 pe-3 ps-3 pt-2 pb-2">SYNTHWAVE UNIVERSE</button>
                            <button className="btn btn-light m-2 mt-4 pe-3 ps-3 pt-2 pb-2">RETRO DESIGN WORLD</button>
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="card border-light mb-3">
                                        {/*<i className="far fa-paper-plane p-4 text-bigger"></i>*/}
                                        <FontAwesomeIcon icon={faPaperPlane}/>
                                        <div className="card-body">
                                            <h4 className="card-title p-3">Future Concept.</h4>
                                            <hr className="ms-3 me-3"/>
                                            <p className="card-text p-3 text-larger">Lorem ipsum dolor sit amet,
                                                consectetur
                                                adipiscing elit. Ut
                                                elit
                                                tellus.​</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-secondary mb-3">
                                        {/*<i className="fas fa-brain p-4 text-bigger"></i>*/}
                                        <FontAwesomeIcon icon={faBrain}/>
                                        <div className="card-body">
                                            <h4 className="card-title p-3">The Big Ideas.</h4>
                                            <hr className="ms-3 me-3"/>
                                            <p className="card-text p-3 text-larger">Lorem ipsum dolor sit amet,
                                                consectetur
                                                adipiscing elit. Ut
                                                elit
                                                tellus.​</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-light mb-3">
                                        {/*<i className="far fa-lightbulb p-4 text-bigger"></i>*/}
                                        <FontAwesomeIcon icon={faLightbulb}/>
                                        <div className="card-body">
                                            <h4 className="card-title p-3">Creative Solutions.</h4>
                                            <hr className="ms-3 me-3"/>
                                            <p className="card-text p-3 text-larger">Lorem ipsum dolor sit amet,
                                                consectetur
                                                adipiscing elit. Ut
                                                elit
                                                tellus.​</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </header>
    );
};

export default Header;
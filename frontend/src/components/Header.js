import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBrain, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <header id="section-2">
            <div className="overlay" />

            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="/Videos/header-video.mp4" type="video/mp4" />
            </video>

            <div className="container h-100">
                <div className="row text-start align-items-center h-100">
                    <div className="d-flex h-100 text-start align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">Orbit's <span className="text-glitch-large">Synthwave</span></h1>
                            <div className="row justify-content-center">
                                <div className="col-md-4 col-sm-6">
                                    <hr />
                                </div>
                            </div>
                            <p className="lead mb-0">Synthwave Music and Retro Design inspired by the 80s</p>
                            <button className="btn btn-light m-2 mt-4 pe-3 ps-3 pt-2 pb-2">SYNTHWAVE UNIVERSE</button>
                            <button className="btn btn-light m-2 mt-4 pe-3 ps-3 pt-2 pb-2">RETRO DESIGN WORLD</button>
                            <div className="row pt-5">
                                <div className="col-md-4">
                                    <div className="card border-light mb-3 hero-feature-card">
                                        <div className="feature-icon-wrap">
                                            <FontAwesomeIcon icon={faPaperPlane} className="feature-icon" />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title p-3">Fresh Release Radar.</h4>
                                            <hr className="ms-3 me-3" />
                                            <p className="card-text p-3 text-larger">
                                                Discover standout synthwave, outrun and darksynth albums each days and week,
                                                with a quick list of where to start listening.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-secondary mb-3 hero-feature-card">
                                        <div className="feature-icon-wrap">
                                            <FontAwesomeIcon icon={faBrain} className="feature-icon" />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title p-3">Scene Guides.</h4>
                                            <hr className="ms-3 me-3" />
                                            <p className="card-text p-3 text-larger">
                                                Learn the subgenres, essential artists and labels through concise guides
                                                built for newcomers who want to dive in fast.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card border-light mb-3 hero-feature-card">
                                        <div className="feature-icon-wrap">
                                            <FontAwesomeIcon icon={faLightbulb} className="feature-icon" />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="card-title p-3">Design Inspiration.</h4>
                                            <hr className="ms-3 me-3" />
                                            <p className="card-text p-3 text-larger">
                                                Explore references for neon palettes, typography and retro motion ideas
                                                to shape your own 80s-inspired visual style.
                                            </p>
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

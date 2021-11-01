import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

const Videos = () => {
    return (
        <header id="section-5">
            <div className="overlay"/>

            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="/Videos/section-5-video.webm" type="video/mp4"/>
            </video>

            <div className="container h-100 p-3">
                <div className="d-flex h-100 text-center pt-5">
                    <div className="w-100 text-white">
                        <h1>TWO latest videos of RETRO SYNTHWAVE TV</h1>
                        <p className="lead mb-0 text-purple">Put on your HEADPHONES and open your EYES!</p>
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-4">
                                <button type="button" value="more-about-rstv" className="btn btn-light">MORE ABOUT
                                    RSTV
                                </button>
                            </div>
                        </div>
                        <div className="row pt-5">
                            <div className="col-lg-6">
                                <div className="youtube-video-container">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nk1zpcN4MBs"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </div>
                                <h2>Overglow - Retro Designer</h2>
                                <p>Retro Designers / Designer Tribute</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="youtube-video-container">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vUpDpXP41Cg"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen/>
                                </div>
                                <h2>Overglow - Retro Designer</h2>
                                <p>Retro Designers / Designer Tribute</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <button className="btn btn-light text-large" type="button"><FontAwesomeIcon
                                    icon={faCheck}/> LIKE & SUBSCRIBE
                                </button>
                                <p className="pt-3 text-purple">Video Editing in Background by Dixel Art</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Videos;
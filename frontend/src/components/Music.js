import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMusic} from "@fortawesome/free-solid-svg-icons/faMusic";

const Music = () => {
    return (
        <div className="container-fluid text-center pt-5 pb-5" id="section-6">
            <div className="row">
                <div className="col-md-6">
                    <h2>Lates LPs</h2>
                    <p>Recommended recent Albums</p>
                </div>
                <div className="col-md-6">
                    <h2>Lates EPs</h2>
                    <p>Recommended recent Extened Plays</p>
                </div>
            </div>
            <div className="row pt-4">
                <div className="col-md-3">
                    <h4>Waveshaper - Mainframe</h4>
                    <div className="col-md-12 center pt-4">
                        <img className="img-thumbnail img-center" src="/Images/Waveshaper-Mainframe.jpg"
                             alt="waveshaper-mainframe-img"/>
                    </div>
                    <button className="btn btn-light mt-4" type="button"><FontAwesomeIcon icon={faMusic}/> MAINFRAME
                        REVIEW
                    </button>
                    <p className="pt-4">Release date: September 17, 2021</p>
                    <p>Style: Outrun, Chillwave</p>
                </div>
                <div className="col-md-3">
                    <h4>Tommy '86 - Change of Scenery</h4>
                    <div className="col-md-12 center pt-4">
                        <img className="img-thumbnail img-center" src="/Images/Tommy-Scenery-1536x1536.jpg"
                             alt="waveshaper-mainframe-img"/>
                    </div>
                    <button className="btn btn-light mt-4" type="button"><FontAwesomeIcon icon={faMusic}/> CHANGE OF
                        SCENERY
                    </button>
                    <p className="pt-4">Release date: September 17, 2021</p>
                    <p>Style: Outrun, Chillwave</p>
                </div>
                <div className="col-md-3">
                    <h4>Waveshaper - Mainframe</h4>
                    <div className="col-md-12 center pt-4">
                        <img className="img-thumbnail img-center" src="/Images/le-matos-rise-turbo-kid.jpg"
                             alt="waveshaper-mainframe-img"/>
                    </div>
                    <button className="btn btn-light mt-4" type="button"><FontAwesomeIcon icon={faMusic}/> RISE OF TURBO
                        KID
                    </button>
                    <p className="pt-4">Release date: September 17, 2021</p>
                    <p>Style: Outrun, Chillwave</p>
                </div>
                <div className="col-md-3">
                    <h4>Waveshaper - Mainframe</h4>
                    <div className="col-md-12 center pt-4">
                        <img className="img-thumbnail img-center" src="/Images/Niky-Nine.jpg"
                             alt="waveshaper-mainframe-img"/>
                    </div>
                    <button className="btn btn-light mt-4" type="button"><FontAwesomeIcon icon={faMusic}/> BLACK SHARKEN
                        REVIEW
                    </button>
                    <p className="pt-4">Release date: September 17, 2021</p>
                    <p>Style: Outrun, Chillwave</p>
                </div>
            </div>
        </div>
    );
};

export default Music;
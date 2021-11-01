import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faUsers, faChartArea, faGlobe, faFlag, faChartBar} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div id="section-services" className="container p-5">
            <div className="row justify-content-center">
                <div className="card border-primary m-3 col-md-3">
                    {/*<i className="fas fa-chart-line p-3 text-bigger"></i>*/}
                    <FontAwesomeIcon icon={faChartArea}/>
                    <div className="card-body">
                        <h4 className="card-title">Digital Strategy</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
                            luctus.</p>
                    </div>
                </div>
                <div className="card border-secondary m-3 col-md-3">
                    {/*<i className="fas fa-pencil-alt p-3 text-bigger"></i>*/}
                    <FontAwesomeIcon icon={faPencilAlt}/>
                    <div className="card-body">
                        <h4 className="card-title">UX Designs</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
                            luctus.</p>
                    </div>
                </div>
                <div className="card border-light m-3 bg-light col-md-3">
                    {/*<i className="fas fa-users p-3 text-bigger text-black"></i>*/}
                    <FontAwesomeIcon icon={faUsers}/>
                    <div className="card-body text-black">
                        <h4 className="card-title">UI Designs</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
                            luctus.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="card border-danger m-3 col-md-3">
                    {/*<i className="fas fa-globe p-3 text-bigger"></i>*/}
                    <FontAwesomeIcon icon={faGlobe}/>
                    <div className="card-body">
                        <h4 className="card-title">Social Media</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
                            luctus.</p>
                    </div>
                </div>
                <div className="card border-warning m-3 col-md-3">
                    {/*<i className="fas fa-flag p-3 text-bigger"></i>*/}
                    <FontAwesomeIcon icon={faFlag}/>
                    <div className="card-body">
                        <h4 className="card-title">Design Concept</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
                            luctus.</p>
                    </div>
                </div>
                <div className="card border-info m-3 col-md-3">
                    {/*<i className="far fa-chart-bar p-3 text-bigger"></i>*/}
                    <FontAwesomeIcon icon={faChartBar}/>
                    <div className="card-body">
                        <h4 className="card-title">Media Pairing</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu
                            luctus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer indigo text-white footer-image bottom-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 footer-column-start text-large">
                        <h5 className="white-text text-large">Orbit's Synthwave</h5>
                        <p className="grey-text text-lighten-4">Everything about Synthwave.</p>
                    </div>
                    <div className="col-sm-4 footer-column-center text-large">
                        <h5 className="white-text">Synthwave News</h5>
                        <p className="grey-text text-lighten-4">We are selling the best futuristic cars.</p>
                    </div>
                    <div className="col-sm-4 footer-column-end text-large">
                        <a href="/">Why Orbit's Synthwave?</a> <br/>
                        <a href="/">Movies, TV shows and videos</a> <br/>
                        <a href="/">Our web designers</a> <br/>
                        <a href="/">Would you like to work with us?</a> <br/>
                        <a href="/">Retro artwork</a> <br/>
                        <a href="/">Contact Us</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="text-white" href="https://realsarius.github.io/" rel="noopener noreferrer" target="_blank"><i
                                className="fas fa-user"/></a></li>
                            <li><a className="text-white" href="https://github.com/realsarius" rel="noopener noreferrer" target="_blank"><i
                                className="fab fa-github"/></a></li>
                            <li><a className="text-white"
                                   href="https://www.youtube.com/channel/UCi-2u9HKaOKGVsrTyCMqNXg"
                                   rel="noopener noreferrer" target="_blank"><i className="fab fa-youtube"/></a></li>
                            <li><a className="text-white" href="https://codepen.io/realsarius"rel="noopener noreferrer"  target="_blank"><i
                                className="fab fa-codepen"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    &copy; 2021 Copyright
                    <a className="grey-text text-lighten-4 right" href="/">More Links</a>
                </div>
            </div>
        </footer>
);
};

export default Footer;
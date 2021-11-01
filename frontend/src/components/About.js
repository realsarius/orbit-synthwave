import React from 'react';

const About = () => {
    return (
        <div>
            <div className="contact-image w-100 vh-100 d-flex justify-content-start align-items-end p-5">
                <div className="row flex-column">
                    <div className="col-auto">
                        <h2 className="text-glitch text-bigger">Send us</h2>
                    </div>
                    <div className="col-auto">
                        <h4>Your questions or proposals</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-auto pt-5">
                        <h2>Who we are</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p><b>We are</b> Orbit's Synthwave, a large-scale website, a web blockbuster but made of
                            bytes. <b>We
                                are</b> the best
                            representation of a modern electronic music based on borrowed sounds from the 80s. <b>We
                                are</b> a
                            reference
                            for the best musicians and designers associated to a retro-futuristic galaxy and sunny
                            cosmos. <b>We
                                are</b>
                            the quintessence of the visual world closely linked to these sound jewels. <b>We are</b> the
                            best place
                            for
                            people who look for videos in direct connection to this mythical era, the 80s. <b>We
                                are</b> the best
                            means to
                            discover some fabulous electronic games combining huge sounds and graphics with retro
                            style. <b>We will
                                be
                                the ultimate solution</b> for any artist who wants to know and reach his full
                            potential. <b>We are
                                Orbit's
                                Synthwave</b>, at your disposal for any special request you may have.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid"
                             src="https://www.retro-synthwave.com/wp-content/uploads/2016/04/carte-monde-768x423.png"
                             alt="world-map"/>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 p-5" id="contact-form-container">
                <h1>Send us a message:</h1>
                <form action="https://formsubmit.co/tehadro@protonmail.com" method="POST" className="form"
                      id="contact-form">
                    <div className="row" id="formRow">
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="name">Your Name (required)</label> <br/>
                            <input type="text" id="name" name="name" placeholder="my name is" required/>
                        </div>
                        <input type="hidden" name="_next"
                               value="https://realsarius.github.io/ending-project/contact.html"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="subject">Message subject (required)</label>
                            <br/>
                            <input type="text" id="subject" name="subject" placeholder="my subject is"
                                   required/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="website">Do you have a website?</label> <br/>
                            <input type="text" id="website" name="website" placeholder="www."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Your eMail (required)</label> <br/>
                            <input type="email" id="email" name="email" placeholder="name@website.com" required/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="country">Your country</label> <br/>
                            <input type="text" id="country" name="country" placeholder="where I come from"/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="function">Your function</label> <br/>
                            <select name="function" id="function">
                                <option value="">---</option>
                                <option value="Musician">Musician</option>
                                <option value="Designer">Designer</option>
                                <option value="Label Manager">Label Manager</option>
                                <option value="News reporter">News reporter</option>
                                <option value="Webmaster">Webmaster</option>
                                <option value="Just a music lover">Just a music lover</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label className="form-label" htmlFor="reason">What is the reason of your request?
                                (required)</label> <br/>
                            <select name="reason" id="reason" className="w-100 text-white">
                                <option value="">---</option>
                                <option value="A technical problem with the website">A technical problem with the
                                    website
                                </option>
                                <option value="A question about Retro Synthwave">A question about Retro Synthwave
                                </option>
                                <option value="A collaboration with Retro Synthwave">A collaboration with Retro
                                    Synthwave
                                </option>
                                <option value="Retro Synthwave Contest">Retro Synthwave Contest</option>
                                <option value="Other request">Other request</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label className="form-label" htmlFor="message">Your Retro Message</label> <br/>
                            <textarea name="message" id="message" cols="30" rows="10"
                                      placeholder="I want to tell you this..."
                                      className="w-100 text-white"/>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-auto">
                            <button type="submit" value="SEND MESSAGE" className="pt-2 pb-2 pe-4 ps-4 btn btn-dark">SEND
                                MESSAGE
                            </button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-md-6 p-5"/>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 p-5"/>
                </div>
            </div>
        </div>
    );
};

export default About;
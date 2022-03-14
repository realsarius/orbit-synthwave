import React from 'react';

const OurPartners = () => {
    return (
        <div>
            <div className="our-partners-image w-100 vh-100 d-flex justify-content-start align-items-end p-5">
                <div className="row flex-column">
                    <div className="col-auto">
                        <h2 className="text-glitch text-bigger">Orbit's Synthwave Partners</h2>
                    </div>
                    <div className="col-auto">
                        <h4>Our Partners & Friends</h4>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <p className="text-center text-purple pt-5 pb-4">Here are our partners in the worlds of Synthwave & Retro
                        Design.</p>
                    <div className="wrap">
                        <h2 className="centre-line"><span>Drive Radio</span></h2>
                    </div>
                </div>
                <div className={"row text-center pt-5"}>
                    <div className={'col-md-3 border'}><img
                        src={'https://www.retro-synthwave.com/wp-content/uploads/2019/07/logo-partner-drive-radio.jpg'}
                        alt={'drive-radio-logo'} className={'img-thumbnail'}/></div>
                    <div className={'col-md-3 border text-lg-start m-auto'}><strong>Society</strong>: Drive Radio<br/>
                        <strong>Activity</strong>: Synthwave influenced Radio & Media<br/>
                        <strong>Location</strong>: Belgium<br/>
                        <strong>Website</strong>: driveradio.be<br/><br/>
                        Drive Radio <strong>Contact</strong>
                    </div>
                    <div className={'col-md-6 border text-lg-start m-auto'}><strong>Drive Radio</strong> is a webradio
                        which broadcast music such as
                        Synthwave, Future Funk, 80’s retro electro, Outrun, Darkwave, Dreamwave, Italo-Disco, Disco,
                        SloMoTechno… In <a href="https://driveradio.be/"> the website</a>, there are some
                        exclusive <strong>interviews</strong> of Synthwave Legends, <strong>reviews </strong>
                        of the best albums in this universe but also and especially
                        numerous <strong>TOP10</strong> on <a
                            href="https://soundcloud.com/drivemusicradio/sets"> Soundcloud</a> with
                        the possibility to <strong>share your tracks</strong> by contacting <a
                            href="driveradio@driveradio.be"> them</a>.
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="wrap">
                        <h2 className="centre-line"><span>Newretro.Net</span></h2>
                    </div>
                </div>
                <div className={"row text-center pt-5 pb-5"}>
                    <div className={'col-md-3 border'}><img
                        src={'https://www.retro-synthwave.com/wp-content/uploads/2019/07/logo-partner-newretro.jpg'}
                        alt={'drive-radio-logo'} className={'img-thumbnail'}/></div>
                    <div className={'col-md-3 border text-lg-start m-auto'}>
                        <strong>Society</strong>: Newretro.Net <br/>
                        <strong>Activity</strong>: 80s Streetwear clothes and accesories <br/>
                        <strong>Location</strong>: United States of America <br/>
                        <strong>Website</strong>: newretro.net <br/><br/>
                        NewRetro <strong>Contact</strong>
                    </div>
                    <div className={'col-md-6 border text-lg-start m-auto'}><a href="https://newretro.net/">New retro</a> is a <strong>cultural movement</strong> to
                        integrate and adjust <strong>appearances of the 80s</strong> such as universe, vibe and ideas in the society of
                        today. They’ve created a highly edited selection of streetwear accesories and clothes, that’s
                        <strong>accessibly priced</strong> and <strong>obsessively crafted</strong> to provide a fantastic shopping experience to their
                        customers.

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
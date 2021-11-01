import React from 'react';

const News = () => {
    return (
        <div className="container-fluid pt-5" id="section-4">
            <div className="row p-5 text-center">
                <h1>News from the Retro universe</h1>
                <h4>The latest in Synthwave, design, retro movies and games</h4>
            </div>
            <div className="row justify-content-center p-5">
                <div className="col-md-9">
                    <table className="table table-hover table-borderless text-white">
                        <tr>
                            <td>JUNE 21, 2021</td>
                            <td>PRESENTATION OF RETRO SYNTHWAVE TV</td>
                            <td>ANIMATION NEWS</td>
                        </tr>
                        <tr>
                            <td>MARCH 7, 2021</td>
                            <td>PERTURBATOR - DEATH OF THE SOUL - MUSIC VIDEO</td>
                            <td>ANIMATION NEWS</td>
                        </tr>
                        <tr>
                            <td>NOVEMBER 15, 2020</td>
                            <td>CYBORG - DEADLY MACHINE</td>
                            <td>ANIMATION NEWS</td>
                        </tr>
                        <tr>
                            <td>OCTOBER 30, 2020</td>
                            <td>EXCLUSIVE MIXTAPE - TERROR ON THE DANCEFLOOR</td>
                            <td>SYNTHWAVE NEWS</td>
                        </tr>
                        <tr>
                            <td>OCTOBER 16, 2020</td>
                            <td>THE RISE OF THE SYNTHS - DOCUMENTARY</td>
                            <td>SYNTHWAVE NEWS</td>
                        </tr>
                        <tr>
                            <td>AUGUST 29, 2021</td>
                            <td>BLOOD MACHINES IN THEATERS AND SHUDDER</td>
                            <td>SYNTHWAVE NEWS</td>
                        </tr>
                    </table>
                </div>

            </div>
            <div className="row text-center pb-5">
                <div className="col-md-12">
                    <button type="button" value="SEE ALL POSTS" className="btn btn-light text-large">SEE ALL POSTS
                    </button>
                </div>

            </div>
        </div>
    );
};

export default News;
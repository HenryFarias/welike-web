import React from 'react';
import Panel from './dashboard/Panel.js';

class Dashboard extends React.Component {
    render() {
        return (
            <section id="content">
                <div className="page dashboard-page">
                    <div className="bg-light lter b-b wrapper-md mb-10">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <h1 className="font-thin h3 m-0">Dashboard</h1>
                                <small className="text-muted">Tudo que está acontecendo por aqui</small>
                            </div>
                        </div>
                    </div>
                    <Panel></Panel>
                    <div className="row">
                        <div className="col-sm-12">
                            <section className="boxs" style={{height: 150 + 'px'}}>
                                <div className="boxs-header">
                                    <h1 className="custom-font">Welike <strong>Social</strong> Bots </h1>
                                </div>
                                <div className="boxs-body" align="center">
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/twitter.png" alt="twitter" /> <br />1 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/instagram.png" alt="instagram" /> <br />0 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/youtube.png" alt="youtube" /> <br />0 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/facebook.png" alt="facebook" /> <br />0 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/snapchat.png" alt="snapchat" /> <br />0 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/pinterest.png" alt="pinterest" /> <br />0 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                    <div className="col-sm-1">
                                        <span className="text-center">
                                            <label style={{color: 'white'}}>
                                                <img className="round smallIcon" src="app/assets/images/social/spotify.png" alt="spotify" /> <br />0 <br />BOT
                                            </label>
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Dashboard;
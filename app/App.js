import React from 'react';
import Dashboard from './components/Dashboard.js';
import Campaign from './components/Campaign.js';
import CampaignView from './components/CampaignView.js';
import CampaignNew from './components/CampaignNew.js';
import BuildCampaign from './components/campaign/BuildCampaign.js';
import YoutubeReference from './components/youtube/Index.js';
import Navbar from './components/layout/Navbar.js';
import SideBar from './components/layout/SideBar.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    componentWillMount() {
        document.body.classList.remove('signup-page')
        document.body.classList.add('main_Wrapper')
    }

    render() {
        return (
            <div id="wrap" className="animsition">
                <Navbar />
                <Router>
                    <div id="controls">
                        <SideBar />
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/campaign/:id" component={CampaignView} />
                        <Route path="/campaigns" component={Campaign} />
                        <Route path="/campaign-new" component={CampaignNew} />
                        <Route path="/search-reference" component={BuildCampaign} />
                        <Route path="/reference-youtube" component={YoutubeReference} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
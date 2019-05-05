import React from 'react';
import Dashboard from './views/Dashboard.js';
import Campaign from './views/Campaign.js';
import CampaignView from './views/CampaignView.js';
import CampaignNew from './views/CampaignNew.js';
import BuildCampaign from './views/campaign/BuildCampaign.js';
import YoutubeReference from './views/youtube/Index.js';
import Navbar from './views/layout/Navbar.js';
import SideBar from './views/layout/SideBar.js';

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
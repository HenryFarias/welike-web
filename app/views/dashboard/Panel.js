import React from 'react'
import Dashboard from '../../services/Dashboard'

class Panel extends React.Component {
    constructor() {
        super();
        this.state = { 
            dash: {
                campaign: 0,
                reference: 0,
                user: 0,
                followers: 0,
                friends: 0,
                tweets: 0
            } 
        }
    }

    componentDidMount() {
        Dashboard.list((response) => {
            this.setState({ dash: response })
        })
    }

    render() {
        const dash = this.state.dash

        return (
            <div className="row">
                <div className="col-md-6 col-xs-12 col-lg-12">
                    <div className="row stats row-sm text-center">
                        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
                            <div className="block panel padder-v item">
                                <span id="campaignsCount" className="text-info font-thin h1 block">{dash.campaign}</span>
                                <span className="text-muted text-xs text-xs">Campaigns</span>
                                <span className="bottom text-right w-full"><i className="fa fa-rocket text-muted m-r-sm"></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
                            <div className="block panel padder-v bg-amethyst item">
                                <span id="usersCount" className="text-'white' font-thin h1 block">{dash.reference}</span>
                                <span className="text-muted text-xs text-'white'">References</span>
                                <span className="bottom text-right w-full">
                                    <i className="fa fa-user text-muted m-r-sm"></i></span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
                            <div className="block panel padder-v bg-info item">
                                <span id="followersCount" className="text-'white' font-thin h1 block">{dash.followers}</span>
                                <span className="text-muted text-xs text-'white'">Followers</span>
                                <span className="bottom text-right w-full"><i className="fa fa-user text-muted m-r-sm"></i> </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 col-lg-3">
                            <div className="block panel padder-v item">
                                <span id="friendsCount" className="font-thin h1 block">{dash.friends}</span>
                                <span className="text-muted text-xs">Friends</span>
                                <span className="bottom text-right w-full"><i className="icon-user-following text-muted m-r-sm"></i></span>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="block panel padder-v bg-lightgray item">
                                <div className="col dk padder-v">
                                    <div id="postsCount" className="font-thin h1 text-darkgray"><span>{dash.tweets}</span></div>
                                    <span className="text-muted text-xs">Posts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Panel;
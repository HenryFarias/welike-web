import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router-dom'
import Campaign from '../../services/Campaign'

class StatusCampaign extends React.Component {

    constructor() {
        super();
        this.state = { campaigns: [] }
    }

    componentDidMount() {
        Campaign.list((response) => {
            this.setState({ campaigns: response })
        })
    }

    render() {
        const campaigns = this.state.campaigns.map((campaign, key) => {
            return (
                <div key={key}>
                    <Link to={'/campaign/' + campaign._id}>
                        <div className="text-center-folded">
                            <span className="pull-right pull-none-folded">{campaign.status}%</span>
                            <span className="hidden-folded">{campaign.name}</span>
                        </div>
                        <div className="progress progress-xxs m-t-sm dk">
                            <div className="progress-bar" style={{width: campaign.status + '%'}}>

                            </div>
                        </div>
                    </Link>
                </div>
            )
        })

        return campaigns
    }
}
export default StatusCampaign;
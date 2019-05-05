import React from 'react'
import Campaign from '../services/Campaign'
import CampaignReference from './campaign/CampaignReference'
import ReferenceChart from './campaign/ReferenceChart'
import RankInfluencer from './campaign/RankInfluencer'


class CampaignView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            references: [],
            influencers: [],
            campaign: {}
        };
    }


    findInfluencer(id) {
        Campaign.findInfluencer(id, (response) => {
            this.setState({ influencers: response })
        })
    }

    loadCampaign(params) {
        Campaign.find(params.id, (response) => {
            this.setState({ campaign: response })
        })

        Campaign.listReference(params.id, (response) => {
            this.setState({ references: response })
        })

        Campaign.listInfluencer(params.id, (response) => {
            this.setState({ influencers: response })
        })
    }

    componentDidMount() {
        this.loadCampaign(this.props.match.params)
    }

    componentWillReceiveProps(newProps) {
        this.loadCampaign(newProps.match.params)
    }

    render() {
        const { campaign } = this.state
        return (
            <section id="content">
                <div className="page page-forms-common">
                    <div className="bg-light lter b-b wrapper-md mb-10">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <h1 className="font-thin h3 m-0">Campanha {campaign.name}</h1>
                                <small className="text-muted">Tudo sobre sua campanha</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-md-12">
                            <section className="boxs">
                                <div className="boxs-header dvd dvd-btm">
                                    <h1 className="custom-font">Informações</h1>
                                </div>
                                <div className="boxs-body">
                                    <h5> <i className="fa fa-map-marker text-primary"></i> Localização: {campaign.location} </h5>
                                    <h5> <i className="fa fa-user text-primary"></i> Média de seguidores: {campaign.min_followers} - {campaign.max_followers} </h5>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <CampaignReference references={this.state.references} campaign_id={campaign._id} findInfluencer={this.findInfluencer} />
                </div>
                <div className="col-sm-12">
                    <ReferenceChart references={this.state.references} influencers={this.state.influencers} campaign_id={campaign._id} />
                </div>
                <div className="col-sm-12">
                    <RankInfluencer influencers={this.state.influencers} />
                </div>
            </section>
        );
    }
}
export default CampaignView;
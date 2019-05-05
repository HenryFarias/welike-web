import React from 'react';

class CampaignReference extends React.Component {

    render() {
        var references = this.props.references.map((reference, key) => {
            return (
                <div key={key} className="col-md-2">
                    <div className="testimonial-user-info user-info text-center">
                        <div className="testimonial-user-thumb user-thumb">
                            <img className="img-circle" src={reference.picture} alt="user-thumb" />
                        </div>
                        <div className="testimonial-user-txt user-text">
                            <a href={'http://www.twitter.com/' + reference.username} target="_blank" />
                            <a href={'http://www.twitter.com/' + reference.username} target="_blank">{reference.name} <br/> @{reference.username}</a>
                            <h6 className="text-muted"></h6>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="row">
                <div className="col-md-12">
                    <section className="boxs">
                        <div className="boxs-header dvd dvd-btm">
                            <h1 className="custom-font">Referências</h1>
                        </div>
                        <div className="boxs-body">
                            <div className="row">
                                {references}
                            </div>
                        </div>
                        <div className="boxs-footer text-right">
                            <a onClick={this.props.findInfluencer.bind(this, this.props.campaign_id)} className="btn btn-raised btn-primary">Start</a>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default CampaignReference;
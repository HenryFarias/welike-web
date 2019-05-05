import React from 'react';

class CampaignList extends React.Component {
    constructor(props) {
        super(props);
    }

    addReference(campaign) {
        this.props.addReference(campaign);
    }

    render() {
        if(!this.props.campaigns.length) {
            var list = (
                <tr>
                    <td>No records found.</td>
                </tr>
            );
        } else {
            var list = this.props.campaigns.map((campaign, key) => {
                return (
                    <tr key={key}>
                        <td>
                            <i className="fa fa-rocket"></i>
                        </td>
                        <td>{campaign.name}</td>
                        <td className="text-right">
                            <button type="button" onClick={this.addReference.bind(this, campaign)} className="btn btn-raised btn-success">Save</button>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <table className="table table-hover">
                <tbody>{list}</tbody>                
            </table>
        );
    }
}

export default CampaignList;
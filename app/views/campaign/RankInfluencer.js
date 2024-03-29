import React from 'react';

class RankInfluencer extends React.Component {

    render() {
        let influencers = this.props.influencers.map((influencer, key) => {
            return (
                <tr key={key}>
                    <td>{influencer.name}</td>
                    <td><a href={'https://twitter.com/' + influencer.username} target="_blank">@{influencer.username}</a></td>
                    <td>{influencer.location}</td>
                    <td>{influencer.followers}</td>
                    <td>{influencer.friends}</td>
                    <td>ADD</td>
                </tr>
            );
        });

        return (
            <div className="row">
                <div className="col-md-12">
                    <section className="boxs">
                        <div className="boxs-header dvd dvd-btm">
                            <h1 className="custom-font">Ranking de Influenciadores</h1>
                        </div>
                        <div className="boxs-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <table id="searchTextResults" data-filter="#filter" data-page-size="100" className="footable table table-custom">
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th>Username</th>
                                                <th>Localização</th>
                                                <th>Referênciaa</th>
                                                <th>Seguidores</th>
                                                <th>Seguindo</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {influencers}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default RankInfluencer;
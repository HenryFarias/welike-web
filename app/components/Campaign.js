import React from 'react';
import Service from '../services/Campaign'
import { Link } from 'react-router-dom';

class Campaign extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            campaigns: {}
        };
    }

    componentWillMount() {
        Service.list((response) => {
            this.setState({ campaigns: response })
        })
    }

    render() {

        if (!this.state.campaigns.length) {
            var list = (
                <tr>
                    <td></td>
                    <td>Nenhum item encontrado.</td>
                </tr>
            );
        } else {
            var list = this.state.campaigns.map((campaign, key) => {
                return (
                    <tr key={key}>
                        <td>
                            <i className="fa fa-rocket"></i>
                        </td>
                        <td>{campaign.name}</td>
                        <td className="td-actions text-right">
                            <Link to={'/campaign/' + campaign._id} className="btn btn-raised btn-xs btn-primary"> <i className="fa fa-eye"></i></Link>
                            <Link to={'/campaign-add/' + campaign._id} className="btn btn-raised btn-xs btn-success"> <i className="fa fa-plus"></i></Link>
                        </td>
                    </tr>
                );
            });
        }


        return (
            <section id="content">
                <div className="page page-forms-common">
                    <div className="bg-light lter b-b wrapper-md mb-10">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <h1 className="font-thin h3 m-0 text-primary">Campanhas</h1>
                                <Link to="/campaign-new"><small className="text-muted text-default">Criar nova campanha</small></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <section className="boxs">
                                <div className="boxs-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Nome</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>{list}</tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Campaign;
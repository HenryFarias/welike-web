import React from 'react';
import Map from './services/GoogleMaps';
import MapModal from './campaign/MapModal';
import Service from '../services/Campaign'

class CampaignNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        var isOpen = !this.state.isOpen

        this.setState({
            isOpen: isOpen
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.refs.name.value) {
            swal('', 'Informe o nome da campanha ;)');
            return false;
        }

        Service.create(this.refs ,(response) => {
            swal(response.msg, '', response.status).then(() => {
                this.props.history.push('/campaigns')
            })
        })
    }

    render() {
        return (
            <section id="content">
                <div className="page page-forms-common">
                    <div className="bg-light lter b-b wrapper-md mb-10">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <h1 className="font-thin h3 m-0 text-primary">Criar Campanha</h1>
                                <small>Preencha todos os campos e obtenha melhores resultados</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <section className="boxs">
                                <form role="form" onSubmit={this.handleSubmit}>
                                    <div className="boxs-body">
                                        <div className="row">
                                            <div className="col-md-4 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <label>Nome</label>
                                                    <input type="text" ref="name" className="form-control" />
                                                    <span className="material-input"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <label>Localização</label>
                                                    <input type="text" ref="location" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <label>Raio em Km</label>
                                                    <input type="number" ref="radius" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <a className="btn btn-raised btn-primary" onClick={this.toggleModal.bind(this)}>Mapa</a>
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="row">
                                            <div className="col-md-2 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <label>Min. Seguidores</label>
                                                    <input type="number" ref="min_followers" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <label>Max. Seguidores</label>
                                                    <input type="number" ref="max_followers" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-xs-12">
                                                <div className="form-group is-empty">
                                                    <label>Nº de Influenciadores por Referência</label>
                                                    <input type="number" ref="amount_influencers" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="boxs-footer text-right bg-tr-black lter dvd dvd-top">
                                        <button type="submit" className="btn btn-raised btn-primary">Salvar</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                <MapModal isOpen={this.state.isOpen} toggleModal={this.toggleModal} map={<Map location={this.refs.location} radius={this.refs.radius}/>} />
            </section>
        );
    }

}

export default CampaignNew;
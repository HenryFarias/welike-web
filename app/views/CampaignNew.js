import React from 'react';
import Map from './services/GoogleMaps';
import MapModal from './campaign/MapModal';
import Service from '../services/Campaign';
import { Button, Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CampaignNew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    toggleModal = () => {
        let isOpen = !this.state.isOpen;

        this.setState({
            isOpen: isOpen
        })
    };

    handleSubmit = (e) => {
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
    };

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
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md={6} xs={6}>
                                <Form.Group controlId="formGroupName">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control ref={'name'} type="text" />
                                </Form.Group>
                            </Col>
                            <Col md={6} xs={6}>
                                <Form.Group controlId="formGroupPlataforma">
                                    <Form.Label>Plataforma</Form.Label>
                                    <Form.Control  ref="plataforma" as="select">
                                        <option>Todas</option>
                                        <option>Instagram</option>
                                        <option>Twitter</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5} xs={5}>
                                <Form.Group controlId="formGroupLocalizacao">
                                    <Form.Label>Localização</Form.Label>
                                    <Form.Control ref="location" type="text" />
                                </Form.Group>
                            </Col>
                            <Col md={5} xs={5}>
                                <Form.Group controlId="formGroupRaio">
                                    <Form.Label>Raio em Km</Form.Label>
                                    <Form.Control ref="radius" type="number" />
                                </Form.Group>
                            </Col>
                            <Col md={2} xs={2}>
                                <Form.Group controlId="formGroupMapa">
                                    <Button onClick={this.toggleModal} className={'btn-raised'} type="button">Mapa</Button>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} xs={4}>
                                <Form.Group controlId="formGroupMinSeguidores">
                                    <Form.Label>Min. Seguidores</Form.Label>
                                    <Form.Control ref={'min_followers'} type="number" />
                                </Form.Group>
                            </Col>
                            <Col md={4} xs={4}>
                                <Form.Group controlId="formGroupMaxSeguidores">
                                    <Form.Label>Max. Seguidores</Form.Label>
                                    <Form.Control ref={'max_followers'} type="number" />
                                </Form.Group>
                            </Col>
                            <Col md={4} xs={4}>
                                <Form.Group controlId="formGroupInflucenciadoresPorReferencia">
                                    <Form.Label>Nº de Influenciadores por Referência</Form.Label>
                                    <Form.Control ref={'amount_influencers'} type="number" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} xs={12}>
                                <Form.Group controlId="formGroupReference">
                                    <Form.Label>Referências (separados por ponto e vírgula)</Form.Label>
                                    <Form.Control ref="reference" type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button className={'btn-raised'} type="submit">Salvar</Button>
                    </Form>
                </div>
                <MapModal isOpen={this.state.isOpen} toggleModal={this.toggleModal} map={<Map location={this.refs.location} radius={this.refs.radius}/>} />
            </section>
        );
    }

}

export default CampaignNew;
import React from 'react';
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';
import CampaignList from './CampaignList';
import Service from '../../services/Campaign';

class ReferenceModal extends React.Component {
    constructor(props) {
        super(props);

        this.addReference = this.addReference.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            activeKey: 1,
            campaigns: [],
        };
    }

    componentDidMount() {
        this.listCampaigns();
    }

    handleSubmit(e) {
        e.preventDefault();      
        
        Service.create(this.refs, (response) => {
            if(response.error) {
                swal('', response.error, response.status);
                return;
            }

            // Success message
            swal('Ok!', 'Created successfully', 'success');

            // Change tab to list of campaigns
            this.setState({ activeKey : 1});

            // Clear campaign form
            //Form.clear(this.refs);

            // Update list of campaigns
            this.listCampaigns();
        })
    }

    addReference(campaign) {
        Service.createReference(this.props.reference, campaign._id, (res) => {
            swal(res.msg, '', res.status);
            this.props.toggleModal();
        });
    }

    listCampaigns() {
        Service.list((response) => {          
            // if(response.data.error) {
            //     swal('', 'Ocorreu um erro ao tentar pesquisar. error: ' + response.error, 'error');
            //     return;
            // }
            this.setState({ campaigns : response });
        });
    }

    render() {
        if (!this.props.reference) {
            return (null);
        }
        return (
            <div>
                <Modal bsSize="large" show={this.props.isOpen} onHide={this.props.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Save Reference</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CampaignList campaigns={this.state.campaigns} addReference={this.addReference} />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ReferenceModal;
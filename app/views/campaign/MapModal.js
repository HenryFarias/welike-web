import React from 'react';
import { Modal, Button, Tabs, Tab } from 'react-bootstrap';

class MapModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.isOpen);
        return (
            <div>
                <Modal size={'lg'} show={this.props.isOpen} onHide={this.props.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Mapa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.map}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default MapModal;
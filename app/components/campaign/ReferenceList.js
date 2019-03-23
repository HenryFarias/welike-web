import React from 'react';
import ReferenceModal from './ReferenceModal';

class ReferenceList extends React.Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.setSelectedReference = this.setSelectedReference.bind(this);

        this.state = {
            isOpen: false,
            reference: null,
        };
    }

    setSelectedReference(reference) {
        this.setState({
            reference: reference
        });
        this.toggleModal();
    }

    toggleModal() {
        var isOpen = !this.state.isOpen;
        if(!isOpen) {
            this.setState({
                reference: null
            });
        }
        this.setState({
            isOpen: isOpen
        });
    };

    render() {
        if (!this.props.referenceList) {
            return (null);
        }
        if (!this.props.referenceList.length) {
            return (
                <h5>A pesquisa realizada não trouxe nenhum resultado.</h5>
            );
        }
        var list = this.props.referenceList.map((reference, key) => {
            return (
                <div key={key} className="row">
                    <div className="col-md-12">
                        <section className="boxs">
                            <div className="boxs-header dvd dvd-btm">
                                <div className="row">
                                    <div className="col-md-1">
                                        <img className="img-circle" src={reference.picture} />
                                    </div>
                                    <div className="col-md-9">
                                        <a href={'http://www.twitter.com/' + reference.username} target="_blank">{reference.name + '(@' + reference.username + ')'}</a>
                                        <h6 className="text-muted">{reference.tweets + ' tweets, ' + reference.followers + ' followers, following ' + reference.friends}</h6>
                                        <p>{reference.text}</p>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <button className="btn btn-raised btn-primary" onClick={this.setSelectedReference.bind(this, reference)}>ADD</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        });
        return (
            <div id="hashList">
                {list}
                <ReferenceModal reference={this.state.reference} isOpen={this.state.isOpen} toggleModal={this.toggleModal} />
            </div>
        );
    }
}
export default ReferenceList;
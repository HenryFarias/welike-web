import React from 'react';
import Form from '../../helpers/Form';
import Service from '../../services/Campaign';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.refs.hashtags.value) {
            swal('', 'Faltou dizer o que você gostaria de pesquisar ;)');
            return false;
        }
        
        Service.search(this.refs.hashtags.value, this.refs.location.value, this.refs.radius.value + 'km' ,(response) => {
            this.props.updateReferenceList(response);
        })
    }

    render() {
        return (
            <section className="boxs">
                <form role="form" onSubmit={this.handleSubmit}>
                    <div className="boxs-body">
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="form-group is-empty">
                                    <label>Hashtags</label>
                                    <input type="text" ref="hashtags" className="form-control" placeholder="Required field" />
                                    <span className="material-input"></span>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="form-group is-empty">
                                    <label>Location</label>
                                    <input type="text" ref="location" className="form-control"/>
                                    <span className="material-input"></span>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="form-group is-empty">
                                    <label>Radius in Km</label>
                                    <input type="text" ref="radius" className="form-control"/>
                                    <span className="material-input"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="boxs-footer text-right bg-tr-black lter dvd dvd-top">
                        <button type="submit" className="btn btn-raised btn-primary">Search</button>
                    </div>
                </form>
            </section>
        );
    }

}

export default Search;
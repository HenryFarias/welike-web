import React from 'react';
import ReferenceList from './ReferenceList';
import Search from './Search';

class Campaign extends React.Component {
    constructor(props) {
        super(props);

        this.updateReferenceList = this.updateReferenceList.bind(this);

        this.state = {
            referenceList: null,
        };
    }

    updateReferenceList(list) {
        this.setState({referenceList : list});
    }

    render() {
        return (
            <section id="content">
                <div className="page page-forms-common"> 
                    <div className="bg-light lter b-b wrapper-md mb-10">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12">
                                <h1 className="font-thin h3 m-0">Campaign</h1>
                                <small className="text-muted">Build your campaign</small> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Search updateReferenceList={this.updateReferenceList} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">                            
                            <ReferenceList referenceList={this.state.referenceList} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Campaign;
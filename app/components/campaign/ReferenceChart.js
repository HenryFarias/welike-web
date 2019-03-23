import React from 'react';

class ReferenceChart extends React.Component {

    loadChart(references, influencers, campaign_id) {
        var nodes = []
        var edges = []
        references.forEach((element, key) => {
            nodes.push({
                id: element.username + '*ref',
                value: element.followers,
                shape: 'circularImage',
                borderWidth: 5,
                color: '#e64a67',
                font: { strokeWidth: 1, strokeColor: '333' },
                image: element.picture,
                label: '@' + element.username,
                title: 'Followers: ' + element.followers + '<br>' + 'Friends: ' + element.friends + '<br>' + 'Name: ' + element.name,
                x: -key * 100,
                y: key
            });

            if (influencers[element.username]) {
                influencers[element.username].forEach((influencer, keyInf) => {
                    nodes.push({
                        id: influencer.username + '*inf*' + element.username,
                        value: influencer.followers,
                        shape: 'circularImage',
                        font: { strokeWidth: 1, strokeColor: '333' },
                        image: influencer.picture,
                        label: '@' + influencer.username,
                        title: 'Followers: ' + influencer.followers + '<br>' + 'Friends: ' + influencer.friends + '<br>' + 'Name: ' + influencer.name,
                        x: keyInf,
                        y: -keyInf * 100
                    });

                    edges.push({
                        from: influencer.username + '*inf*' + element.username,
                        to: element.username + '*ref',
                        color: '#fff',
                        value: influencer.followers
                    });



                }, this);
            }

        }, this);

        var data = { nodes: nodes, edges: edges }
        var options = {
            nodes: { borderWidth: 4, size: 300, color: { border: '#222222', background: '#343340' }, font: { color: '#eeeeee' } },
            edges: { color: '#009D91' }
            // physics: {
            //     barnesHut: {
            //         gravitationalConstant: -80000,
            //         centralGravity: 10,
            //         avoidOverlap: 0.01
            //     },
            //     maxVelocity: 50,
            //     minVelocity: 10,
            //     timestep: 1
            // }
        }

        var network = new vis.Network(document.getElementById('mynetwork'), data, options);

        network.on("doubleClick", function (params) {
            params.event = "[original event]"
            var res = []
            if (params.nodes) {
                res = params.nodes[0].split("*")
            }
            window.open("http://www.twitter.com/" + res[0])
        });
    }

    componentDidMount() {
        this.loadChart(this.props.references, this.props.influencers, this.props.campaign_id)

    }

    componentWillReceiveProps(newProps) {
        this.loadChart(newProps.references, newProps.influencers, newProps.campaign_id)
    }

    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                    <section className="boxs">
                        <div className="boxs-header dvd dvd-btm">
                            <h1 className="custom-font">Gráfico Network</h1>
                        </div>
                        <div className="boxs-body">
                            <div className="row">
                                <div id="networkChart" className="col-sm-12">
                                    <div id="mynetwork"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ReferenceChart;
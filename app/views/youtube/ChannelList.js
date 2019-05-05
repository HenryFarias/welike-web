import React from 'react';

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (!this.props.channels.length) {
            return (null)
        }
        if (this.props.channels.length <= 0) {
            return (
                <h5>A pesquisa realizada não trouxe nenhum resultado.</h5>
            )
        }

        var list = this.props.channels.map((channel, key) => {
            return (
                <div className="col-md-2" key={key}>
                    <section className="boxs boxs-simple">
                        <div className="profile-header">
                            <div className="profile_info">
                                <div className="profile-image">
                                    <img className="img-circle" height="100px" width="100px" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} src={channel.snippet.thumbnails.high.url} alt="" />
                                </div>
                                <a href={"https://youtube.com/" + channel.snippet.customUrl}><h4 className="mb-0" align="center">{channel.snippet.title}</h4></a>
                            </div>
                        </div>
                    </section>
                </div>
            )
        })
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ChannelList;
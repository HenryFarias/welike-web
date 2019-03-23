import React from 'react'
import Form from '../../helpers/Form'
import Service from '../../services/Youtube'
import ChannelList from './ChannelList'
import index from 'axios'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            categories: [],
            description: '',
            channels: []
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const refs = this.refs
        var search = ''

        for (const key in refs) {
            search = '&' + key + '=' + refs[key].value
        }

        let ids = []
        Service.search(search, (response) => {
            response.items.forEach((element, index) => {
                ids.push(element.snippet.channelId)
            })
            Service.channel(ids, (channels) => {
                this.setState({
                    channels: channels
                })

                console.log(channels)
            })

        })
    }

    getChannel(id, res) {
        Service.channel(id, (channel) => {
            res(channel)
        })
    }

    update(e) {
        console.log(e)
        this.setState({ description: e.target.value })
    }

    componentDidMount() {
        Service.videoCategories((res) => {
            this.setState({ categories: res })
        })
    }

    render() {
        var { categories } = this.state
        categories = categories.map((category, key) => { return <option key={key} value={category.id}>{category.snippet.title}</option> })
        return (
            <div>
                <section className="boxs">
                    <form role="form" onSubmit={this.handleSubmit}>
                        <div className="boxs-body">
                            <div className="row">
                                <div className="col-md-3 col-xs-12">
                                    <div className="form-group is-empty">
                                        <label>Categorias do Youtube</label>
                                        <select className="form-control" ref="videoCategoryId">
                                            {categories}
                                        </select>
                                        <span className="material-input"></span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="form-group is-empty">
                                        <label>Descrição </label>
                                        <input type="text" onChange={this.update.bind(this)} className="form-control" />
                                        <span className="material-input"></span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="form-group is-empty">
                                        <label>Publicado depois de</label>
                                        <input type="date" onChange={this.update.bind(this)} className="form-control" />
                                        <span className="material-input"></span>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-12">
                                    <div className="form-group is-empty">
                                        <label>Publicado antes de</label>
                                        <input type="date" onChange={this.update.bind(this)} className="form-control" />
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
                <ChannelList channels={this.state.channels} />
            </div>
        );
    }

}

export default Search
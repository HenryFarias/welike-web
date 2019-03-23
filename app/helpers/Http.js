import axios from 'axios'
import Form from './Form'
import Session from './Session'
import Config from  '../config'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.baseURL = Config.server

const Http = {
    get: (url, success) => {
        axios.get(url).then((response) => {
            success(response.data)
        }).catch((err) => {
            error(err.response)
        })
    },

    post: (url, data, success) => {
        axios.post(url, data).then((response) => {
            success(response.data)
        }).catch((err) => {
            error(err.response)
        })
    },

    postForm: (url, data, success) => {
        axios.post(url, Form.post(data)).then((response) => {
            success(response.data)
        }).catch((err) => {
            error(err.response)
        })
    }
}

function error(res) {
    if (res.status == 401) {
        Session.destroy('token')
        swal(res.data.msg, '', res.data.status).then(() => {
            window.location.href = '/'
        })
    } else {
        swal(res.data.msg, '', res.data.status).then(() => {
            console.log('res')
        })
    }
}

export default Http;
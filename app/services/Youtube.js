import axios from 'axios'
var youtubeApi = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: { 'Authorization': 'AIzaSyDg7Sm6vwkKe5yqbbwo0X2OMg5DMvgIlY4' }
})

const Youtube = {

    search: (search, success) => {
        youtubeApi.get('search?type=video' + search).then((response) => {
            success(response.data)
        }).catch((err) => {
            error(err.response)
        })
    },

    channel: (id, success) => {
        youtubeApi.get('channel/' + id).then((response) => {
            success(response.data)
        }).catch((err) => {
            error(err.response)
        })
    },

    videoCategories: (success) => {
        youtubeApi.get('videoCategories?regionCode=BR').then((response) => {
            success(response.data)
        }).catch((err) => {
            error(err.response)
        })
    },

}

function error(res) {
    swal(res.data.msg, '', res.data.status)
}

export default Youtube;
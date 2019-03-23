import Http from '../helpers/Http'

const Campaign = {
    find: (campaign_id, success) => {
        Http.get('campaign/' + campaign_id, (response) => {
            success(response)
        })
    },
    list: (success) => {
        Http.get('campaign', (response) => {
            success(response)
        })
    },
    listReference: (campaign_id, success) => {
        Http.get('campaign/' + campaign_id + '/reference', (response) => {
            success(response)
        })
    },
    listInfluencer: (campaign_id, success) => {
        Http.get('campaign/' + campaign_id + '/influencer', (response) => {
            success(response)
        })
    },
    findInfluencer: (campaign_id, success) => {
        Http.get('campaign/' + campaign_id + '/findInfluencer', (response) => {
            success(response)
        })
    },
    search: (keyword, location, raio, success) => {
        Http.post('campaign/search', { hashtags: keyword, location: location, raio: raio }, (response) => {
            success(response)
        })
    },
    createReference: (reference, campaign_id, success) => {
        Http.post('campaignUser', { user: reference, campaign_id: campaign_id }, (response) => {
            success(response)
        })
    },
    create: (campaign, success) => {
        Http.postForm('campaign', campaign, (response) => {
            success(response)
        })
    }
}

export default Campaign;

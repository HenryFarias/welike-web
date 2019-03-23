import Http from '../helpers/Http'

const Dashboard = {
    list: (success) => {
        Http.get('dashboard', (response) => {
            success(response)
        })
    }
}

export default Dashboard;

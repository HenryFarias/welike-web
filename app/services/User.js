import Http from '../helpers/Http'
import Session from '../helpers/Session'

const User = {
    login: (data) => {
        Http.postForm('login', data, (response) => {
            Session.set(response)
            window.location.reload()
        })
    }
}

export default User;

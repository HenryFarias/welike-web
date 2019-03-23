const Session = {
    set: (data) => {
        return localStorage.setItem('token', data.token)
    },

    get: (item) => {
        return localStorage.getItem(item)
    },

    destroy: (item) => {
        return localStorage.removeItem(item)
    }
}

export default Session;

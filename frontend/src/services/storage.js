const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}

const removeUser = () => {
    localStorage.removeItem('user')
}

export const storageService = {
    saveUser, getUser, removeUser
}
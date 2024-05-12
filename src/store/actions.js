import axios from 'axios'
export const getProductInfo = ({commit}) => {
    axios.get('https://gorest.co.in/public/v2/users')
    .then(res => {
        commit('GET_PRO_INFO', res.data)
    })
}

export const getProductById = ({commit}, proId) => {
    axios.get(`https://gorest.co.in/public/v2/users/${proId}`)
    .then(res => {
        commit('GET_BY_ID', res.data)
    })
}

export const addProductToCard = ({commit}, {product, qty}) => {
    commit('ADD_TO_CARD', {product, qty})
    // axios.post('https://gorest.co.in/public/v2/users', {pro_id: product.id, qty})
}

export const removeItem = ({commit}, user) => {
    commit('REMOVE_USER', user)
}

export const clearItem = ({commit}) => {
    commit('CLEAR_USER')
}
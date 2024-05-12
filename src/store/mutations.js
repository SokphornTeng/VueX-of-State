
export const GET_PRO_INFO = (state, productInfo) => {
    state.productInfo = productInfo
}
export const GET_BY_ID = (state, productById) => {
    state.productById = productById
}

export const ADD_TO_CARD = (state, {product, qty}) => {
    let proInCart = state.cart.find(item => {
        return item.product.id === product.id
    })
    if(proInCart){
        return proInCart.qty += qty
    }
    state.cart.push({
        product,
        qty
    })
}

export const REMOVE_USER = (state, user) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== user.id
    })
}

export const CLEAR_USER = (state) => {
    state.cart = []
}
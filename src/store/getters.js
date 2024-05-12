
export const countItemInCart = (state) => {
    return state.cart.length
}

export const totalItem = (state) => {
    let total = 0;
    state.cart.forEach(element => {
        total +=  element.qty
    });
    return total;
}
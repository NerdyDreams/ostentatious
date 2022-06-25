// For adding Item to cart
export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payload: product
    }
}

// For Deleting Item from cart
export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}

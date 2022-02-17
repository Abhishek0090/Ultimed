export const removeItem = (id)=>{
    return dispatch({
      type: "REMOVE_ITEM",
      payload : id,
    })
}

//clear the cart
export const clearCart = ()=>{
  return dispatch({
    type : "CLEAR_CART"
  })
}

export const increment = (id)=>{
  return dispatch({
    type : "INC_ITEM",
    payload : id
  })
}

export const decrement = (id)=>{
  return dispatch({
    type : "DEC_ITEM",
    payload : id
  })
}
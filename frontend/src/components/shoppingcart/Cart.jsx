import React from 'react';
import './css/cart.css'

const Cart = (props) => {

    const {id,title,description,price,quantity,img} = props;

    // const {removeItem,increment,decrement} = useContext(CartContext);

  return (
          <>

    <div className="items-info">
                <div className="product-img">
                  <img src={img} alt="" />
                </div>
                <div className="title">
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className="add-minus-quantity">
                  <i class="fas fa-minus minus"></i>
                  <input type="text" placeholder={quantity} />
                  <i class="fas fa-plus plus"></i>
                </div>

                <div className="price">
                  <h3>{price}rs</h3>
                </div>

                <div className="remove-item">
                  <i className="fas fa-trash-alt remove"></i>
                </div>
              <hr />
              </div>
      </>
  )

};

export default Cart;

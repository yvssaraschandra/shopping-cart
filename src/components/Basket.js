import React, { Component } from 'react'
import util from '../util'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="alert text-center container-border">
                <b>Shopping Cart</b>
                <hr />
                {cartItems.length === 0 ? (
                    "Basket is empty"
                ) : (
                        <div>
                            You have {cartItems.length} items in the basket. <hr />
                        </div>
                    )}
                {cartItems.length > 0 &&
                    <div>
                        {cartItems.map(item =>
                            <div>

                                <a href={`#${item.id}`} onClick={(e) => this.props.handleRemoveFromCart(e, item)}>
                                    <img src={`products/${item.sku}_2.jpg`} alt={item.title} class="center" />

                                    <p>{item.title}</p>
                                </a>
                                <b>Quantity : {item.count / 2}</b>
                                <br />
                                <b>Price : {util.formatCurrency(item.price * (item.count / 2))}</b>
                                <br />
                                <button className="btn btn-primary"
                                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}
                                >Remove</button>
                                <hr />

                            </div>
                        )}
                        <b>Sub Total : {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * (c.count / 2), 0))} </b>
                        <br />
                        <b>GST(5%) : {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * (c.count / 2)) * 0.05, 0))} </b>
                        <br />
                        <b>Total : {util.formatCurrency(cartItems.reduce((a, c) => a + c.price * (c.count / 2) + (a + c.price * (c.count / 2)) * 0.05, 0))} </b>
                        <br />
                        <br />
                        <button className="btn btn-primary" onClick={() => alert("Checkout needs to be implemented")}>Checkout</button>
                        <hr />
                    </div>
                }
            </div>
        )
    }
}

import React from "react";
import './ShoeItem.css';

const ShoeItem = (props) => {
    const listSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {
            name: props.name,
            description: props.description,
            price: props.price,
            // l: props.l,
            // m: props.m,
            // s: props.s
        };
        props.onAddToCart(formData);
    };
    return(
        <form onSubmit={listSubmitHandler}>
            <div className="item-card">
                <div className="shoelistitem">
                    <span value={props.name}>{props.name}</span>
                </div>
                <div className="shoelistitem">
                    <span value={props.description}>{props.description}</span>
                </div>
                <div className="shoelistitem">
                    <span value={props.price}>{props.price}</span>
                </div>
                <div  className="shoelistitem">
                    <button type="submit">Buy Large ({props.l})</button>
                </div>
                <div className="shoelistitem">
                    <button type="submit">Buy Medium ({props.m})</button>
                </div>
                <div className="shoelistitem">
                    <button type="submit">Buy Small ({props.m})</button>
                </div>
            </div>
        </form>
    )
}

export default ShoeItem;
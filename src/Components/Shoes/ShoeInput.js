import React, { useState } from "react";

import './ShoeInput.css';


const ShoeInput = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputprice, setInputPrice] = useState('');
    const [inputQuantityL, setInputQuantityL] = useState('');
    const [inputQuantityM, setInputQuantityM] = useState('');
    const [inputQuantityS, setInputQuantityS] = useState('');

    const nameChangeHandler=(event)=>{
        setInputName(event.target.value);
    }
    const descriptionChangeHandler=(event)=>{
        setInputDescription(event.target.value);
    }
    const priceChangeHandler=(event)=>{
        setInputPrice(event.target.value);
    }
    const quantityLChangehandler=(event)=>{
        setInputQuantityL(event.target.value);
    }
    const quantityMChangehandler=(event)=>{
        setInputQuantityM(event.target.value);
    }
    const quantitySChangehandler=(event)=>{
        setInputQuantityS(event.target.value);
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();

        const shoeData = {
            name: inputName,
            description: inputDescription,
            price: inputprice,
            l: inputQuantityL,
            m: inputQuantityM,
            s: inputQuantityS
        }

        props.onSaveShoeData(shoeData);
        console.log(shoeData);
        setInputName('');
        setInputDescription('');
        setInputPrice('');
        setInputQuantityL('');
        setInputQuantityM('');
        setInputQuantityS('');
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="shoe-card">
                <div className="shoe-input">
                    <div className="box">
                        <h3>Shoe Name</h3>
                    </div>
                    <div className="box">
                        <input type="text" value={inputName} onChange={nameChangeHandler}/>
                    </div>
                </div>
                <div className="shoe-input">
                    <div className="box">
                        <h3>Description</h3>
                    </div>
                    <div className="box">
                        <input type="text" value={inputDescription} onChange={descriptionChangeHandler} />
                    </div>
                </div>
                <div className="shoe-input">
                    <div className="box">
                        <h3>Price</h3>
                    </div>
                    <div className="box">
                        <input type="number" value={inputprice} onChange={priceChangeHandler}/>
                    </div>
                </div>
                <div className="shoe-input-quantity">
                    <div className="box">
                        <h3>Quantity Available</h3>
                    </div>
                    <div className="quantity-box">
                        <span>
                            <label id="l">L</label>
                            <input id="l" type="text" value={inputQuantityL} onChange={quantityLChangehandler}/>
                        </span>
                        <span>
                            <label id="m">M</label>
                            <input id="m" type="text" value={inputQuantityM} onChange={quantityMChangehandler}/>
                        </span>
                        <span>
                            <label id="s">S</label>
                            <input id="s" type="text" value={inputQuantityS} onChange={quantitySChangehandler}/>
                        </span>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">Add Item</button>
                </div>
            </div>
        </form>
    )
}

export default ShoeInput;
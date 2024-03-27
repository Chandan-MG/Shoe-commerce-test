import React from "react";
import ShoeItem from "./ShoeItem";
import Card from "../UI/Card";

const ShoesList = (props) => {
    const shoeList = props.items.map((shoe) => (
        <ShoeItem
            key={shoe.id}
            id={shoe.id}
            name={shoe.name}
            description={shoe.description}
            price={shoe.price}
            l={shoe.l}
            m={shoe.m}
            s={shoe.s}
            onAddToCart={props.onAddToCart}
        />
    ))

    return(
        <section className="list">
            <Card>
                <ul>
                    {shoeList}
                </ul>
            </Card>
        </section>
    )
}

export default ShoesList;

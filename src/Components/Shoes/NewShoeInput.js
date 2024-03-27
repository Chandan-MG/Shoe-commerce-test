import React from "react";
import ShoeInput from "./ShoeInput";

const NewShoeInput = (props) => {
    const savedShoeHandler = (shoes) =>{
        const shoesData = {
            ...shoes,
            id : Math.random().toString()
        }
        props.onAddShoes(shoesData);
    }
    return(
        <ShoeInput onSaveShoeData={savedShoeHandler} />
    )
}

export default NewShoeInput;
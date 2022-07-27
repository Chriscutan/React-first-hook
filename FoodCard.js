import React, {useState} from "react";

function FoodCard(props){
    const [order, orderCount] = useState('Order Now');
    const [item, itemCount] = useState(0);
    function placeOrder(){
        itemCount(item + 1);
        orderCount('Add Item ');
    }
    return(
        <div className="food-container">
            <div className="food-header">
                <img src={props.img} className="food-img"></img>
            </div>
            <p>{props.name}</p>
            <p>{props.des}</p>
            <p>Rs. {props.price}</p>
            <button className="btn" onClick={placeOrder}>{order} {item}</button>
        </div>
    );
}

export default FoodCard;
import React from "react";
import './ProductCard.css';
import clothes from "./data";

export default function ProductCard ({addToBasket}) {

    return (
        <div>
            <div className="product-block">
                {clothes.map((clothes) => (
                    <div className="product-card" key={clothes.id}>
                        <img className="card-img" src={"./games/" + clothes.image} alt="clothe" />
                        <strong><p className="card-price">{clothes.price} РУБ</p></strong>
                        <div className="card-footer">
                            <div className="card-info">
                                <p className="card-text">{clothes.brand}</p>
                                <p className="card-text">{clothes.name}</p>
                            </div>
                            <div className="card-button">
                                <button className="button-basket" onClick={() => addToBasket(clothes)}>В корзину</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

import React from "react";
import './ProductCard.css';
import games from "./data";

export default function ProductCard ({addToBasket}) {

    return (
        <div>
            <div style={{textAlign: 'center', fontSize:'35px', margin: '20px'}}>Список товаров:</div>
            <div className="product-block">
                {games.map((games) => (
                    <div className="product-card" key={games.id}>
                        <img className="card-img" src={"./games/" + games.image} alt="game" />
                        <div className="card-info-top">
                            <strong>
                                <p className="card-price">{games.price}&#8381;</p>
                            </strong>
                            <div className="card-button">
                                <button className="button-basket" onClick={() => addToBasket(games)}>В корзину</button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="card-info">
                                <p className="card-text">{games.name}</p>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

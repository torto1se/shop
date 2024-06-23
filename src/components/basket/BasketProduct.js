import React from "react";
import './BasketProduct.css';

export default function BasketProduct({ basket, deletFromBasket }) {

    const getTotalSum = () => {
        return basket.reduce((total, item) => total + item.count * item.price, 0);
    }

    return (
        <center>
            <div className="basket-block">
                <div className="left-basket-block">
                    <h2>Корзина</h2>
                    <div className="">
                        {basket.map((item, index) => (
                            <div key={index} className="basket-product-block">
                                <img className="basket-product-img" src={"./games/" + item.image} alt={item.name} />
                                <div className="basket-product-info">
                                    <div className="basket-product-text">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="basket-product-price">
                                        <p>{item.price} РУБ</p>
                                        <button className="basket-delete-button" onClick={() => deletFromBasket(item)}>Удалить</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right-basket-block">
                    <h3>Сумма заказа</h3>
                    <div className="basket-product-count">
                        <p>Количество товаров: </p>
                        <p>{basket.length}</p>
                    </div>
                    <div className="basket-all-sum">
                        <p>Итого:</p>
                        <p>{getTotalSum()}&#8381;</p>
                    </div>
                    <button className="basket-product-pay">Перейти к оформлению</button>
                </div>
            </div>
        </center>
    );
}

import Footer from "./components/Footer";
import React, { useState } from "react"
import BasketProduct from "./components/basket/BasketProduct";
import ProductCard from "./components/products/ProductCard";
import Header from "./components/Header";
import Main from "./components/Main";
import Questions from "./components/Questions";

export default function App() {
    const [tab, setTab] = useState("main");
    const [basket, setBasket] = useState([]);

    const addToBasket = (object) => {
        setBasket(changeBasket => [...changeBasket, object]);
    }

    const deletFromBasket = (object) => {
        setBasket(changeBasket => changeBasket.filter(item => item !== object));
    }

    return (<>
        <div className="wrapper">
            <Header active={tab} onChange={(current) => setTab(current)} />
            
            {tab === 'main' && (
                <>
                    <Main />
                </>
            )}

            {tab === 'products' && (
                <>
                    <center><ProductCard addToBasket={addToBasket}/></center>
                </>
            )}

            {tab === 'bucket' &&(
                <>
                    <BasketProduct basket={basket} deletFromBasket={deletFromBasket} />
                </>
            )}
            {tab === 'questions' &&(
                <>
                    <Questions />
                </>
            )}
            
        </div>
        <Footer active={tab} onChange={(current) => setTab(current)} />
        </>
    )
}

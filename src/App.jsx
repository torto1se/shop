// import React, { useState } from "react";
// import Header from "./components/Header";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";
// import ProductCard from "./components/products/ProductCard";
// import BasketProduct from "./components/basket/BasketProduct";

// export default function App() {
//     const [basket, setBasket] = useState([]);

//     const addToBasket = (object) => {
//         setBasket(changeBasket => [...changeBasket, object]);
//     }

//     const deletFromBasket = (object) => {
//         setBasket(changeBasket => changeBasket.filter(item => item !== object));
//     }
     
//     return (
//       <div className="wrapper">
//         <Header />
//         <Routes>
//             <Route path='/catalog' element={<ProductCard addToBasket={addToBasket} />} />
//             <Route path='/basket' element={<BasketProduct basket={basket} deletFromBasket={deletFromBasket} />} />
//             {/* <Route path='/q&a' element={} /> */}
//         </Routes>
//         <Footer />
//       </div>
//     )
// };

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

    return (
        <div className="wrapper">
            <Header active={tab} onChange={(current) => setTab(current)} />
            
            {tab === 'main' && (
                <>
                    <Main />
                    <Footer active={tab} onChange={(current) => setTab(current)} />
                </>
            )}

            {tab === 'products' && (
                <>
                    <center><ProductCard addToBasket={addToBasket}/></center>
                    <Footer active={tab} onChange={(current) => setTab(current)} />
                </>
            )}

            {tab === 'bucket' &&(
                <>
                    <BasketProduct basket={basket} deletFromBasket={deletFromBasket} />
                    <Footer active={tab} onChange={(current) => setTab(current)} />
                </>
            )}
            {tab === 'questions' &&(
                <>
                    <Questions />
                    <Footer active={tab} onChange={(current) => setTab(current)} />
                </>
            )}
        </div>
    )
}

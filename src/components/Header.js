import React from 'react';
// import { Routes, Route, Link } from "react-router-dom";
// import BasketProduct from './basket/BasketProduct';
// import ProductCard from './products/ProductCard';

export default function Header( {active, onChange}) {
  return (
    <header>
        <div>
            <span className='logo'>Магазин игр</span> 
            <ul className='nav'>
              <li><button className="route-buttons" isActive={active === 'main'} onClick={() => onChange('main')}>Главная</button></li>
              <li><button className="route-buttons" isActive={active === 'products'} onClick={() => onChange('products')}>Каталог</button></li>
              <li><button className="profile-buttons" isActive={active === 'bucket'} onClick={() => onChange('bucket')}>Корзина</button></li>
                {/* <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/basket">Корзина</Link></li>
                <li><Link to="/q&a">Вопрос-ответ</Link></li> */}
            </ul>
        </div>
        <div className='presentation'></div>
        {/* <Routes>
            <Route path='/catalog' element={<ProductCard />} />
            <Route path='/basket' element={<BasketProduct />} />
            <Route path='/q&a' element={} />
        </Routes> */}
    </header>
  )
}

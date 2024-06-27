import React from 'react';

export default function Header( {active, onChange}) {
  return (
    <header>
        <div className='nav_menu'>
            <span className='logo'>
              <img className='logo_img' src={'../games/white-logo.png'} alt='logo' isActive={active === 'main'} onClick={() => onChange('main')} />
            </span> 
            <ul className='nav'>
              <li><button className="route-buttons" isActive={active === 'main'} onClick={() => onChange('main')}>Главная</button></li>
              <li><button className="route-buttons" isActive={active === 'products'} onClick={() => onChange('products')}>Каталог</button></li>
              <li><button className="profile-buttons" isActive={active === 'bucket'} onClick={() => onChange('bucket')}>Корзина</button></li>
              <li><button className="profile-buttons" isActive={active === 'questions'} onClick={() => onChange('questions')}>FAQ</button></li>
            </ul>
        </div>
    </header>
  )
}

import React from 'react'

export default function Footer({active, onChange}) {
  return (
    <footer>
      <div className='footer-logo'>
        <span className='logo'>
          <img className='logo_img' src={'../games/white-logo.png'} alt='logo' isActive={active === 'main'} onClick={() => onChange('main')} />
        </span> 
        <span style={{marginTop: '10px'}}>Все права защищены &copy; 2024</span>
      </div>
      <div style={{marginLeft:'50px'}}>
        <ul style={{fontWeight: '300', fontSize: '10px', fontFamily: 'inherit'}}>
          <li><button className="route-buttons" isActive={active === 'main'} onClick={() => onChange('main')} style={{fontWeight: '300', fontSize: '15px', marginBottom:'3px', fontFamily: 'inherit'}}>Главная</button></li>
          <li><button className="route-buttons" isActive={active === 'products'} onClick={() => onChange('products')} style={{fontWeight: '300', fontSize: '15px', marginBottom:'3px', fontFamily: 'inherit'}}>Каталог</button></li>
          <li><button className="profile-buttons" isActive={active === 'bucket'} onClick={() => onChange('bucket')} style={{fontWeight: '300', fontSize: '15px', marginBottom:'3px', fontFamily: 'inherit'}}>Корзина</button></li>
          <li><button className="profile-buttons" isActive={active === 'questions'} onClick={() => onChange('questions')} style={{fontWeight: '300', fontSize: '15px', fontFamily: 'inherit'}}>FAQ</button></li>
        </ul>
      </div>
    </footer>
  )
}

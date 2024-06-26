import React from 'react'

export default function Footer({active, onChange}) {
  return (
    <footer>
        Все права защищены &copy;
        <span className='logo'>
              <img className='logo_img' src={'../games/log.png'} alt='logo' isActive={active === 'main'} onClick={() => onChange('main')} />
            </span> 
    </footer>
  )
}

import React from 'react'
import './style.css'
import logo from '../media/image/logo.png'

const Nav = () => {
  return (
    <nav>
      <div className='nav__left'>
        <img src={logo} alt="logo" className='nav__logo' />
        <ul>
            <li>Về Chúng Tôi</li>
            <li>Thông tin hệ thống</li>
        </ul>
      </div>
      <div className='nav__right'>
        <ul>
            <li>Đăng ký</li>
            <li>Đăng nhập</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav

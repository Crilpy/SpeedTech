import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = ()=> {
      navigate('/login')
      localStorage.removeItem('token')
      setToken('')
      setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/'><img src={assets.logo} className='w-36' alt='' /></Link>

      {/* FIXED: Changed <ui> to <ul> */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Начало</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/parts' className='flex flex-col items-center gap-1'>
          <p>Части</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>За нас</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Контакти</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img
          onClick={() => {
            if (window.location.pathname !== '/parts') {
              navigate('/parts');
              setTimeout(() => setShowSearch(true), 100); // delay to allow navigation
            } else {
              setShowSearch(true);
            }
          }}
          src={assets.search_icon}
          className='w-5 cursor-pointer'
          alt=""
        />
        <div className='group relative'>
          <img onClick={()=> token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt='' />
          {/*---------- Dropdown Menu ----------*/}
          {token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p onClick={() => navigate('/profile')} className='cursor-pointer hover:text-black'>Профил</p>
              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Поръчки</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Излизане</p>
            </div>
          </div>}
        </div>

        {/* FIXED: No need to import 'Link' separately */}
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='' />
          <p className='absolute right-[-4px] bottom-[-4px] flex items-center justify-center w-4 h-4 bg-black text-white rounded-full text-[8px] text-center leading-none'>
            {getCartCount()}
          </p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>
      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Назад</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>НАЧАЛО</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/parts'>ЧАСТИ</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ЗА НАС</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>КОНТАКТИ</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

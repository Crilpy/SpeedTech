import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                SpeedTech е платформа, вдъхновена от любовта към автомобилите и високите технологии.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Компания</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Начало</li>
                    <li>За нас</li>
                    <li>Доставка</li>
                    <li>Политика за поверителност</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>Свържете се с нас</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+359 87 679 6070</li>
                    <li>contact@SpeedTech.com</li>
                </ul>
            </div>

        </div>

            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>© 2025 SpeedTech.com – Всички права запазени.</p>
            </div>

    </div>
  )
}

export default Footer
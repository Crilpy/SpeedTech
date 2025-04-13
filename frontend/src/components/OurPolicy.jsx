import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Политика За Лесен Обмен</p>
        <p className='text-gray-400'>Предлагаме безпроблемна политика за обмен</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7-Дневна Политика За Връщане</p>
        <p className='text-gray-400'>Предоставяме седемдневна политика за безплатно връщане</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Най-добро Обслужване На Клиенти</p>
        <p className='text-gray-400'>Предлагаме 24/7 обслужване на клиенти</p>
      </div>

    </div>
  )
}

export default OurPolicy
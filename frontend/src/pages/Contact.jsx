import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'КОНТАКТ'} text2={'С НАС'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Нашият магазин</p>
          <p className='text-gray-500'>
            Бул. Цар Борис III №138 <br /> Център, Пловдив, България
          </p>
          <p className='text-gray-500'>
            Тел: (+359) 876-796-070 <br /> Имейл: speedtech2020@gmail.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Кариери в SpeedTech</p>
          <p className='text-gray-500'>Научи повече за нашите екипи и свободни позиции.</p>
          <a
            href='https://www.jobs.bg/'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'
          >
            Виж свободни позиции
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

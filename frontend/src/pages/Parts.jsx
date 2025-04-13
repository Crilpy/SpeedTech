import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';



const Parts = () => {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [Category,setCategory] = useState([]);
  const [SubCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')


  const toggleCategory = (e) => {
    if(Category.includes(e.target.value)){
        setCategory(prev=> prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e)=> {
    const value = e.target.value; // Keep consistent casing
    if (SubCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
  
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }
  
    if (SubCategory.length > 0) {
      productsCopy = productsCopy.filter(item => SubCategory.includes(item.subCategory)); // FIX: Use lowercase `subCategory`
    }
  
    setFilterProducts(productsCopy);
  };

  const sortProduct = () =>{

    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high' :
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
        
      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
      applyFilter();
  },[Category,SubCategory,search,showSearch,products])

  useEffect(()=>{
      sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)}  className='my-2 text-xl flex items-center cursor-pointer gap-2'>Филтрирай по:
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Части</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Suspension'} onChange={toggleCategory}/> Окачване
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Exhaust'} onChange={toggleCategory}/> Изпускателна система
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Filter'} onChange={toggleCategory}/> Филтър
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Wheels'} onChange={toggleCategory}/> Джанти
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Steering Wheel'} onChange={toggleCategory}/> Волан
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Turbocharger'} onChange={toggleCategory}/> Турбокомпресор
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Supercharger'} onChange={toggleCategory}/> Суперчарджър
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Марки</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Acura'} onChange={toggleSubCategory}/> Acura
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mazda'} onChange={toggleSubCategory}/> Mazda
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Mitsubishi'} onChange={toggleSubCategory}/> Mitsubishi
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Nissan'} onChange={toggleSubCategory}/> Nissan
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Honda'} onChange={toggleSubCategory}/>  Honda
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Toyota'} onChange={toggleSubCategory}/> Toyota
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Subaru'} onChange={toggleSubCategory}/> Subaru
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Suzuki'} onChange={toggleSubCategory}/> Suzuki
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Lexus'} onChange={toggleSubCategory}/> Lexus
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Infiniti'} onChange={toggleSubCategory}/> Infiniti
            </p>
          </div>
        </div>
      </div>

      {/*Right Side*/}
      <div className='flex-1'>
        
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'PARTS'}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)}  className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavant">Най-подходящи</option>
            <option value="low-high">От ниска към висока цена</option>
            <option value="high-low">От висока към ниска цена</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image[0]}/>
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default Parts;

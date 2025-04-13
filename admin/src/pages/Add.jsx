import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e)=> {
    e.preventDefault();

    try {
      
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Качване на изображение</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Име на продукта</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Име' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Описание на продукта</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Описание' required/>
      </div>

      <div className='flex flex-xol sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Категория на продукта</p>
          <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option> </option>
            <option value="Suspension">Окачване</option>
            <option value="Exhaust">Изпускателна система</option>
            <option value="Filter">Филтър</option>
            <option value="Wheels">Джанти</option>
            <option value="Steering Wheel">Волан</option>
            <option value="Turbocharger">Турбокомпресор</option>
            <option value="Supercharger">Суперчарджър</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Марка</p>
          <select onChange={(e)=> setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option> </option>
            <option value="Acura">Acura</option>
            <option value="Mazda">Mazda</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Nissan">Nissan</option>
            <option value="Honda">Honda</option>
            <option value="Toyota">Toyota</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Lexus">Lexus</option>
            <option value="Infiniti">Infiniti</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Цена</p>
          <input onChange={(e)=> setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='100'/>
        </div>
      </div>

      <div>
        <p className='mb-2'>Размер</p>
        <div className='grid grid-cols-3 gap-3 w-full max-w-xl mx-auto'>
          <div onClick={()=>setSizes(prev => prev.includes("Small") ? prev.filter(item => item !== "Small") : [...prev,"Small"])}>
            <p className={`${sizes.includes("Small") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Small</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("Medium") ? prev.filter(item => item !== "Medium") : [...prev,"Medium"])}>
            <p className={`${sizes.includes("Medium") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Medium</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("Big") ? prev.filter(item => item !== "Big") : [...prev,"Big"])}>
            <p className={`${sizes.includes("Big") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Big</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("-10") ? prev.filter(item => item !== "-10") : [...prev,"-10"])}>
            <p className={`${sizes.includes("-10") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>-10</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("-20") ? prev.filter(item => item !== "-20") : [...prev,"-20"])}>
            <p className={`${sizes.includes("-20") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>-20</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("-30") ? prev.filter(item => item !== "-30") : [...prev,"-30"])}>
            <p className={`${sizes.includes("-30") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>-30</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("One pipe") ? prev.filter(item => item !== "One pipe") : [...prev,"One pipe"])}>
            <p className={`${sizes.includes("One pipe") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>One pipe</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("Two pipes") ? prev.filter(item => item !== "Two pipes") : [...prev,"Two pipes"])}>
            <p className={`${sizes.includes("Two pipes") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Two pipes</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("Four pipes") ? prev.filter(item => item !== "Four pipes") : [...prev,"Four pipes"])}>
            <p className={`${sizes.includes("Four pipes") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Four pipes</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("17") ? prev.filter(item => item !== "17") : [...prev,"17"])}>
            <p className={`${sizes.includes("17") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>17</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("18") ? prev.filter(item => item !== "18") : [...prev,"18"])}>
            <p className={`${sizes.includes("18") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>18</p>
          </div>

          <div onClick={()=>setSizes(prev => prev.includes("19") ? prev.filter(item => item !== "19") : [...prev,"19"])}>
            <p className={`${sizes.includes("19") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>19</p>
          </div>
          
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label className='cursor-pointer' htmlFor="bestseller">Добави към най-продаваните</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>Добави</button>

    </form>
  )
}

export default Add
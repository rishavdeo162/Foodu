import Nav from '../Components/Nav'
import { categoreis } from '../categorey'
import Card from '../Components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/usercontext'
import { ImCross } from "react-icons/im";
import Card2 from '../Components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import React, { useContext, useState, useEffect } from 'react';

const Home = () => {
  let {cate,setCate,input,showCart,setShowCart}=useContext(dataContext);
  useEffect(() => {
    document.title = "Foodu";
  }, []);

  function filter(categorey){
    if(categorey==="All"){
      setCate(food_items)
    }else{
    let newList =  food_items.filter((item)=>( item.food_category===categorey))
    setCate(newList)
    }
  }
  let items = useSelector(state=>state.cart)
  let subtotal = items.reduce((total, item)=>total+item.qty*item.price,0)
  let deliveryFree = 20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal + deliveryFree+taxes);
return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav/>
    
      {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
       {categoreis.map((item)=>{
        return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-300 cursor-pointer transition-all duration-200' onClick={()=>filter(item.name)}>
          {item.image}
        {item.name}
         </div>
})}
    

      </div>:null}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
      {cate.length>1?cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )): <div className='text-center text-2xl text-green-500 font-semibold pt-5'>No Dish Found</div>}
        
      </div>
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-lg p-5 transition-all flex flex-col items-center overflow-auto duration-500 ${showCart?"translate-x-0":"translate-x-full" }`}>
<header className='w-[100%] flex justify-between items-center'>
<span className='text-green-500 text-[18px] font-bold'>Order items</span>
<ImCross className='text-green-500 cursor-pointer hover:text-gray-600' onClick={()=>setShowCart(false)}/>
</header>
{items.length>0?<>

<div className='w-full mt-8 flex flex-col gap-5'>
{items.map((item)=>(
  <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />

  
))}
</div>
<div className='w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-2 border-b-2 p-8'>
  <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-gray-600 font-semibold'>Subtotal</span>
    <span className='text-green-400 font-semibold text-lg'>₹{subtotal}/-</span>
  </div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-gray-600 font-semibold'>Delivery Fee</span>
    <span className='text-green-400 font-semibold text-lg'>₹{deliveryFree}/-</span>
  </div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-xl text-gray-600 font-semibold'>Taxes</span>
    <span className='text-green-400 font-semibold text-lg'>₹{taxes}/-</span>
  </div>

</div>
<div>
<div className='w-full flex justify-between items-center p-6'>
    <span className='text-2xl text-gray-600 font-semibold'>Total</span>
    <span className='text-green-400 font-semibold text-2xl'>₹{total}/-</span>
  </div>
</div>
<button className='w-[80%] p-3 bg-green-300 rounded-lg text-white hover:bg-green-500 transition-all' onClick={()=>{
  toast.success("Order Placed Successfully");
}}>Place Order</button>
</>:<div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Card</div>}

      </div>
    </div>
  )
}

export default Home

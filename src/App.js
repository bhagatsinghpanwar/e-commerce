import logo from './logo.svg';
import './App.css';
import Category from './Category';
import ProductItems from './ProductItems';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let [finalCategory, setfinalCategory]=useState([])
  let [finalPro, setfinalPro]= useState([])
  let[catName, setCatName] =useState('')
  let getCetogary =()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalres)=>{
      setfinalCategory(finalres)
    })
  }

  let getProducts =()=>{
    axios.get('https://dummyjson.com/products')
    .then((proRes)=>proRes.data)
    .then((finalres)=>{
      setfinalPro(finalres.products)
    })
  }
  useEffect(()=>{
    getCetogary();
    getProducts();
  },[])
  useEffect(()=>{
      if(catName!==""){
        axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((proRes)=>proRes.data)
    .then((finalres)=>{
      setfinalPro(finalres.products)
    })
      }
},[catName])
  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] m-auto'>
          <h1 className='text-center text-[40px] font-bold'>
            Our Products
          </h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div className=''>
            
              <Category finalCategory ={finalCategory} setCatName={setCatName}/>
            </div>
            <div>
              <div className=' grid grid-cols-3 gap-4'>
                {finalPro.length>>1 ?
                  <ProductItems finalPro={finalPro} />
                :
                "No Product Found"}
              
                
              </div>
            </div>
          </div>


        </div>

      </div>
    </>

  );
}

export default App;

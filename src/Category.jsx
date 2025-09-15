import React from 'react'

export default function Category({finalCategory,setCatName}) {
    let cat=finalCategory.map((v,i)=>{
        return(
             <li onClick={()=>setCatName(v.name)} key={i} className='bg-[gray] cursor-pointer text-[22px]  font-serif font-[400] mb-2'  > 
              {v.name}</li>
        )
    })
  return (
    <div>
        <h3 className="text-[28px] font-[300] p-[10px] "> Product Category</h3>
        <ul>
            {cat}
        </ul>
    </div>
  )
}

import React from 'react'

export default function ProductItems({finalPro}) {
    let product = finalPro.map((v,i)=>{
        return(
            <div key={i} className='shadow-lg text-center'>
             <img className='w-[300px]' src={v.thumbnail} />
            <h4>{v.title}</h4>
            <b>{v.price}</b>
        </div>

        )
    })
    return (
        <>
        {product}
        </>
        
           


    )
}

import React from 'react'

function Card() {
  return (
    <div className='w-[273px] shrink-0'>
        <div className='h-[182px] rounded-[15px] overflow-hidden relative' >
            <img className="object-cover w-full h-full" src="images/pjsaxa4bkfphmjeiatt6.jpeg" alt="" />
            <div className='image-overlay-card absolute w-full h-full top-0 flex items-end p-2 text-[30px] text-white font-bold tracking-tighter' >
                Items at 179
            </div>
        </div>
               <div className='p-3'>
                   <h2 className='text-2xl font-light'>hello</h2>
                   <div className='flex text-2xl font-light'>
                    <div>*</div>
                    <div>4.3.35-40 mins</div>
                   </div>
                   <p className='text-[21px] break-words'>hhdiufkjdfhiudfhkjfidfhkjfiudfkdhfddfddfdfdd</p>
                </div>
    </div>
  )
}

export default Card
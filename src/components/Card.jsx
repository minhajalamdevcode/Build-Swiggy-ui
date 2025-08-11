import React from 'react'

function Card(props) {
  return (
    <div className='w-[273px] shrink-0'>
        <div className=' group h-[182px] rounded-[15px] overflow-hidden relative' >
            <img className=" group-hover:scale-110 duration-150 object-cover w-full h-full" src={props.image} alt="" />
            <div className='image-overlay-card absolute w-full h-full top-0 flex items-end p-2 text-[20px] text-white font-bold tracking-tighter' >
                {props.offer}
            </div>
        </div>
               <div className='p-3'>
                   <h2 className='text-2xl font-light'>{props.title}</h2>
                   <div className='flex text-2xl font-light gap-2'>
                    <div> <img  className="inline"src={props.icon} alt="" /> {props.rating}</div>
                    <div>{props.minTime}-{props.maxTime} mins</div>
                   </div>
                   <p className='text-[21px] break-words'>{props.name}
                     <br />
                     {props.place}
                   </p>
                </div>
    </div>
  )
}

export default Card
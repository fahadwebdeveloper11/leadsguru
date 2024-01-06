import React from 'react'

const GuruSections = ({image, heading, sub_heading, description}) => {
  return (
    <div className='flex items-center justify-between mb-14'>
        <div className='w-[40%]'>
            <img src={image} alt="image" className='w-full h-full object-cover object-center'/>
        </div>
        <div className='w-[50%]'>
            <h1 className='text-[#252526] font-semibold text-3xl'>{heading}</h1>
            <h3 className='font-medium text-xl mt-3 mb-1'>{sub_heading}</h3>
            <p className='text-[#252526]'>{description}</p>
        </div>
    </div>
  )
}

export default GuruSections
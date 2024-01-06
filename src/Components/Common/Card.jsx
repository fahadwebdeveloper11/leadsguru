import React from 'react'
import icon1 from "../../assets/icon-01.svg"
import icon2 from "../../assets/icon-02.svg"
import Button from './Button'
const Card = ({image, new_price, old_price, packages,courses, timing, students_enrolled}) => {
  return (
    <div className='rounded-lg overflow-hidden bg-white pb-6'>
        <div className='w-full h-[50%] relative'>
            <img src={image} alt="course1" className='w-full h-full object-cover object-center' />
            <div className='flex items-center justify-between px-2 py-1 absolute right-2 bottom-2 bg-white rounded-lg gap-2'>
                <h1 className='text-2xl font-mdeium'>₹{new_price}</h1>
                <p className='text-[#777] text-sm line-through self-end'>₹{old_price}</p>
                </div>
        </div>
        <div className='p-5 '>
            <h3 className='font-semibold text-xl my-4'>{packages}</h3>
            <div className='w-full flex items-center  justify-between border-b-zinc-300 border-b-[1px] pb-4 text-[#685f78]'>
                <div className='flex items-center gap-2'>
                    <img src={icon1} alt="" />
                    <span>{courses} Courses</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={icon2} alt="" />
                    <span>{timing} Hours</span>
                </div>
            </div>
            <div className='my-4'>
                <ul className='list-disc pl-5'>
                    <li>Live Q&A Support</li>
                    <li>{students_enrolled}k+ Students Enrolled</li>
                    <li>LeadsGuru Certificate</li>
                </ul>
            </div>
            <Button 
            data={"View Details"}
            classNames={
              "hover:text-[#023246] font-medium hover:bg-[#ffa8ae] duration-300 py-2 px-6"
            }/>
        </div>
    </div>
  )
}

export default Card
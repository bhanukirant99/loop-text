import React from 'react'
import './Landing.css'
import {Button} from '../'
export const Landing = () => {
    return (
        <div className='landing  flex flex-col items-center justify-evenly lg:justify-center   '>
           
            <h1 className='text-5xl lg:text-8xl'>LoopText</h1>
            <span className='text-4xl mt-12'>Never Miss the live conversation again!</span>
            {/* <Button primary="bg-blue-500 text-white w-2/5 h-20 text-3xl" text='Login'/> */}
            <img src='/images/sign_in.png' alt='sign-in' className='w-72 shadow-lg lg:w-96 rounded lg:mt-72' />
        </div>
    )
}
 
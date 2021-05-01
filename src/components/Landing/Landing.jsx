import React from 'react'
import './Landing.css'
import {Button} from '../'
export const Landing = () => {
    return (
        <div className='landing container sm:mx-auto lg:hidden flex flex-col items-center justify-around   '>
            <h1 className='text-5xl'>LoopText</h1>
            <span className='text-4xl'>Never Miss the live conversation again!</span>
            <Button primary="btn btn-blue w-2/5 h-20 text-3xl" text='Login'/>
        </div>
    )
}

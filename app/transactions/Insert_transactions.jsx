"use client"
import React, { useState } from 'react'
import dotenv from 'dotenv';
dotenv.config();


export default function Insert_trans() {

    //~ State Variables regarding submitting to Server
    const [details, setDetails] = useState()
    const [amount, setAmount] = useState()
    const [category, setCategory] = useState()
    const [class_, setClass_] = useState() //^ class has an underscore due it it being  reserved word in JS.

    const submitTransaction = async () => {
        console.log(process.env.REACT_APP_SERVER_URL)
        const response = await fetch(`http://127.0.0.1:5000/insert`, {
            method: "GET"
            // method: "POST",
            // headers: {
            //     'Content-Type': "application/json"
            // },
            // body: JSON.stringify({
            //     details: details,
            //     amount: amount,
            //     category: category,
            //     class: class_
            // })
        })
        const data = await response.json()

        console.log(data)
    }

    return (
        <main className='flex w-full justify-center align-middle flex-col px-4 my-4 space-y-4'>

            <section id="header" className='flex w-full justify-center py-2'>
                <h1 className='text-3xl'>Insert Transaction</h1>
            </section>


            <section id="input-container" className='bg-yellow-60 flex flex-row justify-around align-middle py-2'>

                <span className='flex flex-row space-x-2 align-middle justify-center mx-1'>
                    <h4 className='flex items-center text-lg text-center'>Details</h4>
                    <input type="text" className='border border-black rounded-sm pl-2'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1'>
                    <h4 className='flex items-center  text-lg'>Amount</h4>
                    <input type="number" className='border border-black rounded-sm pl-2 w-3/4'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1 '>
                    <h4 className='flex items-center  text-lg'>Category</h4>
                    <input type="text" className='border border-black rounded-sm pl-2  w-2/4'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1'>
                    <h4 className='flex items-center  text-lg'>Class</h4>
                    <input type="text" className='border border-black rounded-sm pl-2  w-3/4'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1'>
                    <h4 className='flex items-center  text-lg'>Date</h4>
                    <input type="date" className='border border-black rounded-sm pl-2 w-2/4'/>
                </span>


            </section>



            <section id="button" className='flex justify-center p-2'>
                <button onClick={submitTransaction} className='py-2 px-4 bg-blue-600 rounded-sm text-white'>Add Transaction</button>
            </section>
            
        </main>
    )
}

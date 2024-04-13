"use client"
import React, { useState } from 'react'

export default function AddTransactionPhone() {
    const [amount, setAmount] = useState("")

    const getTransactions = async () => {
        const response = await fetch(`http://127.0.0.1:5000/get_transactions`, {
            method: "POST",
            body: JSON.stringify({
                user_id: ""
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        console.log(data)
    }


    return (
        <main className='mt-4'>
            <div className='flex flex-col space-y-4 '>

                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='amount' className='text-xl'>Amount</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <h1 className='flex py-2 text-black align-middle text-center '>R</h1>
                        <input type="text" name="amount" placeholder='0.00' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                </div>
                
                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='details' className='text-xl'>Details</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <input type="text" name="details" placeholder='Details' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' />
                    </div>
                </div>

                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='category' className='text-xl'>Catgeory</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <input type="text" name="category" placeholder='Category' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' />
                    </div>
                </div>

            </div>
            
            <div className='flex justify-center mt-8'>
                <button className='border border-white rounded-md px-4 py-2 text-xl'>Add Transaction</button>
            </div>


        </main>
    )
}
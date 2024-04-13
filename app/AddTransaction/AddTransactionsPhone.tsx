"use client"
import React, { useEffect, useState } from 'react'

import { currentDate } from './currentDate'
import TransactionCompPC from './TransactionCompPC'

export default function AddTransactionPC() {
    const [details, setDetails] = useState("")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [class_, setClass_] = useState("")

    const [transactions, setTransactions] = useState<any[]>([])


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

    const saveTransaction = async () => {
        console.log("Amount", parseFloat(amount))
        const response = await fetch(`http://127.0.0.1:5000/save_transaction`, {
            method: "POST",
            body: JSON.stringify({
                user_id: "FR-234",
                details: details,
                amount: parseFloat(amount),
                category: category,
                class: class_,
                // date: currentDate()

            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        console.log(data)
        setTransactions(data.records)
    }

    useEffect(() => {
        currentDate()
    },[])

    //  ====================== Phone ======================

    return (
        <main className='mt-4 xsm:block lg:hidden'>
            <div className='flex flex-col space-y-4 '>

                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='amount' className='text-xl'>Amount</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <h1 className='flex py-2 text-black align-middle text-center '>R</h1>
                        <input type="number" name="amount" placeholder='0.00' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                </div>
                
                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='details' className='text-xl'>Details</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <input type="text" name="details" placeholder='Details' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' onChange={(e) => setDetails(e.target.value)}/>
                    </div>
                </div>

                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='category' className='text-xl'>Catgeory</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <input type="text" name="category" placeholder='Category' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                </div>
                
                <div className='flex flex-col px-2 space-y-0.5'>
                    <label htmlFor='category' className='text-xl'>Class</label>
                    <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                        <input type="text" name="category" placeholder='Category' className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' onChange={(e) => setClass_(e.target.value)}/>
                    </div>
                </div>

            </div>
            
            <div className='flex justify-center mt-8'>
                <button onClick={saveTransaction} className='border border-white rounded-md px-4 py-2 text-xl'>Add Transaction</button>
            </div>

            <div id="scroll-view" className='overflow-auto h-screen space-y-2'>
                        {transactions && transactions.map((T) => (
                            <>{T.amount}</>
                        ))}
                        {/* <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/>
                        <TransactionCompPC amount={23.94} details={"Cookie for Boss at work, we got it at Mug and Bean because it was a rainy day and we felt like getting a cookie, worth it"} category={"Sweets"} class_={"income"} date={new Date()}/> */}
                    </div>


        </main>
    )
}
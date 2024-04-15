"use client"
import React, { useEffect, useState } from 'react'

//^ Functions
import { currentDate } from './currentDate'

//~ Componets
import TransactionCompPC from './TransactionCompPC'

export default function AddTransactionPC() {
    const [details, setDetails] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [class_, setClass_] = useState<string>("")

    const [transactions, setTransactions] = useState<any[]>([]) //^ This stores the transaction from API call, retrived from the DB.

    const [filterMonth, setFilterMonth] = useState<string>("")
    const [filterYear, setFilterYear] = useState<string>("")

    const getTransactions = async () => {
        const response = await fetch(`http://127.0.0.1:5000/get_transactions`, {
            method: "POST",
            body: JSON.stringify({
                user_id: "FR-234"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()
        
        setTransactions(data.records)
        console.log(transactions, "0000000000")
    }

        console.log(currentDate())
        const saveTransaction = async () => {
        console.log("Amount", parseFloat(amount))
        // const response = await fetch(`http://127.0.0.1:5000/save_transaction`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         user_id: "FR-234",
        //         details: details,
        //         amount: parseFloat(amount),
        //         category: category,
        //         class: class_,
        //         date: currentDate()

        //     }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })

        // const data = await response.json()
        // console.log(currentDate())

    }

    console.log("Add Transaction IO")


    useEffect(() => {
        console.log("Add Transaction")
        console.log(currentDate())
        getTransactions()
        console.log(transactions, 111111111)
    },[])


    //  ====================== PC ======================



    return (
        <main className='mt-4'>
            PC
            <div className='flex w-full flex-row space-x-4 px-4 h-screen'>

                <div id="left" className='w-1/2'>

                    <h1 className='flex justify-center text-3xl py-1 font-light'>Add Transaction</h1>

                    <section className='border border-white rounded-md p-2 space-y-4'>

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
                        
                        <div className='flex flex-col px-2 space-y-0.5'>
                            <label htmlFor='category' className='text-xl'>Date</label>
                            <div className='flex flex-row bg-white rounded-md space-x-1 px-2'>
                                <input type="date" name="category"  className='flex w-full rounded-md pl-2 py-2 border-none outline-none text-black' onChange={(e) => setClass_(e.target.value)}/>
                            </div>
                        </div>

                        <div className='flex justify-center mt-8'>
                            <button onClick={saveTransaction} className='border border-white rounded-md px-4 py-2 text-xl'>Add Transaction</button>
                        </div>

                    </section>
                </div>

                <div id="right" className='w-1/2 mx-4'>
                    <h1 className='flex justify-center text-3xl py-1 font-light'>Transaction</h1>

                    <div id='fliter' className='border border-white rounded-md p-2'>
                        <section className='flex flex-row w-full justify-around'>
                            <div>
                                <select name="" id="Month" className='bg-white text-black text-xl'>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                </select>
                            </div>

                            <div>
                                <select name="" id="Year" className='bg-white text-black text-xl'>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>
                        </section>

                        
                    </div>

                    <div id="scroll-view" className='overflow-auto h-screen space-y-2'>
                        {transactions && transactions.filter((F) => F.details === "Muffin").map((F) => (
                            
                           <TransactionCompPC key={F.id} amount={F.amount} details={F.details} category={F.category} class_={F.class} date={"T.date.toDateString()"}/>
                        ))}
                        {/* {transactions && transactions.map((T) => (
                           <TransactionCompPC amount={T.amount} details={T.details} category={T.category} class_={T.class} date={"T.date.toDateString()"}/>
                        ))} */}
                        
                    </div>
                </div>
            </div>



        </main>
    )
}
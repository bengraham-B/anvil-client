"use client"
import React, { useEffect, useState } from 'react'
import dotenv from 'dotenv';
dotenv.config();

//^ Components
import Transaction from './transactionsComp/Transaction';


export default function Insert_trans() {

    //~ State Variables regarding submitting to Server
    const [details, setDetails] = useState()
    const [amount, setAmount] = useState()
    const [category, setCategory] = useState()
    const [class_, setClass_] = useState() //^ class has an underscore due it it being  reserved word in JS.

    const [success, setSuccess] = useState()

    const [getAllTransactions, setGetAllTransactions] = useState([])

    const submitTransaction = async () => {
        const response = await fetch(`http://127.0.0.1:5000/insert`, {
            method: "POST",
            body: JSON.stringify({
                user_id: "d14637",
                details: details,
                amount: amount,
                category: category,
                class: class_
            }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const data = await response.json()

        if (response.ok){
            setSuccess(<p className='text-green-600'>{success}</p>)
        }

        console.log(data)
    }

    const getTransactions = async () => {
        const response = await fetch("http://127.0.0.1:5000/get_transactions", {
            method: "POST",
            body: JSON.stringify("d14637"),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data.records)

        const records = data.records

        for(let i = 0; i < records.length; i++){
            console.log(records[i].id)
        }

        setGetAllTransactions(records)
    }

    useEffect(() => {
        getTransactions()
    },[])
    
    useEffect(() => {
        getTransactions()
    },[submitTransaction])

    return (
        <main className='flex w-full justify-center align-middle flex-col px-4 my-4 space-y-4'>

            <section id="header" className='flex w-full justify-center py-2'>
                <h1 className='text-3xl'>Insert Transaction</h1>
            </section>


            <section id="input-container" className='bg-yellow-60 flex flex-row justify-around align-middle py-2'>

                <span className='flex flex-row space-x-2 align-middle justify-center mx-1'>
                    <h4 className='flex items-center text-lg text-center'>Details</h4>
                    <input type="text" onChange={(e) => setDetails(e.target.value)} className='border border-black rounded-sm pl-2'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1'>
                    <h4 className='flex items-center  text-lg'>Amount</h4>
                    <input type="number" onChange={(e) => setAmount(e.target.value)} className='border border-black rounded-sm pl-2 w-3/4'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1 '>
                    <h4 className='flex items-center  text-lg'>Category</h4>
                    <input type="text" onChange={(e) => setCategory(e.target.value)} className='border border-black rounded-sm pl-2  w-2/4'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1'>
                    <h4 className='flex items-center  text-lg'>Class</h4>
                    <input type="text" onChange={(e) => setClass_(e.target.value)} className='border border-black rounded-sm pl-2  w-3/4'/>
                </span>
               
                <span className='flex flex-row space-x-2 mx-1'>
                    <h4 className='flex items-center  text-lg'>Date</h4>
                    <input type="date" className='border border-black rounded-sm pl-2 w-2/4'/>
                </span>


            </section>



            <section id="button" className='flex justify-center p-2 flex-col'>
                <div className='flex justify-center'>
                    <button onClick={submitTransaction} className='py-2 px-4 bg-blue-600 rounded-sm text-white'>Add Transaction</button>
                </div>
                <div className='flex justify-center p-2'>
                    <div>
                        <div className='flex justify-center py-2 px-4 rounded-md'>
                           {success ? <p className='text-green-600'>{success}</p> : <p></p>}
                        </div>
                    </div>
                </div>
                
            </section>


            <section id="Display-Transactions" className='pt-4'>
                <div id="display-transactions-header">
                    <h1 className="text-4xl text-blue-600 text-center">Transactions</h1>
                </div>

                <div>

                <div className='flex px-4 py-2 my-2'>
                    <p className='w-1/4 text-blue-600 text-xl text-center'>Details</p>
                    <p className='w-1/4 text-blue-600 text-xl text-center'>Amount</p>
                    <p className='w-1/4 text-blue-600 text-xl text-center'>Category</p>
                    <p className='w-1/4 text-blue-600 text-xl text-center'>Class</p>
                    <p className='w-1/4 text-blue-600 text-xl text-center'>Date</p>
			    </div>
                    {
                        getAllTransactions ? getAllTransactions.map(
                            (transaction) => (
                                <Transaction 
                                    details={transaction.details} 
                                    amount={transaction.amount}
                                    category={transaction.category}
                                    class={transaction.class}
                                    date={transaction.date}
                                />
                            )
                            ) : <p>No Transactions... yet :)</p>
                    }
                </div>

            </section>
            
        </main>
    )
}

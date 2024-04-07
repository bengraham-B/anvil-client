"use client"
import React, { useEffect, useState } from 'react'

import Transaction from './transactionsComp/Transaction'


export default function Transactions() {
    const [getAllTransactions, setGetAllTransactions] = useState([])

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
	
	  
	}, [])
    return (
        <section className='p-6'>

			<div className='flex justify-center my-4'>
				<h1 className='text-3xl text-blue-600'>Transaction History</h1>
			</div>

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

        </section>
    )
}

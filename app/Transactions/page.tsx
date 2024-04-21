"use client"
import React, {useEffect, useState} from 'react';

import TransactionTable from './TransactionTable'; //~ For large screens - Table of transactions
import TransactionComp from './TransactionComp'; //~ For small screens - Component of Each transaction

export default function Page() {
    const [records, setRecords] = useState<any[]>()

    //^ Filter
	const [filterMonth, setFilterMonth] = useState<string>("")
	const [filterDay, setFilterDay] = useState<string>("")
	const [filterYear, setFilterYear] = useState<string>("2024")

	const getTransactions = async() => {
		const response = await fetch(`http://127.0.0.1:5000/get_transactions`, {
			method: "POST",
			body: JSON.stringify({
				user_id: "bn-33"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
		const data = await response.json()
		console.log(data)
        console.log("records in trnasactions page")
        setRecords(data.records)
	}


	// function saveCategory(categoryValue:React.ChangeEvent<HTMLSelectElement>){
	// 	setCategory(categoryValue.target.value)
	// }

	//^ =========== Filter functions ===========
	function saveFilterMonth(month:React.ChangeEvent<HTMLSelectElement>){
		setFilterMonth(month.target.value)
	}

	useEffect(() => {
		getTransactions()
		console.log("TransactionComp")
	},[])

    return (
        <main>
            <section className='flex justify-center py-4'>
                <h1 className='text-4xl'>Transactions</h1>
            </section>

            <section className='border border-white rounded-md flex mx-4 justify-around my-2 py-2'>
						<input type="text" className="w-1/4 text-black pl-1 rounded-md" placeholder='Day' onChange={(e) => setFilterDay(e.target.value)}/>
						<select name="month" id="" className='text-black' onChange={saveFilterMonth}>
							<option value="Jan">January</option>
							<option value="Feb">February</option>
							<option value="Mar">March</option>
							<option value="Apr">April</option>
							<option value="May">May</option>
							<option value="June">June</option>
							<option value="July">July</option>
							<option value="Aug">August</option>
						</select>
						<input type="text" className="w-1/4  text-black pl-1 rounded-md" placeholder='2024' onChange={(e) => setFilterYear(e.target.value)}/>
					</section>

			<TransactionTable/>



            <div className='p-4 space-y-2'>


                {records && records.map((T) => (
                    <TransactionComp	
                        key={T.id}
                        amount={T.amount}
                        details={T.details}
                        category={T.category}
                        class_={T.class}
                        date={T.date}
                        day={T.day}
                        month={T.month}
                        year={T.year}
                    />)
                )
                }

            </div>
            

        </main>
    );
}

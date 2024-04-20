"use client"
import { useState, useEffect } from "react";
import React from 'react';

export default function TransactionTable() {

	const [records, setRecords] = useState<any[]>([]) //^ This stores the recods from the API call


    const getTransactions = async () => {
		const response = await fetch(`http://127.0.0.1:5000/get_transactions`, {
			method: "POST",
			body: JSON.stringify({
				user_id: "bn-33"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})

		if (response.ok){
			console.log("Silly")
			const data = await response.json()
			setRecords(data.records)


		}

	}

    useEffect(() => {
        getTransactions()
    },[])

    return (
        <div className='flex justify-center space-x-4 rounded-md p-2 xsm:hidden lg:flex'>
            <table className='table-auto  outline outline-1 rounded-md p-2'>
                <tbody className='p-2 space-y-4'>
                    <tr className='p-2 bg-white text-black rounded-md space-x-4'>
                        <th className='px-12 text-center'>Nr</th>
                        <th className='px-12 text-center'>Details</th>
                        <th className='px-12 text-center'>Amount</th>
                        <th className='px-12 text-center'>Category</th>
                        <th className='px-12 text-center'>Date</th>
						<th></th>
						<th></th>
                    </tr>
                    {records && records.map((T, i) => (
                        <tr className="hover:bg-white hover:text-black">
                            <td className='px-12 py-2 text-center'>{i+1}</td>
                            <td className='px-12 py-2 text-center'>{T.details}</td>

                            {T.class === "E" ? 
                                <td className='px-12 py-2 text-center text-red-600'>- R{T.amount}</td>
                                :
                                <td className='px-12 py-2 text-center text-green-600'>+ R{T.amount}</td>
                            }

                            <td className='px-12 py-2 text-center'>{T.category}</td>
                            <td className='px-12 py-2 text-center'>{T.day} {T.month} {T.year}</td>
                            <td className='px-6  py-2 text-center'><button className='px-4 py-1 bg-blue-600 rounded-md'>Edit</button></td>
                            <td className='px-6  py-2 text-center'><button className='px-4 py-1 bg-red-600 rounded-md'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>    
        </div>
    );
}

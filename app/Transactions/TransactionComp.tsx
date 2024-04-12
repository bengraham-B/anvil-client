"use client"
import React, { useEffect } from 'react'

export default function TransactionComp() {

	const getTransactions = async() => {
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
		console.log(data)
	}

	useEffect(() => {
		getTransactions()
	},[])

	return (
		<main className='flex justify-center lg:hidden border border-white rounded-md p-2 mx-4'>
			<div className='flex flex-col w-full px-4  space-y-4'>

				<span id="details-container" className="flex flex-row justify-between space-y-4">
					<div className='flex flex-col space-y-2'>
						<div id="details" className='text-blue-600 text-2xl'>24 April 2025</div>

						<div id="details" className='flex flex-col borer border-whie rounded-md p- pr-2'>
							<h3 className="bg-white text-black px-2 py-1 rounded-md w-1/2">Category</h3>
							<p className='pl-2'>Sweets</p>
						</div>

						<div id="details" className='flex flex-col rounded-md pr-2 '>
							<h3 className="bg-white text-black px-2 py-1 rounded-md w-1/2">Details</h3>
							<p className='pl-2'>Snacks on a rainy day at work, It was a tuesday</p>
						</div>

					</div>

					<div className='flex items-center justify-end'>
						<div id="details" className='flex justify-center xsm:text-xl'>R34.00</div>
					</div>
				</span>

				

				<span id="buttons-container" className="flex flex-row justify-around">
					<button className='bg-blue-600 px-3 py-1 rounded-md text-xl w-2/6'>Edit</button>
					<button className="bg-red-600 px-3 py-1 rounded-md text-xl w-2/6 text-center">Delete</button>
				</span>

			</div>
		</main>
	)
}

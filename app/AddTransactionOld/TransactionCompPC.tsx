"use client"
import React, { useEffect } from 'react'

/*
This component used for:
	- Phone screens.
	- Add Transactions, where it will be shown on the right of the input field.
*/


interface TransactionProps {
	key: string,
	amount: number,
	details: string,
	category: string,
	class_: "income" | "expense",
	date: string
}

export default function TransactionCompPC(props: TransactionProps){

	return (
		<main key={props.key} className='flex justify-center lg:block border border-white rounded-md p-2'>
			<div className='flex flex-col w-full px-4  space-y-4'>

				<span id="details-container" className="flex flex-row justify-between space-y-4">
					<div className='flex flex-col space-y-2'>
						<div id="details" className='text-blue-600 text-2xl'>{props.date}</div>

						<div id="details" className='flex flex-col borer border-whie rounded-md p- pr-2'>
							<h3 className="bg-white text-black px-2 py-1 rounded-md w-1/2">Category</h3>
							<p className='pl-2'>{props.category}</p>
						</div>

						<div id="details" className='flex flex-col rounded-md pr-2 '>
							<h3 className="bg-white text-black px-2 py-1 rounded-md w-1/2">Details</h3>
							<p className='pl-2'>{props.details}</p>
						</div>

					</div>

					<div className='flex items-center justify-end'>
						<div id="details" className='flex justify-center xsm:text-xl'>R{props.amount}</div>
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
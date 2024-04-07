import React, { useEffect } from 'react'

//^ Functions
import { getTransactions } from '@/app/functions/getTransactions'

export default function Transactions(props) {

	useEffect(() => {
		const transactions = getTransactions("d14637")
		console.log(transactions)
	
	  
	}, [])
	

	
    return (
		<section>

			
			
			<div className='flex px-4 py-2 my-2 border border-blue-600 rounded-md'>
				<p className='w-1/4 text-center'>{props.details}</p>
				<p className='w-1/4 text-center'>R{props.amount}</p>
				<p className='w-1/4 text-center'>{props.category}</p>
				<p className='w-1/4 text-center'>{props.class}</p>
				<p className='w-1/4 text-center'>{props.date}</p>
			</div>
		</section>
    )
}

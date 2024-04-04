import React from 'react'

export default function Transactions(props) {
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

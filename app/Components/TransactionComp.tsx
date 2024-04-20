import React from 'react';

interface TransactionProps {
	key: string,
	amount: number,
	details: string,
	category: string,
	class_: "income" | "expense",
	date: string 
} 

export default function TransactionComp(props: TransactionProps) {

    return (
        <main key={props.key} className='flex justify-center flex-col space-y-4 border border-green-600 rounded-md p-6'>
        
           <section className='flex flex-row justify-between'>
				<span>
					<h1 className='text-orange-600 md:text-3xl xsm:text-2xl'>{props.category}</h1>
				</span>
				<span>
					<h1 className='md:text-3xl xsm:text-xl'>{props.date}</h1>
				</span>
		   </section>

		   <section className='flex-row justify-around space-y-2'>

				<div id="details" className='flex-col'>
					<div className='flex bg-white rounded-md p-1'>
						<h1 className='text-black'>Details</h1>
					</div>
					<div>
						<p className='flex flex-wrap text-wrap p-1'>{props.details}</p>
					</div>
				</div>

				<div id="amount" className='flex justify-end'>
					<h1 className='text-green-600 text-3xl'>+ {props.amount}</h1>
				</div>
		   </section>

		   <section className='flex justify-around'>
				<button className='bg-blue-600 rounded-md px-7 py-2 outline-none'>Edit</button>
				<button className='bg-red-600 rounded-md px-4 py-2 outline-none'>Delete</button>
		   </section>



        </main>
    );
}

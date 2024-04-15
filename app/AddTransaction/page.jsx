import React from 'react'

export default function page() {
  return (
    <main>
        <section>
            <h1 className='flex justify-center text-white text-3xl my-2 pt-2'>Add Transaction</h1>
        </section>

		<section className='flex xsm:flex-col lg:flex-row w-full p-3'>

			<div id="inputs" className='bg-ed-400 xsm:w-full lg:w-1/2 space-y-4'>
				<div id="header" className='flex justify-center font-light text-2xl'>
					<h1>Transaction Details</h1>
				</div>
				<div className="p-4 space-y-2">

					<div className='space-y-2'>
						<h3 className='text-2xl'>Amount</h3>
						<div className='bg-white flex w-full align-middle rounded-md'>
							<h3 className='flex pl-1 py-2 text-black align-middle text-lg text-center'>R</h3>
							<input type="number" placeholder="0.00" className='w-full text-lg text-black pl-1 p-1 outline-none rounded-md'/>
						</div>
					</div>

					<div className='space-y-2'>
						<h3 className='text-2xl'>Details</h3>
						<input type="text"  className='w-full text-lg text-black pl-2 p-1 outline-none rounded-md'/>
					</div>
					
					<div className='space-y-2'>
						<h3 className='text-2xl'>Category</h3>
						<select name="Sundry" id="" className='flex w-full text-lg bg-white text-black py-2'>
							<option value="Sundry">Sundry</option>
						</select>
					</div>
					
					<div className='flex justify-around py-4'>
						<button className='border border-white py-2 px-4 rounded-md text-xl'>Income</button>
						<button className='border border-white py-2 px-4 rounded-md text-xl'>Expense</button>
					</div>

					
				</div>
			</div>


			<div id="transactions" className='bg-blue-400 xsm:w-full lg:w-1/2'>
				<div id="header" className='flex justify-center font-light text-2xl'>
					<h1>Transactions</h1>
				</div>
			</div>
		</section>
    </main>
  )
}
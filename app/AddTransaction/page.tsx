"use client"
import React, {useState} from 'react'

export default function page() {
	const [incomeClass, setIncomeClass] = useState<boolean>(false)
	const [expenseClass, setExpenseClass] = useState<boolean>(false)
	const [classValue, setClassValue] = useState<string>("")

	const classFunc = (classType:string) => {
		console.log(classType)

		if (classType === "income"){
			setIncomeClass(true)
			setExpenseClass(false)
			setClassValue("income")
		}

		else {
			setIncomeClass(false)
			setExpenseClass(true)
			setClassValue("expense")
		}
	}

	const saveTransaction = async () => {
		const response = fetch(`http://127.0.0.1:5000/save_transaction`, {
			method: "POST",
			body: JSON.stringify({
				details: ,
				amount: ,
				category: ,
				class: ,
				date: ,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
	}

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
				<div className="space-y-1 p-4">

					<div id="amount" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Amount</h3>
						<div className='bg-white flex w-full align-middle rounded-md'>
							<h3 className='flex pl-1 py-2 text-black align-middle text-lg text-center'>R</h3>
							<input type="number" placeholder="0.00" className='w-full text-lg text-black pl-1 p-1 outline-none rounded-md'/>
						</div>
					</div>

					<div id="Details" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Details</h3>
						<input type="text"  className='w-full text-lg text-black pl-2 p-1 outline-none rounded-md'/>
					</div>
					
					<div id="category" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Category</h3>
						<select name="Sundry" id="" className='flex w-full text-xl bg-white text-black py-2'>
							<option value="Sundry" className='text-lg py-2'>Sundry</option>
						</select>
					</div>
					
					<div id="class" className='flex justify-around py-1'>
						<button onClick={() => classFunc("income")}  className={`border border-green-600  py-2 px-4 rounded-md text-xl ${incomeClass ? "bg-green-600 text-white":" text-green-600"}`}>Income</button>
						<button onClick={() => classFunc("expense")} className={`border border-red-600 py-2 px-4 rounded-md text-xl ${expenseClass ? "bg-red-600 border-green-600 outline-none text-white":"border-red-600 text-red-600 "}`}>Expense</button>
					</div>

					<div id="Details" className='space-y-2 py-1'>
						<h3 className='text-2xl'>Date</h3>
						<input type="date"  className='w-full text-lg text-black pl-2 p-1 outline-none rounded-md'/>
					</div>

					<div className='flex w-full justify-center py-1'>
						<button className="py-2 px-4 text-2xl border border-white rounded-md hover:bg-white hover:text-black">Submit</button>
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
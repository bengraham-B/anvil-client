"use client"
import React, {useState, useEffect} from 'react'

//^ Import Functions
import TransactionComp from '../Components/TransactionComp'

export default function page() {
	const [error, setError] = useState<boolean>(false)
	const [incomeClass, setIncomeClass] = useState<boolean>(false)
	const [expenseClass, setExpenseClass] = useState<boolean>(false)
	const [classValue, setClassValue] = useState<string>("")

	const [amount, setAmount] = useState<string>("")
	const [details, setDetails] = useState<string>("")
	const [category, setCategory] = useState<string>("")
	const [date, setDate] = useState<string>("")

	const [records, setRecords] = useState<any[]>([]) //^ This stores the recods from the API call

	//^ Filter
	const [filterMonth, setFilterMonth] = useState<string>("")
	const [filterDay, setFilterDay] = useState<string>("")
	const [filterYear, setFilterYear] = useState<string>("2024")

	const classFunc = (classType:string) => {
		console.log(classType)

		if (classType === "income"){
			setIncomeClass(true)
			setExpenseClass(false)
			setClassValue("I")
		}

		else {
			setIncomeClass(false)
			setExpenseClass(true)
			setClassValue("E")
		}
	}

	const saveTransaction = async () => {
		const response = await fetch(`http://127.0.0.1:5000/save_transaction`, {
			method: "POST",
			body: JSON.stringify({
				"user_id": "bn-33",
				"details": details,
				"amount": amount,
				"category": category,
				"class": classValue,
				"date": date,
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})

		const data = await response.json()
		console.log(data)
	}

	function saveCategory(categoryValue:React.ChangeEvent<HTMLSelectElement>){
		setCategory(categoryValue.target.value)
	}

	//^ =========== Filter functions ===========
	function saveFilterMonth(month:React.ChangeEvent<HTMLSelectElement>){
		setFilterMonth(month.target.value)
	}

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
			setError(false)

		}

		else {
			setError(true)
		}

	}

	useEffect(() => {
		getTransactions()
	
	  
	}, [])
	

  return (
    <main>
        <section>
            <h1 className='flex justify-center text-white text-3xl my-2 pt-2'>Add Transaction</h1>
        </section>

		<section className='flex xsm:flex-col lg:flex-row w-full p-3'>

			<div id="inputs" className='bg-ed-400 xsm:w-full lg:w-1/2 space-y-4'>
				<div id="header" className='flex justify-center font-light text-2xl'>
					<h1 className='text-black bg-white text-3xl border border-white rounded-md px-4 py-2'>Transaction Details</h1>
				</div>
				<div className="space-y-1 p-4">

					<div id="amount" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Amount</h3>
						<div className='bg-white flex w-full align-middle rounded-md'>
							<h3 className='flex pl-1 py-2 text-black align-middle text-lg text-center'>R</h3>
							<input type="number" placeholder="0.00" className='w-full text-lg text-black pl-1 p-1 outline-none rounded-md' onChange={(e) => setAmount(e.target.value)}/>
						</div>
					</div>

					<div id="Details" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Details</h3>
						<input type="text"  className='w-full text-lg text-black pl-2 p-1 outline-none rounded-md' onChange={(e) => setDetails(e.target.value)}/>
					</div>

					<div className='flex flex-row md:justify-between md:flex-row xsm:flex-col space-y-2'>

						<div id="category" className='space-y-1 py-1'>
							<h3 className='text-2xl'>Category</h3>
							<select name="Sundry" id="" className='flex w-full text-xl bg-white text-black py-2' onChange={saveCategory}>
								<option value="Sundry" className='text-lg py-2'>Sundry</option>
								<option value="Change Category" className='text-lg py-2'>Change Category</option>
							</select>
						</div>

						<div id="category" className='space-y-1 py-1'>
							<h3 className='text-2xl'>New Category</h3>
							<input name="new Category" type="text" className='flex w-full text-lg text-black pl-2 p-1 outline-none rounded-md'/>
						</div>

					</div>
					
					
					<div id="class" className='flex justify-around py-1 mt-4'>
						<button onClick={() => classFunc("income")}  className={`border border-green-600  py-2 px-4 rounded-md text-xl ${incomeClass ? "bg-green-600 text-white":" text-green-600"}`}>Income</button>
						<button onClick={() => classFunc("expense")} className={`border border-red-600 py-2 px-4 rounded-md text-xl ${expenseClass ? "bg-red-600 border-green-600 outline-none text-white":"border-red-600 text-red-600 "}`}>Expense</button>
					</div>

					<div id="Date" className='space-y-2 py-1'>
						<h3 className='text-2xl'>Date</h3>
						<input type="date"  className='w-full text-lg text-black pl-2 p-1 outline-none rounded-md' onChange={(e) => setDate(e.target.value)}/>
					</div>

					<div className='flex w-full justify-center py-1'>
						<button className="py-2 px-4 text-2xl border border-white rounded-md hover:bg-white hover:text-black" onClick={saveTransaction}>Submit</button>
					</div>
					

					
				</div>
			</div>
			
			<hr className='text-white my-2 mb-4 xsm:block md:hidden'/>

			<div id="transactions" className='xsm:w-full lg:w-1/2'>
				<div id="header" className='flex flex-col justify-center font-light text-2xl'>

					<section>
						<div id="header" className='flex justify-center font-light text-2xl'>
							<h1 className='text-black bg-white text-3xl border border-white rounded-md px-4 py-2'>Transactions</h1>
						</div>
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

					<section className='overflow-auto h-screen space-y-2 p-4 my-1'>
						{records && records.filter((F) => {
								if (filterDay === null || filterDay === ""){
									return F.month === filterMonth && F.year === filterYear
								}

								else {
									return F.month === filterMonth && F.day === filterDay && F.year === filterYear
								}
								// F.month === filterMonth
							}
								).map((T) => (
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
									/>
								)
							)
						}
						
					</section>

				</div>
			</div>
		</section>
    </main>
  )
}
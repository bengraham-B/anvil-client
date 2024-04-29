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
	const [newCategory, setNewCategory] = useState<string>("")
	const [date, setDate] = useState<string>("")

	const [records, setRecords] = useState<any[]>([]) //^ This stores the recods from the API call

	//^ Filter
	const [filterMonth, setFilterMonth] = useState<string>("Apr")
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
		console.log("Date - add transactions", date)

		//^ This if-block handles if a new or existing category 
		let saveCategory:string = "";
		console.log(category, newCategory)
		if (category === "" || category === "Sundry" && newCategory !== ""){
			saveCategory = newCategory //^ Saves a new category the user inputed
		} else {
			saveCategory = category //^ this saves an existing category
		}
		
		const response = await fetch(`http://127.0.0.1:5000/save_transaction`, {
			method: "POST",
			body: JSON.stringify({
				"user_id": "bn-33",
				"details": details,
				"amount": amount,
				"category": saveCategory,
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

	function saveCategory(categoryValue:React.ChangeEvent<HTMLParagraphElement>){
		console.log(categoryValue)
		const selectedCategory = categoryValue.toString()
		setCategory(selectedCategory)
	}

	//^ =========== Filter functions ===========
	function saveFilterMonth(month:React.ChangeEvent<HTMLParagraphElement>){
		setFilterMonth(month.target.innerHTML)
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


					

		<section className='flex xsm:flex-col lg:flex-row w-full p-3 z-0'>


			<div id="inputs" className='bg-ed-400 xsm:w-full lg:w-1/2 space-y-4'>
				<div id="header" className='flex justify-center font-light text-2xl z-0'>
					<h1 className='text-black bg-white text-3xl border border-white rounded-md px-4 py-2'>Transaction Details</h1>
				</div>
				<div className="space-y-1 p-4">

					<div id="amount" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Amount</h3>
						<div className='bg-base-100 flex w-full align-middle rounded-md'>
							{/* bg-base-100 is the grey for the daisy input bg */}
							<h3 className='flex pl-1 py-2 text-white align-middle text-xl text-center'>R</h3>
							<input type="number" placeholder="0.00" className='input w-full text-lg text-white pl-1 p-1 outline-none rounded-md' onChange={(e) => setAmount(e.target.value)}/>
						</div>
					</div>

					<div id="Details" className='space-y-1 py-1'>
						<h3 className='text-2xl'>Details</h3>
						<input type="text"  className='input w-full text-lg text-white pl-2 p-1 outline-none rounded-md' onChange={(e) => setDetails(e.target.value)}/>
					</div>

					<div className='w-full md:flex-row xsm:flex-col space-y-2 '>

						<div id="category" className='space-y-1 py-1'>
							<h3 className='text-2xl'>Category</h3>

							<details className="dropdown w-full p-2">
								<summary className=' text-xl font-light m-1 btn flex w-full'>{category !== "" ? category : "Please Choose a Category"}</summary>
								<ul className='shadow p-2 menu dropdown-content z-[1] bg-base-100 rounded-box w-full tex-xl '>

									{
										records && records.map((C) => (
											<li><p className="text-lg hover:text-accent" onClick={() => saveCategory(C.category)}>{C.category}</p></li>
										))
									}
									<li><input type="text" placeholder="new Category" className='flex border border-accent text-xl' onChange={(e) => setCategory(e.target.value)}/></li>
								</ul>
							</details>

						</div>

					</div>
					
					
					<div id="class" className='flex justify-around py-1 mt-4'>
						<button onClick={() => classFunc("income")}  className={`border border-green-600  py-2 px-4 rounded-md text-xl ${incomeClass ? "bg-green-600 text-white":" text-green-600"}`}>Income</button>
						<button onClick={() => classFunc("expense")} className={`border border-red-600 py-2 px-4 rounded-md text-xl ${expenseClass ? "bg-red-600 border-green-600 outline-none text-white":"border-red-600 text-red-600 "}`}>Expense</button>
					</div>

					<div id="Date" className='space-y-2 py-1'>
						<h3 className='text-2xl'>Date</h3>
						<input type="date"  className='input w-full text-lg text-white pl-2 p-1 outline-none rounded-md' onChange={(e) => setDate(e.target.value)}/>
					</div>

					<div className='flex w-full justify-center py-1'>
						<button className="py-2 px-4 text-2xl border border-white rounded-md hover:bg-white hover:text-black" onClick={saveTransaction}>Submit</button>
					</div>

					{/* ====================== Toast ====================== */}
					<div className="taost toast-top toast-start">
						<div className='alert alert-success'>
							<span>
								Transaction arrived successfully
							</span>

						</div>
					</div>
					

					
				</div>
			</div>
			
			<hr className='text-white my-2 mb-4 xsm:block md:hidden'/>

			{/* =================================================================================================  */}
			{/* =========================================  Transactions	=========================================  */}
			{/* =================================================================================================  */}

			<div id="transactions" className='xsm:w-full lg:w-1/2'>
				<div id="header" className='flex flex-col justify-center font-light text-2xl'>

					<section>
						<div id="header" className='flex justify-center font-light text-2xl'>
							<h1 className='text-black bg-white text-3xl border border-white rounded-md px-4 py-2'>Transactions</h1>
						</div>
					</section>

					<section className='brder border-hite rounded-md flex mx-4 justify-around my-2 py-2'>
						<input type="text" className="input w-1/4 text-white pl-1 rounded-md" placeholder='Day' onChange={(e) => setFilterDay(e.target.value)}/>
						
						<details className='dropdown'>
							<summary className='text-xl font-light m-1 btn flex w-full'>{filterMonth !== "" ? filterMonth: "Month"}</summary>
							<ul className="shadow p-2 menu dropdown-content z-[1] bg-base-100 rounded-box text-xl">
								<li><p className='text-lg' onClick={() => setFilterMonth("Jan")}>January</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Feb")}>February</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("March")}>March</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Apr")}>April</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("May")}>May</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("June")}>June</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("July")}>July</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Aug")}>August</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Sept")}>Sept</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Oct")}>October</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Nov")}>November</p></li>
								<li><p className='text-lg' onClick={() => setFilterMonth("Dec")}>December</p></li>
								<li></li>
							</ul>
						</details>
						
	
						<input type="text" className="input w-1/4  text-white pl-1 rounded-md" placeholder='2024' onChange={(e) => setFilterYear(e.target.value)}/>
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
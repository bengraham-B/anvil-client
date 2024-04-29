"use client"
import React, { useEffect, useState } from 'react'

export default function Transactions() {
    //^ Setting state variables 
    const [transactions, setTransactions] = useState<any[]>([]) //^ This state array will store the transactions recieved from the server 

    //^ State Variables which the user edits
    const [detailsState, setDetails] = useState<string>("")
    const [amountState, setAmount] = useState<string>("")
    const [categoryState, setCategory] = useState<string>("")
    const [_classState, setClass] =  useState<string>("")
    const [dateState, setDate] = useState<any>()
 
    

    const saveEdit = async (e:React.FormEvent, transaction_id:string, details:string, amount:string, category:string,  _class:string, date:Date) => {
        console.log("<><><><><><><>", date)
        e.preventDefault() //^ This prevents the modal from closes when the users saves their updated values, will only save if the server returns a success.
        let editDetails:string = details
        let editAmount = amount 
        let editcategory = category 
        let editClass = _class
        let editDate:string = "date"

        console.log("Date: ", date, editDate)

        if (detailsState !== ""){
            editDetails = detailsState
        } 

        if (amountState !== ""){
            editAmount = amountState
        }

        if (categoryState !== ""){
            editcategory = categoryState
        }

        if (_classState !== "") {
            editClass = _classState
        }

        if (dateState !== "" || dateState === null){
            editDate = dateState
        }



        console.log(editDetails)
        console.log(editAmount)
        console.log(editcategory)
        console.log(editClass)
        console.log(editDate)



        try {
            const response = await fetch(`http://127.0.0.1:5000/edit_transaction`, {
                method: "POST",
                body: JSON.stringify({
                    user_id: "bn-33",
                    transaction_id: transaction_id,
                    details: editDetails,
                    category: editcategory,
                    amount: editAmount,
                    class: editClass,
                    date: editDate,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            console.log(data)

            if(response.ok){
                if (document){
                    (document.getElementById(`modal_edit_${transaction_id}`) as HTMLFormElement).close()
                }

                //^ Setting all the edit state varibles back to null/empty strings
                setDetails("")
                setAmount("")
                setCategory("")
                setClass("")
                setDate("")
                
                fetchTransactions()
            }
        } catch (error) {
            console.log(error)
        }
    }


    //^ Making API Calls 
    const fetchTransactions = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/get_transactions`, {
                    method: "POST",
                    body: JSON.stringify({
                        user_id: "bn-33"
                    }),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
    
            const data = await response.json()
    
            if (response.ok){
                setTransactions(data.records) //^ The records object is the array contain the trnasactions. 
            }
    
            else {
                console.log("Error fetching records")
            }
            
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        fetchTransactions()
    },[])
  return (
    <main>
        <section id="header" className='flex justify-center align-middle py-2'>
            <h1 className='text-3xl font-light'>Transactions</h1>
        </section>

        <section id="filter" className='flex flex-row justify-around py-2'>

            <div id="day-filter">
                <input type="text" placeholder='24' className='input' />
            </div>

            <div id="month-filter">
                <input type="text" placeholder='June' className='input' />
            </div>

            <div id="year-filter">
                <input type="text" placeholder='2023' className='input' />
            </div>

            <div id="category-filter">
                <input type="text" placeholder='Select Catgeory' className='input' />
            </div>

        </section>

        <section id="table">
            <div className="overflow-x-auto">
                <table className="table table-xs">

                    <thead>
                        <tr className='text-white font-light text-2xl text-center'>
                            <td>Nr</td>
                            <td>Details</td>
                            <td>Category</td>
                            <td>Amount</td>
                            <td>Date</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>

                    <tbody>
                            {/* Maps overs the users transactions and adds them to the table */}
                            {
                                transactions && transactions.map((T, i) => (
                                    <tr key={T.id} className='text-blue-500 font-light text-2xl text-center'>
                                        <td className='text-lg'>{i+1}</td>
                                        <td className='text-lg'>{T.details}</td>
                                        <td className='text-lg'>{T.category}</td>
                                        <td className='text-lg'>R{T.amount}</td>
                                        <td className='text-lg'>{T.day} {T.month} {T.year}</td>

                                        <td className='text-lg'>
                                            <button onClick={() => {
                                                if(document) {
                                                    (document.getElementById(`modal_edit_${T.id}`) as HTMLFormElement).showModal()
                                                }}
                                                } className='btn btn-outline btn-accent'>Edit</button>
                                            <dialog id={`modal_edit_${T.id}`} className='modal'>
                                                <div className="modal-box">
                                                    <h3 className="font-light text-3xl py-2">Edit Transaction</h3>
                                                    <div className='flex flex-col space-y-4'>

                                                        <div className='flex flex-col text-white font-light tet-xl'>
                                                            <h1 className='flex justify-start'>Details</h1>
                                                            <input type="text" className="input input-bordered input-accent"  placeholder={T.details} onChange={(e) => setDetails(e.target.value)}/>
                                                        </div>

                                                        <div className='flex flex-col text-white font-light tet-xl'>
                                                            <h1 className='flex justify-start'>Category</h1>
                                                            <input type="text" className="input input-bordered input-accent"  placeholder={T.category} onChange={(e) => setCategory(e.target.value)}/>
                                                        </div>

                                                        <div className='flex flex-col text-white font-light tet-xl'>
                                                            <h1 className='flex justify-start'>Amount</h1>
                                                            <input type="number" className="input input-bordered input-accent"  placeholder={T.amount} onChange={(e) => setAmount(e.target.value)}/>
                                                        </div>

                                                        <div className='flex flex-row justify-around space-x-6 text-white font-light tet-xl'>
                                                            <button className="btn btn-outline w-1/3 btn-success">Income</button>
                                                            <button className="btn btn-outline w-1/3 btn-error">Expense</button>
                                                        </div>
                                                       
                                                        <div className='flex flex-col text-white font-light tet-xl'>
                                                            <h1 className='flex justify-start'>Date</h1>
                                                            <input type="date" className="input input-bordered input-accent"  placeholder={T.date} onChange={(e) => setDate(e.target.value)}/>
                                                        </div>

                                                    </div>

                                                    <div className='modal-action'>
                                                        <form method="dialog" className='flex w-full justify-around'>
                                                                <button className='btn btn-error'>Close</button>
                                                                <button onClick={(e) => saveEdit(e, T.id, T.details, T.amount, T.category, T.class, T.date.toISOString())} className='btn btn-accent'>Save</button>
                                                        </form>
                                                    </div>
                                                </div>

                                            </dialog>
                                        </td>

                                        <td className='text-lg'><button className='btn btn-outline btn-error'>Delete</button></td>
                                    </tr>
                                ))
                            }
                   </tbody>
                    
                </table>
            </div>
        </section>

    </main>

  )
}

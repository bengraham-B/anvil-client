"use client"
import React from 'react'

export default function Transactions() {
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
                        <tr className='text-white font-light text-lg text-center'>
                            <td>Nr</td>
                            <td>Details</td>
                            <td>Category</td>
                            <td>Amount</td>
                            <td>Date</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='text-blue-500 font-light text-2xl text-center'>
                            <td>1</td>
                            <td className='text-lg'>Bought sweets at work</td>
                            <td>Sweets</td>
                            <td>R34</td>
                            <td>23 June 2023</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        </section>

    </main>

  )
}

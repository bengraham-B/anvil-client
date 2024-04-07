import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex justify-around m-4 xsm:flex-wrap'>
            <span className=' xsm:text-lg xsm:px-2 xsm:py-1 xsm:mx-2 px-4 py-2 bg-blue-600 rounded-md text-white text-xl'>
                <Link href="/addTransactions" className='xsm:text-lg'>Add Transaction</Link>
            </span>
            <span className='xsm:text-lg xsm:px-2 xsm:py-1 xsm:mx-2 px-4 py-2 bg-blue-600 rounded-md text-white text-xl'>
                <Link href="/transactions" className='xsm:text-lg'>Transactions</Link>
            </span>
            <span className='xsm:text-lg xsm:px-2 xsm:py-1 xsm:mx-2 xsm:my-2 px-4 py-2 bg-blue-600 rounded-md text-white text-xl'>
                <Link href="/transactions" className='xsm:text-lg'>CSV</Link>
            </span>
        </nav>
    )
}

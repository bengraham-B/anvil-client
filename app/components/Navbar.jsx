import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='flex justify-around m-4'>
            <span className='px-4 py-2 bg-blue-600 rounded-md text-white text-xl'>
                <Link href="/addTransactions">Add Transaction</Link>
            </span>
            <span className='px-4 py-2 bg-blue-600 rounded-md text-white text-xl'>
                <Link href="/transactions">Transaction</Link>
            </span>
        </nav>
    )
}

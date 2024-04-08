import React from 'react'
import Link from 'next/link'

export default function page() {
    return (
        <section className='flex flex-col space-y-4'>
            <div className='flex text-center justify-center'>
                <Link href="/transactions" className='text-white text-3xl px-4 py-2 bg-blue-600 rounded-md'>History</Link>
            </div>
            <div className='flex text-center justify-center'>
                <Link href="/transactions" className='text-white text-3xl px-4 py-2 bg-blue-600'>History</Link>
            </div>
        </section>
    )
}

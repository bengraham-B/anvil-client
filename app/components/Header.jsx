"use client"
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <main className='w-full flex justify-around bg-blue-600 text-white py-4 '>
        <Link href="/" className='text-4xl hover:text-orange-500'>Home</Link>
        <h1 className='text-4xl'>Anvil Finance Tracker</h1>
		<h1></h1>
    </main>
  )
}

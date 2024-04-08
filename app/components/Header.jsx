"use client"
import React from 'react'
import Link from 'next/link'

export default function Header() {
	return (
		<main className='w-full flex xsm:bg-purple-800 sm:bg-red-900 md:bg-green-600 justify-around bg-blue-600  text-white py-4 '>
			<Link href="/" className='xsm:text-lg text-3xl hover:text-orange-500'>Home</Link>
			<h1 className='xsm:text-xl text-4xl'>Anvil Finance Tracker</h1>
			<h1 className='text-3xl text-white'>
				<Link href="/burger">+</Link>
			</h1>
		</main>
	)
}

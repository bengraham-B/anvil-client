"use client"
import React from 'react'
import Link from 'next/link'

export default function Home() {
  	return (
		<main>
			<section id="navigation-container" className='m-6 flex justify-around'>
				<Link href="/transactions" className="rounded-md py-2 px-4 bg-blue-600 text-white text-xl">Insert Transaction</Link>
				<Link href="/transactions" className="rounded-md py-2 px-4 bg-blue-600 text-white text-xl">Transactions</Link>
			</section>
		</main>
  	)
}

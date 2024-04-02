"use client"
import React from 'react'
import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<section id="">
				<div className="text-purple-600">YYY</div>
				<Link href="/home/transactions" className="rounded-md py-2 px-4 bg-blue-600 text-red-400">Insert Transaction</Link>
			</section>
		</main>
	)
}

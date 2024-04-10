"use client"
import React, {useState} from 'react'
import Link from 'next/link'



export default function Header() {
	const [menu, showMenu] = useState(false)
    return (
        <main className='flex align-middle bg-white text-black justify-between py-4 px-4'>

			<div id="left" className='flex align-middle text-center justify-center'>
				<span className='flex align-middle justify-center text-center'>
					<Link href="/"><h1 className='xsm:text-4xl text-7xl'>Anvil</h1></Link>
				</span>
			</div>

			<div id="right" className='flex flex-row justify-around space-x-6 px-4'>
				<span className='flex align-middle justify-center text-center xsm:hidden md:inline'>
					<Link href="/" className='flex align-middle text-center justify-center text-lg border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white'>Add Transaction</Link>
				</span>
				<span className='flex align-middle justify-center text-center xsm:hidden md:inline'>
					<Link href="/" className='flex align-middle text-center justify-center text-lg border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white'>History</Link>
				</span>
				<span className='flex align-middle justify-center text-center xsm:hidden md:inline'>
					<Link href="/" className='flex align-middle text-center justify-center text-lg border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white'>CSV</Link>
				</span>


				<span className='flex align-middle justify-center text-center md:hidden xsm:inline'>
					<Link href="/Menu" className='text-2xl border border-black rounded-md px-4 py-2 hover:bg-black hover:text-white'>+</Link>
				</span>
			</div>
			
		</main>
    )
}
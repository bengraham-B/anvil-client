import Link from 'next/link'
import React from 'react'

const Menu: React.FC<{root: string, link: string}> = ({root, link}) => {
    return (
        <section className="flex text-center justify-center">
            <Link href={link} className='border border-white text-2xl rounded-md w-3/4 py-2'>{root}</Link>
        </section>
    )
}

export default Menu
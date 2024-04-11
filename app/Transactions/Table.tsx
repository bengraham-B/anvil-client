import React from 'react'

export default function Table() {
    return (
        <section className='overflow-x-auto'>
            <table className='w-full table-auto justify-around'>
                <tbody className=''>
                    <tr>
                        <th className='px-6 py-3 text-center'>Company</th>
                        <th className='px-6 py-3 text-center'>Contact</th> 
                        <th className='px-6 py-3 text-center'>Country</th>
                        <th className='px-6 py-3 text-center'>Country</th>
                    </tr>
                    <tr>
                        <td className='px-6 py-3 text-center'>Alfreds Futterkiste</td>
                        <td className='px-6 py-3 text-center'>Maria Anders</td> 
                        <td className='px-6 py-3 text-center'>Germany</td>
                        <td className='px-6 py-3 text-center'>Germany</td>
                    </tr>
                    <tr>
                        <td className='px-6 py-3 text-center'>Centro comercial Moctezuma</td>
                        <td className='px-6 py-3 text-center'>Francisco Chang</td> 
                        <td className='px-6 py-3 text-center'>Mexico</td>
                        <td className='px-6 py-3 text-center'>Mexico</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
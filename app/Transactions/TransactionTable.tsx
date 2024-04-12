import React from 'react';

export default function TransactionTable() {
    return (
        <div className='flex justify-center space-x-4 rounded-md p-2 xsm:hidden lg:flex'>
            <table className='table-auto  outline outline-1 rounded-md p-2'>
                <tbody className='p-2 space-y-4'>
                    <tr className='p-2 bg-white text-black rounded-md space-x-4'>
                        <th className='px-12 text-center'>Nr</th>
                        <th className='px-12 text-center'>Details</th>
                        <th className='px-12 text-center'>Amount</th>
                        <th className='px-12 text-center'>Category</th>
                        <th className='px-12 text-center'>Date</th>
						<th></th>
						<th></th>
                    </tr>
                    <tr>
                        <td className='px-12 py-2 text-center'>1</td>
                        <td className='px-12 py-2 text-center'>Lunch at Work on a rainy day</td>
                        <td className='px-12 py-2 text-center'>R45.90</td>
                        <td className='px-12 py-2 text-center'>Sweets</td>
                        <td className='px-12 py-2 text-center'>24 May 2025</td>
						<td className='px-6  py-2 text-center'><button className='px-4 py-1 bg-blue-600 rounded-md'>Edit</button></td>
						<td className='px-6  py-2 text-center'><button className='px-4 py-1 bg-red-600 rounded-md'>Delete</button></td>
                    </tr>
                    <tr>
						<td className='px-12 py-2 text-center'>2</td>
                        <td className='px-12 py-2 text-center'>Lunch at Work on a rainy day</td>
                        <td className='px-12 py-2 text-center'>R45.90</td>
                        <td className='px-12 py-2 text-center'>Sweets</td>
                        <td className='px-12 py-2 text-center'>24 May 2025</td>
						<td className='px-6 py-2 text-center'><button className='px-4 py-1 bg-blue-600 rounded-md'>Edit</button></td>
						<td className='px-6 py-2 text-center'><button className='px-4 py-1 bg-red-600 rounded-md'>Delete</button></td>
                    </tr>
                </tbody>
            </table>    
        </div>
    );
}

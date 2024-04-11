import React from 'react';

export default function TransactionSM() {
    return (
        <div className='flex justify-center space-x-4 rounded-md'>
            <table className='table-auto  border-red-400 outline outline-1 rounded-md p-2'>
                <tbody>
                    <tr className='p-2 bg-white text-black rounded-md'>
                        <th className='px-12 text-center'>Details</th>
                        <th className='px-12 text-center'>Amount</th>
                        <th className='px-12 text-center'>Category</th>
                        <th className='px-12 text-center'>Date</th>
                    </tr>
                    <tr>
                        <td className='px-12 text-center'>Lunch at Work on a rainy day</td>
                        <td className='px-12 text-center'>R45.90</td>
                        <td className='px-12 text-center'>Sweets</td>
                        <td className='px-12 text-center'>24 May 2025</td>
                    </tr>
                    <tr>
                        <td className='px-12 text-center'>Lunch at Work on a rainy day</td>
                        <td className='px-12 text-center'>R45.90</td>
                        <td className='px-12 text-center'>Sweets</td>
                        <td className='px-12 text-center'>24 May 2025</td>
                    </tr>
                </tbody>
            </table>    
        </div>
    );
}

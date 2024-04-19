import React from 'react';

export default function TransactionComp() {
    return (
        <main className='flex justify-center flex-col space-y-4 border border-white rounded-md'>
        
            <section className='flex justify-between px-4 w-full bg-red-400'>
                <div>
                    <h1>Sweets</h1>
                </div>
                <div>
                    <h1>24 June 2023</h1>
                </div>
            </section>

            <section className='flex flex-row w-full pl-4 bg-yellow-600'>
                <div className='w-1/2'>
                    <h1 className='bg-white w-full text-black'>Details</h1>
                    <div className="w-full flex flex-wrap">
                        <p className='bg-red-600 whitespace-normal'>
							Cookie and Coffee :)
						</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <h1 className='bg-blue-400 text-black'>Details</h1>
                    <p>ss</p>
                </div>
            </section>



        </main>
    );
}

import React from 'react';

import TransactionSM from './TransactionSM';

export default function Page() {
    return (
        <main>
            <section className='flex justify-center py-4'>
                <h1 className='text-4xl'>Transactions</h1>
            </section>

			<TransactionSM/>
			
        </main>
    );
}

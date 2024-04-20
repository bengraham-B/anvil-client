import React from 'react';

import TransactionTable from './TransactionTable'; //~ For large screens - Table of transactions
import TransactionComp from './TransactionComp'; //~ For small screens - Component of Each transaction

export default function Page() {
    return (
        <main>
            <section className='flex justify-center py-4'>
                <h1 className='text-4xl'>Transactions</h1>
            </section>

			<TransactionTable/>
			<TransactionComp amount={0} details={''} category={''} class_={'income'} date={"undefined"} />

        </main>
    );
}

import React from 'react'

//^ Import Components
import AddTransactionPC from './AddTransactionPC' //~ This is the view for large screens

export default function page() {
  return (
    <div>
		<div className='xsm:hidden lg:block'>
        	<AddTransactionPC/>
		</div>
    </div>
  )
}
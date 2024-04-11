import React from 'react'

//& Import Components
import Menu from './Menu'

export default function page() {
    return (
        <div className='p-2 space-y-6 py-8'>
            <Menu link={"/AddTransaction"} root={"Add Transaction"}/>
            <Menu link={"/Transactions"} root={"Transactions"}/>
            <Menu link={"/csv"} root={"CSV"}/>
            <Menu link={"/"} root={"Home"}/>
        </div>
    )
}

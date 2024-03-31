import React from 'react'

//^ Importing Compoents
import Home from './home/page'

//& Importing functions
import { apiTest } from './functions/api'

apiTest("")
apiTest("/test")
apiTest("/insert")


export default function page() {
	return (
		<div>
			
			<Home/>
		</div>
	)
}

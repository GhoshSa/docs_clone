import Link from 'next/link'
import React from 'react'

const Home = () => {
  return ( 
    <div className="flex min-h-screen items-center justify-center">
      Click <Link href="/documents/1234"><span className='text-blue-700 underline'>&nbsp;here&nbsp;</span></Link> to go to document id
    </div>
  )
}
 
export default Home
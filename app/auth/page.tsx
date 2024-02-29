import Link from 'next/link'
import React from 'react'

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center  w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="my-10">Auth page</h1>
      <Link href="/auth/signUp" className="border border-fuchsia-950 py-2 px-4">SignUp page</Link>
    </div>
  )
}

export default Auth
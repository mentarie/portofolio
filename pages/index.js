import Link from 'next/link'
import { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <h1>Home</h1>

      <Link href="/about">About</Link>
    </Fragment>
  )
}

export default Home
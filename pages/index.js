import Link from 'next/link'
import { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="container">
          <Link href="/"><a className="logo">Mentari</a></Link>
          <ul className="nav-links">
            <li><Link href="/"><a className="nav-item">Home</a></Link></li>
            <li><Link href="/about"><a className="nav-item">About</a></Link></li>
            <li><Link href="/project"><a className="nav-item">Projects</a></Link></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Home
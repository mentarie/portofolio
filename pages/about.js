import Link from 'next/link'
import { Fragment } from 'react'

import Navbar from '../components/navbar'

function About(){
	return(
		<Fragment>
			<Navbar/>
			<section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About Me</h1>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
		</Fragment>
	)
}

export default About
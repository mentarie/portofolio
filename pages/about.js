import { Fragment } from 'react'

import Navbar from '../components/navbar'
import Head from 'next/head'

function About(){
	return(
		<Fragment>
      <Head>
        <title>About</title>
        <link rel="icon" href="/pp-putih.png" />
      </Head>
			<Navbar/>
			<section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About Me</h1>
            <p className="description">Hello, I'm Mentari Enggar Rizki but you can call me Aii. Currently I'm studying Computer Science major at BINUS University. Experienced 1+ years as junior Backend Developer with JavaScript and Go programming also worked for 1+ years as a System Analyst. </p>
          </div>
        </div>
      </section>
		</Fragment>
	)
}

export default About
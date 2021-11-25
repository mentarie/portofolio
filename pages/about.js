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
            <p className="paragraph">Hello, my name is Mentari E Rizki. <br></br> Currently, I&apos;m studying at BINUS University and taking the Computer Science major. Looking back in my first job, I started it with an internship as a junior backend developer role used the PHP programming language, the CodeIgniter framework, and used PostgreSQL as the database. Afterward, I learn about the MERN stack technology used MongoDB, ExpressJS, React, and NodeJS. Now, I&apos;m learning Go programming language as well as MongoDB and eagerly deepening my knowledge in writing clean, secure, test-driven, modular, and easy maintenance codes.</p>
          </div>
        </div>
      </section>
		</Fragment>
	)
}

export default About
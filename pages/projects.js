import { Fragment } from 'react'

import Navbar from '../components/navbar'
import Head from 'next/head'

function Projects(){
	return(
		<Fragment>
			<Head>
        <title>Projects</title>
				<link rel="icon" href="/pp-putih.png" />
      </Head>
			<Navbar/>
			<section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">My Projects</h1>
            <p className="description">Lorem ipsum dolor sit amet.</p>

						<div className="project-wrapper">
							<div className="project-item">
								<img src="/portfolio1.png" className="project-image" alt="project 1"/>
								<h4 className="project-name">Gallery Apps</h4>
								<div className="project-category">Mobile Dev</div>
							</div>
							<div className="project-item">
								<img src="/portfolio2.jpg" className="project-image" alt="project 2"/>
								<h4 className="project-name">Gallery Apps</h4>
								<div className="project-category">Mobile Dev</div>
							</div>
						</div>
          </div>
        </div>
      </section>
		</Fragment>
	)
}

export default Projects
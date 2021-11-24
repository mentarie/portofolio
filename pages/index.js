import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'

import profilePic from '../public/pp.svg'
import Navbar from '../components/navbar'
import Head from 'next/head'

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar/>
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, saya Mentari E Rizki</h1>
            <p className="description">Saya seorang backend developer</p>

            <Link href="/projects"><a className="cta">Portofolio</a></Link>
          </div>
          <div className="image-wrapper">
            <Image src={profilePic} alt="profile picture"/>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home
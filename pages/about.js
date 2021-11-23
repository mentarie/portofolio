import Link from 'next/link'
import { Fragment } from 'react'

function About(){
    return(
        <Fragment>
            <h1>About</h1>
            <Link href="/">Home</Link>
        </Fragment>
    )
}

export default About
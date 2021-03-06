import Link from 'next/link'
import {withRouter} from 'next/router'

function Navbar({router}) {
	const navs = [
		{id: 1, text: 'Home', href: '/'},
		{id: 2, text: 'About', href: '/about'},
		{id: 3, text: 'Projects', href: '/projects'},
		{id: 4, text: 'Journey', href: '/journey'},
	]

	return(
		<nav className="navbar">
			<div className="container">
					<Link href="/"><a className="logo">Mentari.</a></Link>
					
					<ul className="nav-links">
						{
							navs.map(nav => (
								<li key={nav.id}><Link href={nav.href}><a className={`nav-item ${router.pathname == nav.href?'active':''}`}>{nav.text}</a></Link></li>
							))
						}
					</ul>

			</div>
		</nav>
	)
}

export default withRouter(Navbar)
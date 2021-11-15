import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
	const [active, setActive] = useState(false)

	const handleClick = () => {
		setActive(!active)
	}

	const handleClickNav = () => {
		setActive(false)
	}

	const navLinks = [
		{ link: "#about", text: "About" },
		{ link: "#events", text: "Events" },
		{ link: "#members", text: "Members" },
		{ link: "#join", text: "Join Us" },
		{ link: "#contact", text: "Contact" },
	]

	return (
		<div>
			<header className="fixed w-screen top-0 z-10">
				<nav
					className={`flex items-center flex-wrap bg-green-300 lg:py-0 py-1`}>
					<Link href="#home">
						<a
							className="inline-flex items-center mx-2 px-10"
							onClick={handleClick}>
							<span className="text-xl text-white font-bold uppercase tracking-wide">
								UP IECEP
							</span>
						</a>
					</Link>
					<button
						className="inline-flex hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none mx-8 p-1.5"
						onClick={handleClick}>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
					<div
						className={`${
							active ? "" : "hidden"
						}  w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
						<div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto lg:mx-8 mx-0">
							{navLinks.map((navLink, index) => {
								return (
									<Link href={navLink.link} key={index}>
										<a
											className=" lg:inline-flex lg:w-auto w-full px-4 py-3 text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
											onClick={handleClickNav}>
											<span className="uppercase">
												{navLink.text}
											</span>
										</a>
									</Link>
								)
							})}
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Navbar

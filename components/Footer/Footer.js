import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<footer className="w-full flex flex-col justify-center lg:space-y-10 space-y-4">
			<div className="w-full h-full flex flex-col items-center justify-start">
				<div className="h-max lg:w-1/5 w-2/5 grid grid-cols-3 grid-flow-row lg:gap-x-2 gap-x-20 gap-y-5">
					<div className="w-full h-full flex flex-col items-center justify-start">
						<Link href="https://www.facebook.com/IECEPUPD/">
							<a target="_blank">
								<button className="p-2 lg:text-3xl text-2xl text-white bg-gray-600 rounded-full hover:bg-gray-900">
									<FaFacebook />
								</button>
							</a>
						</Link>
					</div>
					<div className="w-full h-full flex flex-col items-center justify-start">
						<Link href="https://twitter.com/upiecep">
							<a target="_blank">
								<button className="p-2 lg:text-3xl text-2xl text-white bg-gray-600 rounded-full hover:bg-gray-900">
									<FaTwitter />
								</button>
							</a>
						</Link>
					</div>
					<div className="w-full h-full flex flex-col items-center justify-start ">
						<Link href="https://www.linkedin.com/company/institute-of-electronics-engineers-of-the-philippines-up-diliman/?originalSubdomain=ph">
							<a target="_blank">
								<button className="p-2 lg:text-3xl text-2xl text-white bg-gray-600 rounded-full hover:bg-gray-900">
									<FaLinkedin />
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className=" box-content flex lg:flex-row flex-col items-center justify-around bg-dark-maroon p-4">
				<span className="lg:text-sm text-xs text-center text-white lg:mb-0 mb-4">
					Copyright © 2021-2022 Institute of Electronics Engineers of
					the Philippines - UP Student Chapter (UP IECEP)
				</span>
				<div className="lg:w-2/12 w-8/12 box-content flex flex-row items-center justify-around">
					<div>
						<Link href="https://nextjs.org/">
							<a target="_blank">
								<Image
									src="/next-js.svg"
									height={30}
									width={60}
								/>
							</a>
						</Link>
					</div>

					<div>
						<Link href="https://tailwindcss.com/">
							<a target="_blank">
								<Image
									src="/tailwind-css.svg"
									height={30}
									width={60}
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer

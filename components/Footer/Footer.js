import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="w-full flex flex-col justify-center space-y-10">
			<div className="w-full h-full flex flex-col items-center justify-start">
				<div className="h-max lg:w-1/5 w-2/5 grid grid-cols-3 grid-flow-row gap-x-1 gap-y-5">
					<div className="w-full h-full flex flex-col items-center justify-start">
						<Link href="https://www.facebook.com/IECEPUPD/">
							<a target="_blank">
								<button className="p-2 text-3xl text-white bg-gray-600 rounded-full hover:bg-gray-900">
									<FaFacebook />
								</button>
							</a>
						</Link>
					</div>
					<div className="w-full h-full flex flex-col items-center justify-start">
						<Link href="https://twitter.com/upiecep">
							<a target="_blank">
								<button className="p-2 text-3xl text-white bg-gray-600 rounded-full hover:bg-gray-900">
									<FaTwitter />
								</button>
							</a>
						</Link>
					</div>
					<div className="w-full h-full flex flex-col items-center justify-start ">
						<Link href="https://www.linkedin.com/company/institute-of-electronics-engineers-of-the-philippines-up-diliman/?originalSubdomain=ph">
							<a target="_blank">
								<button className="p-2 text-3xl text-white bg-gray-600 rounded-full hover:bg-gray-900">
									<FaLinkedin />
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<span className="w-full text-sm text-center text-white bg-green-900 p-4">
				Copyright © 2021-2022 Institute of Electronics Engineers of the
				Philippines - UP Student Chapter (UP IECEP)
			</span>
		</footer>
	)
}

export default Footer

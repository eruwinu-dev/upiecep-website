import Link from "next/link"
import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const JoinUsSection = () => {
	const joinImages = [
		{ src: "/join1.png", alt: "join1" },
		{ src: "/join2.png", alt: "join2" },
		{ src: "/join3.png", alt: "join3" },
		{ src: "/join4.png", alt: "join4" },
	]

	return (
		<div
			className="box-border h-max min-h-screen flex flex-grow flex-col pt-10 justify-start ..."
			id="join">
			<div className="h-max grid lg:grid-cols-2 grid-cols-1 grid-flow-row">
				<div className="box-content relative w-full h-screen flex flex-col items-center justify-center bg-gray-300">
					<div className=" w-full h-full mb:0">
						<Slider
							autoplay={true}
							speed={2000}
							autoplaySpeed={5000}
							arrows={false}
							infinite={true}
							centerPadding="0px"
							pauseOnHover={false}>
							{joinImages.map((image, index) => (
								<div className="w-full h-5/6" key={index}>
									<Image
										src={image.src}
										alt={image.alt}
										title=""
										width="100vw"
										height="80%"
										layout="responsive"
										objectFit="cover"
										className="filter contrast-100 brightness-50"
									/>
								</div>
							))}
						</Slider>
					</div>
					<div className="w-full h-full flex flex-col items-center justify-start bg-gray-300 space-y-4 py-16">
						<p className="w-full text-lg text-center px-10">
							Applications are open{" "}
							<strong>every semester</strong> for bonafide BS ECE
							students of University of the Philippines Diliman.
						</p>
						<p className="w-full text-lg text-center px-10">
							For more information, contact inte@upiecep.org or
							follow the official{" "}
							<Link href="https://www.facebook.com/IECEPUPD/">
								<a target="_blank">
									<strong className="hover:underline">
										UP IECEP Facebook page
									</strong>
								</a>
							</Link>
							.
						</p>
					</div>
				</div>
				<div className="w-full h-screen flex flex-col items-center justify-center bg-red-50">
					<span className="w-full text-4xl text-center font-bold mb-10">
						Join Us!
					</span>
				</div>
			</div>
		</div>
	)
}

export default JoinUsSection

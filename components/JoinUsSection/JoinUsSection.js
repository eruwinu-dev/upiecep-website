import Link from "next/link"
import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import JoinUsForm from "./JoinUsForm/JoinUsForm"

const JoinUsSection = () => {
	const joinImages = [
		{ src: "/join1.png", alt: "join1" },
		{ src: "/join2.png", alt: "join2" },
		{ src: "/join3.png", alt: "join3" },
		{ src: "/join4.png", alt: "join4" },
	]

	return (
		<div
			className="box-border h-max min-h-screen flex flex-grow flex-col lg:pt-10 pt-4 justify-start ..."
			id="join">
			<div className="grid lg:grid-cols-2 grid-cols-1 grid-flow-row">
				<div className="box-content relative w-full flex flex-col items-center justify-start bg-off-white lg:order-1 order-2">
					<div className="w-full mb:0">
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
					<div className=" bg-off-white h-full p-6 flex flex-col items-center justify-center lg:space-y-4 space-y-0">
						<p className="w-full text-base text-center">
							Applications are open{" "}
							<strong>every semester</strong> for bonafide BS ECE
							students of University of the Philippines Diliman.
						</p>
						<p className="w-full text-base text-center">
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
				<div className="w-full h-screen flex flex-col items-center justify-center bg-light-pink lg:order-2 order-1">
					<span className="w-full lg:text-4xl text-2xl text-center font-bold lg:mb-4 mb-2">
						Join Us!
					</span>
					<JoinUsForm />
				</div>
			</div>
		</div>
	)
}

export default JoinUsSection

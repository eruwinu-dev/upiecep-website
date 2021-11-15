import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import Image from "next/image"

const HomeSection = () => {
	const carouselImages = [
		{ src: "/home1.png", alt: "home1" },
		{ src: "/home2.png", alt: "home2" },
		{ src: "/home3.png", alt: "home3" },
		{ src: "/home4.png", alt: "home4" },
	]

	return (
		<div
			className="box-content relative h-max-screen flex flex-col justify-center lg:pt-0 pt-10"
			id="home">
			<div className="box-content w-full h-full flex flex-col items-center justify-center mb-0">
				<div className="w-full">
					<Slider
						autoplay={true}
						speed={2000}
						autoplaySpeed={3000}
						infinite={true}
						slidesToShow={1}
						pauseOnHover={false}
						slidesToScroll={1}
						arrows={false}>
						{carouselImages.map((image, index) => (
							<Image
								src={image.src}
								alt={image.alt}
								title=""
								width="100vw"
								height="55vh"
								layout="responsive"
								objectFit="cover"
								className="filter contrast-100 brightness-50 rounded-t-xl"
							/>
						))}
					</Slider>
				</div>
			</div>
			<div className="lg:flex hidden absolute flex-col justify-center items-center w-1/2 h-1/2 top-1/4 right-1/4 text-white">
				<span className="text-6xl font-bold mb-4">We are UP IECEP</span>
				<span className="text-xl font-semibold mb-2">
					One Organization.
				</span>
				<span className="text-xl font-semibold mb-2">
					One Profession.
				</span>
				<span className="text-xl font-semibold mb-2">One Family.</span>
			</div>
		</div>
	)
}

export default HomeSection

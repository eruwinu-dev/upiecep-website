import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import CommiteeCard from "./CommitteeCard/CommitteeCard"

const MembersSection = () => {
	const execomm = [
		{ name: "President", position: "President" },
		{ name: "Acad VP", position: "Vice President for Academic Affairs" },
		{ name: "Exte VP", position: "Vice President for External Affairs" },
		{ name: "Inte VP", position: "Vice President for Internal Affairs" },
		{ name: "Log VP", position: "Vice President for Logistics" },
		{
			name: "Marfin VP",
			position: "Vice President for Marketing and Finance",
		},
		{ name: "Pub VP", position: "Vice President for Publicity" },
		{ name: "Sec VP", position: "Vice President for Secretariat" },
	]

	const committees = [
		{ image: "", name: "Academic Affairs", desc: "#acaddabest" },
		{ image: "", name: "External Affairs", desc: "#exte" },
		{ image: "", name: "Interal Affairs", desc: "#inte4lyf" },
		{ image: "", name: "Logistics", desc: "#logalldawey" },
		{ image: "", name: "Marketing and Finace", desc: "#dollar$" },
		{ image: "", name: "Publicity", desc: "#pubibo" },
		{ image: "", name: "Secretariat", desc: "#secsec" },
	]

	return (
		<div
			className="box-content flex flex-grow flex-col justify-center pt-20 pb-5"
			id="members">
			<div className="box-border flex flex-col justify-start items-center">
				<span className="text-4xl text-center font-bold mb-10">
					Committees
				</span>
				<div className="box-content w-9/12 h-full flex flex-col items-center justify-center mb-0">
					<div className="w-full">
						<Slider
							autoplay={true}
							speed={2000}
							autoplaySpeed={3000}
							infinite={true}
							slidesToShow={3}
							slidesToScroll={1}
							dots={true}
							arrows={false}
							responsive={[
								{
									breakpoint: 1124,
									settings: {
										slidesToShow: 2,
										slidesToScroll: 1,
										infinite: true,
									},
								},
								{
									breakpoint: 691,
									settings: {
										slidesToShow: 1,
										slidesToScroll: 1,
										infinite: true,
									},
								},
							]}>
							{committees.map((committee, index) => (
								<CommiteeCard
									key={index}
									image={committee.image}
									name={committee.name}
									desc={committee.desc}
								/>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className="box-border flex flex-grow flex-col justify-start items-center pt-20">
				<span className="text-4xl text-center font-bold mt-4 mb-4">
					The Executive Committee
				</span>
				<span className="w-full text-sm text-center font-semibold mb-14">
					A.Y. 2021-2022
				</span>
				<div className="lg:w-9/12 w-11/12 h-max grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row lg:gap-x-5 lg:gap-y-5 gap-x-20 gap-y-5">
					{execomm.map((member, index) => (
						<div
							className="w-full h-full flex flex-col items-center justify-center"
							key={index}>
							<div className="mb-4">
								<Image
									src="/profile.png"
									height={200}
									width={200}
									alt={member.position}
								/>
							</div>
							<span className="text-2xl text-center font-bold mb-3">
								{member.name}
							</span>
							<span className="text-base text-center mb-10">
								{member.position}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default MembersSection

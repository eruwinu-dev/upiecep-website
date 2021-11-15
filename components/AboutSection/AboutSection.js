import Image from "next/image"

const AboutSection = () => {
	return (
		<div
			className="box-border h-max min-h-screen flex flex-grow flex-col justify-start pt-20 ..."
			id="about">
			<span className="w-screen text-4xl text-center font-bold mb-10">
				What is UP IECEP?
			</span>
			<div className="h-max grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-x-20 gap-y-5 px-20">
				<div className="w-full h-full flex flex-col items-center justify-center lg:order-1">
					<p className="break-words text-justify mb-4 leading-loose ...">
						The Institute of Electronics Engineers of the
						Philippines - UP Student Chapter (UP IECEP) is a
						non-profit, non-political organization aimed at
						improving the academic performance of its members and to
						establish a common ground for BS ECE students in the
						Electrical and Electronics Engineering Institute.
					</p>
					<p className="break-words text-justify leading-loose">
						UP IECEP has also been the link of ECE students of the
						IECEP National Student Chapter which fosters the
						communication and interaction of ECE students from
						different universities in the Philippines.
					</p>
				</div>
				<div className="w-full h-full lg:order-2 order-2">
					<div className="mb-4 w-full h-full flex flex-col items-center justify-center">
						<Image
							src="/seminar.png"
							layout="intrinsic"
							width={600}
							height={400}
							alt="seminar"
						/>
					</div>
				</div>
				<div className="w-full h-full lg:order-3 order-4">
					<div className="mb-4 w-full h-full flex flex-col items-center justify-center">
						<Image
							src="/ga.png"
							layout="intrinsic"
							width={600}
							height={400}
							alt="ga"
						/>
					</div>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-center lg:order-4 order-3">
					<p className="break-words text-justify leading-loose ...">
						The Institute of Electronics Engineers of the
						Philippines - UP Student Chapter (UP IECEP) is a
						non-profit, non-political organization aimed at
						improving the academic performance of its members and to
						establish a common ground for BS ECE students in the
						Electrical and Electronics Engineering Institute.
					</p>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-center lg:order-6 order-5">
					<p className="break-words text-justify leading-loose ...">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
				<div className="w-full h-full lg:order-6 order-5">
					<div className="mb-4 w-full h-full flex flex-col items-center justify-center">
						<Image
							src="/booth.png"
							layout="intrinsic"
							width={600}
							height={400}
							alt="booth"
						/>
					</div>
				</div>
			</div>
			<div className="h-max grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-x-10 gap-y-5 lg:px-40 px-20 pt-10 lg:pb-4 pb-10">
				<div className="w-full h-full flex flex-col items-center justify-start...">
					<div className="">
						<Image
							src="/vision.png"
							width={100}
							height={100}
							layout="intrinsic"
							alt="vision"
							className="rounded-full"
						/>
					</div>
					<span className="w-full text-2xl text-center font-bold lg:mb-10 mb-5">
						Vision
					</span>
					<p className="w-full break-words text-justify lg:w-3/4 leading-loose">
						To be an organization of humane, proficient, competitive
						and virtuous professionals.
					</p>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-start ...">
					<div className="">
						<Image
							src="/mission.png"
							width={100}
							height={100}
							layout="intrinsic"
							alt="mission"
							className="rounded-full "
						/>
					</div>
					<span className="w-full text-2xl text-center font-bold mb-5 leading-loose">
						Mission
					</span>
					<p className="break-words text-justify lg:w-3/4 w-full leading-loose">
						<span>
							To uphold academic excellence, foster camaraderie,
							and promote holistic development among members.
						</span>
						<br />
						<span>
							To develop the skills and abilities of the members
							as future professionals.
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutSection

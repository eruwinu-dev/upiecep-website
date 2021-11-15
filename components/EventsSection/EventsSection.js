import Image from "next/image"

const EventsSection = () => {
	return (
		<div
			className="box-border h-max min-h-screen flex flex-grow flex-col justify-start pt-20 bg-gray-100 lg:pb-4 pb-10 ..."
			id="events">
			<span className="w-full text-4xl text-center font-bold mb-10">
				Events
			</span>
			<div className="h-max grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-x-20 gap-y-5 px-20">
				<div className="w-full h-full flex flex-col items-center justify-center lg:order-1 order-1">
					<p className="break-words text-justify mb-4 leading-loose ...">
						<span className="block text-2xl text-left font-bold mb-3">
							Get Licensed
						</span>
						An event that aims to provide an avenue for the
						interaction between ECE students from different
						universities/colleges in Metro Manila, licensed
						engineers, and professionals who have established
						themselves in the field.
					</p>
				</div>
				<div className="w-full h-full  lg:order-2 order-2">
					<div className="mb-4 w-full h-full flex flex-col items-center justify-center">
						<Image
							src="/gl.png"
							layout="intrinsic"
							width={600}
							height={400}
							alt="gl"
							priority={true}
						/>
					</div>
				</div>
				<div className="w-full h-full lg:order-3 order-4">
					<div className="mb-4 w-full h-full flex flex-col items-center justify-center">
						<Image
							src="/cares.png"
							layout="intrinsic"
							width={600}
							height={400}
							alt="cares"
						/>
					</div>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-center lg:order-4 order-3">
					<p className="break-words text-justify leading-loose ...">
						<span className="block text-2xl text-left font-bold mb-3 ">
							IECEP Cares
						</span>
						The charity event of UP IECEP, is an outreach program
						that extends UP IECEP’s goal in fulfilling socio-civic
						engagement by serving the community.
					</p>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-center lg:order-5 order-5">
					<p className="break-words text-justify leading-loose ...">
						<span className="block text-2xl text-left font-bold mb-3">
							Anniversary Week
						</span>
						A 3-5 days event that celebrates the anniversary of the
						organization. It will be a series of webinars and
						company talks related to ECE that will be open for all,
						Anniv Week will end with a culminating night to
						celebrate the anniversary of UP IECEP.
					</p>
				</div>
				<div className="w-full h-full lg:order-6 order-6">
					<div className="mb-4 w-full h-full flex flex-col items-center justify-center ">
						<Image
							src="/culmi.png"
							layout="intrinsic"
							width={600}
							height={400}
							alt="culmi"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EventsSection

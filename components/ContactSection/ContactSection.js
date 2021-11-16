import { BsFillTelephoneFill } from "react-icons/bs"
import { SiGmail, SiGooglemaps } from "react-icons/si"

import Footer from "../Footer/Footer"

const ContactSection = () => {
	return (
		<div
			className="box-border flex flex-grow flex-col justify-between items-center lg:pt-20 pt-14 lg:space-y-20 space-y-4 ..."
			id="contact">
			<span className="w-full lg:text-4xl text-2xl text-center font-bold">
				Contact Us
			</span>
			<div className="h-max grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-x-10 gap-y-5 lg:px-20 px-6">
				<div className="w-full h-full flex flex-col items-center justify-start lg:space-y-2 space-y-1">
					<div className="p-2 lg:text-6xl text-4xl text-green-600">
						<SiGooglemaps />
					</div>
					<span className="text-base text-center mb-10">
						UP EEEI, Velasquez Street University of the Philippines
						Diliman, Quezon City, Philippines 1101
					</span>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-start lg:space-y-2 space-y-1">
					<div className="p-2 lg:text-6xl text-4xl text-red-500">
						<SiGmail />
					</div>
					<span className="text-base text-center mb-10">
						upiecep.coe.upd.edu.ph
					</span>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-start lg:space-y-2 space-y-1">
					<div className="p-2 lg:text-6xl text-4xl text-purple-500">
						<BsFillTelephoneFill />
					</div>
					<span className="text-base text-center mb-10">
						+6391234567890 <br />
						+6391234567891
					</span>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default ContactSection

import { BsFillTelephoneFill } from "react-icons/bs"
import { SiGmail, SiGooglemaps } from "react-icons/si"

import Footer from "../Footer/Footer"

const ContactSection = () => {
	return (
		<div
			className="box-border flex flex-grow flex-col justify-between items-center pt-20 space-y-20 ..."
			id="contact">
			<span className="w-full text-4xl text-center font-bold">
				Contact Us
			</span>
			<div className="h-max grid lg:grid-cols-3 grid-cols-1 grid-flow-row gap-x-10 gap-y-5 px-20">
				<div className="w-full h-full flex flex-col items-center justify-start space-y-2">
					<div className="p-2 text-6xl text-green-600">
						<SiGooglemaps />
					</div>
					<span className="text-base text-center mb-10">
						UP EEEI, Velasquez Street University of the Philippines
						Diliman, Quezon City, Philippines 1101
					</span>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-start space-y-2">
					<div className="p-2 text-6xl text-red-500">
						<SiGmail />
					</div>
					<span className="text-base text-center mb-10">
						upiecep.coe.upd.edu.ph
					</span>
				</div>
				<div className="w-full h-full flex flex-col items-center justify-start space-y-2">
					<div className="p-2 text-6xl text-purple-500">
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

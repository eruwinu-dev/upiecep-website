import Image from "next/image"

const CommitteeCard = ({ image, name, desc }) => {
	return (
		<div className="box-content flex flex-col items-center justify-center">
			<div className="w-64 h-96 rounded-xl shadow-lg mb-6 hover: cursor-pointer">
				<div className="w-full rounded-t-xl">
					<Image
						src={`${`/booth.png` || image}`}
						alt={name}
						title=""
						width="100vw"
						height="80vh"
						layout="responsive"
						objectFit="cover"
						className="filter contrast-100 brightness-100 rounded-t-xl"
					/>
					<div className="w-full p-4 overflow-x-hidden flex flex-col items-center justify-center">
						<p className="text-lg font-bold mb-4">{name}</p>
						<p className="text-sm">{desc}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CommitteeCard

import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"

import HomeSection from "../components/HomeSection/HomeSection"
import EventsSection from "../components/EventsSection/EventsSection"
import AboutSection from "../components/AboutSection/AboutSection"
import MembersSection from "../components/MembersSection/MembersSection"
import JoinUsSection from "../components/JoinUsSection/JoinUsSection"
import ContactSection from "../components/ContactSection/ContactSection"

export default function Home() {
	return (
		<main className="max-h-screen max-w-screen overflow-y-scroll no-scrollbar ">
			<Head>
				<title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
				<meta
					name="UP IECEP Web Page"
					content="Generated by create next app"
				/>
				<meta />
				<meta
					name="google"
					content="nositelinkssearchbox"
					key="sitelinks"
				/>
				<meta name="google" content="notranslate" key="notranslate" />
				<link rel="icon" href="/logo.ico" />
			</Head>
			<Navbar />
			<div className="main-window">
				<HomeSection />
				<AboutSection />
				<EventsSection />
				<MembersSection />
				<JoinUsSection />
				<ContactSection />
			</div>
		</main>
	)
}

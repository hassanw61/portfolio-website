import { Transition } from "@headlessui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Intro = () => {
	const introInfo = useMemo(
		() => ({
			helloInDifferentLanguages: [
				"Hello",
				"Hola",
				"Bonjour",
				"Hallo",
				"Ciao",
				"Olá",
				"Здравствуйте",
				"你好",
				"こんにちは",
				"안녕하세요",
				"مرحبا",
				"नमस्ते",
			],
			whoAmI: "I'm FAIQ NADEEM",
			headline: "However you say 👋, I’am ready to listen",
			description:
				"5+ years of crafting Front and Back-End solutions. Merging blockchain with Full-Stack technologies. Spearheading web 3.0 evolution.",
			meetingLink: "https://calendly.com/faiq-nadeem",
		}),
		[],
	);

	const HelloParagraph = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const [helloTextLoaded, setHelloTextLoaded] = useState(false);

	useEffect(() => {
		setCurrentIndex(0);
		setHelloTextLoaded(false);

		if (introInfo?.helloInDifferentLanguages) {
			const interval = setInterval(() => {
				setFade(false);
				setTimeout(() => {
					setCurrentIndex((prevIndex) => (prevIndex + 1) % introInfo.helloInDifferentLanguages.length);
					setFade(true);
				}, 500);
			}, 2000);

			return () => clearInterval(interval);
		}
	}, [introInfo]);

	useEffect(() => {
		const typedHelloParagraph = new Typed(HelloParagraph.current, {
			strings: [
				`<div class="flex flex-col space-y-10"><h1 class="font-semibold text-5xl">${introInfo?.whoAmI}</h1><span class="font-thin text-5xl italic"> ${introInfo?.headline}</span><p class="font-medium text-4xl">${introInfo?.description}</p></div>`,
			],
			typeSpeed: 5,
			onStart: () => setHelloTextLoaded(false),
			onComplete: () => setHelloTextLoaded(true),
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typedHelloParagraph.destroy();
		};
	}, []);

	return (
		<Transition appear={true} show={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
			<div className="flex flex-col gap-2 text-primary font-Poppins md:px-24 py-12 space-y-10">
				<h1
					className={`font-semibold text-5xl transition-all duration-500 ${
						fade ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
					}`}>
					{introInfo?.helloInDifferentLanguages[currentIndex]},
				</h1>
				<div ref={HelloParagraph} />

				{helloTextLoaded ? (
					<Link
						to={introInfo?.meetingLink}
						target="__blank"
						className="flex w-fit items-center gap-2 cursor-pointer px-4 py-2 animate-pulse transition-opacity duration-300 border-0 rounded-lg shadow-xl bg-secondary">
						<FaRegCalendarCheck className="text-md text-white" />
						<p className="text-md text-white">Schedule A Meeting</p>
					</Link>
				) : (
					<></>
				)}
			</div>
		</Transition>
	);
};

export default Intro;

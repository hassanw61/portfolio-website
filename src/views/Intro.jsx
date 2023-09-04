import { useEffect, useRef, useState } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaRegCalendarCheck } from "react-icons/fa";
import Typed from "typed.js";

const Intro = () => {
	const helloInDifferentLanguages = [
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
	];

	const HelloParagraph = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const [helloTextLoaded, setHelloTextLoaded] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % helloInDifferentLanguages.length);
				setFade(true);
			}, 500);
		}, 2000);

		return () => clearInterval(interval);
	}, [helloInDifferentLanguages]);

	useEffect(() => {
		const typedHelloParagraph = new Typed(HelloParagraph.current, {
			strings: [
				`<div class="flex flex-col space-y-10"><h1 class="font-semibold text-5xl">I'm FAIQ NADEEM</h1><span class="font-thin text-5xl italic"> However you say hello, I’am ready to listen</span><p class="font-medium text-4xl">5+ years crafting Front and Back-End solutions. Merging blockchain with Full-Stack technologies. Spearheading web 3.0 evolution.</p></div>`,
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
		<div className="flex flex-col gap-2 text-[#9A1E1E] font-Poppins md:px-24 py-12 space-y-10">
			<h1
				className={`font-semibold text-5xl transition-all duration-500 ${
					fade ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"
				}`}>
				{helloInDifferentLanguages[currentIndex]},
			</h1>
			<div ref={HelloParagraph} />

			{helloTextLoaded ? (
				<button className="flex w-fit items-center gap-2 cursor-pointer px-4 py-2 animate-pulse transition-opacity duration-300 border-0 rounded-lg shadow-xl bg-[#922b2b]">
					<FaRegCalendarCheck className="text-md text-white" />
					<p className="text-md text-white">Schedule A Meeting</p>
				</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default Intro;

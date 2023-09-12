import { Link, NavLink, useLocation } from "react-router-dom";
import { BiLogoLinkedin, BiLogoUpwork, BiSolidBriefcase } from "react-icons/bi";
import { BsFileEarmarkText, BsFillFileEarmarkPdfFill, BsStars, BsWhatsapp } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { AiFillPhone, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Sidebar = () => {
	const location = useLocation();

	const sidebarInfo = {
		name: "Faiq Nadeem",
		designation: "Full Stack Developer",
		getInTouchLinks: [
			{ link: "https://github.com/faiq-nadeem", icon: <AiOutlineGithub className="text-md" /> },
			{ link: "https://www.linkedin.com/in/faiq-nadeem", icon: <BiLogoLinkedin className="text-md" /> },
			{ link: "tel:+92321423028", icon: <AiFillPhone className="text-md" /> },
			{ link: "mailto:chfaiqnadeem@gmail.com", icon: <MdEmail className="text-md" /> },
			{ link: "", icon: <BiLogoUpwork className="text-md" /> },
			{
				link: "https://wa.me/9232142320289?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.%20Can%20we%20have%20a%20meeting%3F",
				icon: <BsWhatsapp className="text-md" />,
			},
		],
	};

	return (
		<Transition appear={true} show={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
			<div className="flex flex-col p-6 self-center py-10 space-y-5">
				<div className="flex flex-col gap-4 items-center text-center text-white px-3">
					<div>
						<img
							src="assets/images/profile-picture-animated.gif"
							alt="profile-picture"
							className="w-[132px] md:w-[152px] md:h-[152px] h-[132px] rounded-full hover:scale-105 duration-200"
						/>
					</div>
					<div className="flex flex-col space-y-0">
						<h1 className="font-medium text-3xl uppercase">{sidebarInfo?.name}</h1>
						<h1 className="font-light text-2xl">{sidebarInfo?.designation}</h1>
					</div>
				</div>

				<div>
					<hr />
				</div>

				<div className="flex flex-col px-5 transition-all duration-500 text-white ease-in">
					<ul className="flex flex-col transition-all duration-500 text-white ease-in font-medium text-sm">
						<NavLink
							to="/intro"
							className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
								location.pathname === "/intro" ? "bg-secondary text-white rounded-lg" : ""
							}`}>
							<BsStars className="text-md" />
							<p className="text-md">Intro</p>
						</NavLink>
						<NavLink
							to="/portfolio"
							className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
								location.pathname === "/portfolio" ? "bg-secondary text-white rounded-lg" : ""
							}`}>
							<BiSolidBriefcase className="text-md" />
							<p className="text-md">Portfolio</p>
						</NavLink>
						<NavLink
							to="/cover-letter"
							className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
								location.pathname === "/cover-letter" ? "bg-secondary text-white rounded-lg" : ""
							}`}>
							<BsFileEarmarkText className="text-md" />
							<p className="text-md">Cover Letter</p>
						</NavLink>
						<NavLink
							to="/curriculum-vitae-cv"
							className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
								location.pathname === "/curriculum-vitae-cv" ? "bg-secondary text-white rounded-lg" : ""
							}`}>
							<BsFillFileEarmarkPdfFill className="text-md" />
							<p className="text-md">Curriculum vitae - CV</p>
						</NavLink>
						<NavLink
							to="/contact-me"
							className={`flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-secondary ${
								location.pathname === "/contact-me" ? "bg-secondary text-white rounded-lg" : ""
							}`}>
							<FaHandshake className="text-md" />
							<p className="text-md">Contact Me</p>
						</NavLink>
					</ul>
				</div>

				<div className="flex flex-col-reverse md:flex md:flex-col gap-2 text-white py-5 px-5">
					<div className="flex flex-col justify-between">
						<div className="flex items-center justify-between">
							<h1 className="font-extralight text-md mb-3">Get in touch</h1>
						</div>
						<div className="flex w-full justify-start space-x-3">
							{sidebarInfo?.getInTouchLinks?.length > 0 &&
								sidebarInfo.getInTouchLinks.map(
									(item, index) =>
										item?.link && (
											<Link to={item?.link} target="__blank" key={index}>
												{item?.icon}
											</Link>
										),
								)}
						</div>
					</div>
				</div>
			</div>
		</Transition>
	);
};

export default Sidebar;

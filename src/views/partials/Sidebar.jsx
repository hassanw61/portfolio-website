import { NavLink } from "react-router-dom";
import { BiLogoUpwork, BiLogoLinkedin, BiSolidBriefcase } from "react-icons/bi";
import { AiOutlineGithub, AiFillPhone } from "react-icons/ai";
import { BsFileEarmarkText, BsFillFileEarmarkPdfFill, BsStars, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaHandshake, FaRegHandshake } from "react-icons/fa";

const Sidebar = () => {
	return (
		<>
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
						<h1 className="font-medium text-3xl uppercase">Faiq Nadeem</h1>
						<h1 className="font-light text-2xl">Full-Stack Developer</h1>
					</div>
				</div>

				<div>
					<hr />
				</div>

				<div className="flex flex-col px-5 transition-all duration-500 text-white ease-in">
					<ul className="flex flex-col transition-all duration-500 text-white ease-in font-medium text-sm">
						<NavLink
							to="/intro"
							className="flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b]">
							<BsStars className="text-md" />
							<p className="text-md">Intro</p>
						</NavLink>
						<NavLink
							to="/portfolio"
							className="flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b]">
							<BiSolidBriefcase className="text-md" />
							<p className="text-md">Portfolio</p>
						</NavLink>
						<NavLink
							to="/cover-letter"
							className="flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b]">
							<BsFileEarmarkText className="text-md" />
							<p className="text-md">Cover Letter</p>
						</NavLink>
						<NavLink
							to="/curriculum-vitae-cv"
							className="flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b]">
							<BsFillFileEarmarkPdfFill className="text-md" />
							<p className="text-md">Curriculum vitae - CV</p>
						</NavLink>
						<NavLink
							to="/contact-me"
							className="flex items-center gap-2 cursor-pointer px-4 py-2 transition-opacity duration-300 hover:border-0 hover:rounded-lg hover:shadow-lg hover:bg-[#922b2b]">
							<FaHandshake className="text-md" />
							<p className="text-md">Contact Me</p>
						</NavLink>
					</ul>
				</div>

				<div className="flex flex-col-reverse md:flex md:flex-col gap-2 text-white py-5 px-5">
					<div className="flex flex-col justify-between">
						<div className="flex items-center justify-between">
							<h1 className="font-extralight text-xs mb-3">Get in touch</h1>
							<div className="md:hidden">
								{/* <button onClick={toggleMenu} className="text-white hover:text-gray-300 focus:outline-none">
									<div className="border rounded-md py-1 px-2">
										<FiMenu className="w-[24px] h-[24px]" />
									</div>
								</button> */}
							</div>
						</div>
						<div className="flex gap-2 items-center">
							<BiLogoUpwork className="text-2xl" />
							<AiOutlineGithub className="text-2xl" />
							<BiLogoLinkedin className="text-2xl" />
							<MdEmail color="white" className="text-2xl" />
							<AiFillPhone className="text-2xl" />
							<BsWhatsapp className="text-2xl" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;

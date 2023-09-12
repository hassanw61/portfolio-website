import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const iconClassNames = "text-2xl text-primary cursor-pointer";

export const contactInfo = {
	title: "Contact Me",
	headline: "I am available for hire and open to any ideas of cooperation.",
	email: "chfaiqnadeem@gmail.com",
	tel: "+923214232028",
	address: "Lahore, Pakistan",
	nextAvailable: "October, 2023",
	description:
		"Reach Out Today And I'll Provide You With My Comprehensive Onboarding Package Designed For Full-Time Employment	Or Contract Based Jobs. This Package Covers Various Aspects That Potential Employers Often Inquire About, Such As My Salary Expectations And The Seamless Integration Process Into Your Company.",
	getInTouchLinks: [
		{ link: "https://github.com/faiq-nadeem", icon: <AiOutlineGithub className={iconClassNames} /> },
		{ link: "https://www.linkedin.com/in/faiq-nadeem", icon: <BiLogoLinkedin className={iconClassNames} /> },
		{ link: "", icon: <AiOutlineGithub className={iconClassNames} /> },
		{
			link: "https://wa.me/9232142320289?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.%20Can%20we%20have%20a%20meeting%3F",
			icon: <BsWhatsapp className={iconClassNames} />,
		},
	],
};

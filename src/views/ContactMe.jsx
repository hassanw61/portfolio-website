import { Transition } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoUpwork, BiLogoWhatsapp } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/mailer.php", formData);
			console.log(response);
			if (response.data.status === "success") {
				alert("Email sent successfully!");
			} else {
				alert(response.data.message);
			}
		} catch (error) {
			alert("There was an error sending the email.");
		}
	};

	return (
		<Transition appear={true} show={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
			<div className="flex w-full px-10 pt-10 space-x-14">
				<div className="flex flex-col w-[70%] space-y-5">
					<h1 className="font-medium text-3xl">Contact Me</h1>
					<h2 className="font-light text-xl">I am available for hire and open to any ideas of cooperation.</h2>

					<form className="space-y-5" onSubmit={handleSubmit}>
						<div className="flex gap-20">
							<div className="flex flex-col space-y-7 w-full">
								<div className="flex flex-col space-y-2">
									<label className="font-semibold text-sm">
										Email Address<span className="text-red">*</span>
									</label>
									<input
										type="email"
										name="email"
										placeholder="Enter Email"
										className="w-full p-4 border rounded-lg text-black placeholder:font-normal placeholder-black-500"
										onChange={handleChange}
									/>
								</div>

								<div className="flex flex-col space-y-2">
									<label className="font-semibold text-sm">
										Name<span className="text-red">*</span>
									</label>
									<input
										type="text"
										name="name"
										placeholder="Enter Name"
										className="w-full p-4 border rounded-lg text-black placeholder:font-normal placeholder-black-500"
										onChange={handleChange}
									/>
								</div>

								<div className="flex flex-col space-y-2">
									<label className="font-semibold text-sm">
										Message<span className="text-red">*</span>
									</label>
									<textarea
										name="message"
										placeholder="Type your message"
										className="w-full p-4 h-44 border rounded-lg text-black placeholder:font-normal placeholder-black-500"
										onChange={handleChange}
									/>
								</div>

								<button type="submit" className="px-8 py-2 text-white bg-[#AC4949] font-bold rounded-lg self-start">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="lex flex-col w-[30%] space-y-5 items-start pt-10">
					<div className="space-y-2">
						<h3 className="text-lg font-medium">
							Email: <span className="text-[#AC4949] font-semibold underline">chfaiqnadeem@gmail.com</span>
						</h3>
						<h3 className="text-lg font-medium">
							Tel: <span className="text-[#AC4949] font-semibold underline">+92 321 4232028</span>
						</h3>
					</div>

					<div className="flex space-x-4">
						<BiLogoUpwork className="text-3xl text-[#AC4949] cursor-pointer" />
						<AiOutlineGithub className="text-3xl text-[#AC4949] cursor-pointer" />
						<BiLogoLinkedin className="text-3xl text-[#AC4949] cursor-pointer" />
						<BiLogoWhatsapp className="text-3xl text-[#AC4949] cursor-pointer" />
					</div>

					<hr className="border-t-2 border-[#AC4949] my-4 w-full" />

					<div className="flex space-x-2 items-center">
						<MdLocationOn className="text-xl text-[#AC4949] cursor-pointer" />
						<p className="text-[#AC4949] font-semibold text-lg underline">Lahore, Pakistan</p>
					</div>

					<hr className="border-t-2 border-[#AC4949] my-4 w-full" />

					<div>
						<p className="font-semibold text-lg">
							Next Available <span className="font-bold">October 2023</span>.{" "}
							<span className="text-[#AC4949]">Hire Now.</span>
						</p>
					</div>

					<hr className="border-t-2 border-[#AC4949] my-4 w-full" />

					<p className="text-md text-justify">
						Reach Out Today And I'll Provide You With My Comprehensive Onboarding Package Designed For Full-Time Employment
						Or Contract Based Jobs. This Package Covers Various Aspects That Potential Employers Often Inquire About, Such
						As My Salary Expectations And The Seamless Integration Process Into Your Company.
					</p>
				</div>
			</div>
		</Transition>
	);
};

export default Contact;

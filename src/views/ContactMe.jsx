import { Transition } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { contactInfo } from "../assets/data/contactMe";

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
					<h1 className="font-medium text-3xl">{contactInfo?.title}</h1>
					<h2 className="font-light text-xl">{contactInfo?.headline}</h2>

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

								<button type="submit" className="px-8 py-2 text-white bg-primary font-bold rounded-lg self-start">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>

				<div className="lex flex-col w-[30%] space-y-5 items-start pt-10">
					<div className="space-y-2">
						<h3 className="text-lg font-medium">
							Email: <span className="text-primary font-semibold underline">{contactInfo?.email}</span>
						</h3>
						<h3 className="text-lg font-medium">
							Tel: <span className="text-primary font-semibold underline">{contactInfo?.tel}</span>
						</h3>
					</div>

					<div className="flex space-x-4">
						{contactInfo?.getInTouchLinks?.length > 0 &&
							contactInfo.getInTouchLinks.map(
								(getInTouchLink, index) =>
									getInTouchLink?.link && (
										<Link to={getInTouchLink?.link} target="__blank" key={index}>
											{getInTouchLink?.icon}
										</Link>
									),
							)}
					</div>

					<hr className="border-t-2 border-primary my-4 w-full" />

					<div className="flex space-x-2 items-center">
						<MdLocationOn className="text-xl text-primary cursor-pointer" />
						<p className="text-primary font-semibold text-lg underline">{contactInfo?.address}</p>
					</div>

					<hr className="border-t-2 border-primary my-4 w-full" />

					<div>
						<p className="font-semibold text-lg">
							Next Available <span className="font-bold">{contactInfo?.nextAvailable}</span>.{" "}
							<span className="text-primary">Hire Now.</span>
						</p>
					</div>

					<hr className="border-t-2 border-primary my-4 w-full" />

					<p className="text-md text-justify">{contactInfo?.description}</p>
				</div>
			</div>
		</Transition>
	);
};

export default Contact;

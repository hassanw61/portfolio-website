import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const Portfolio = () => {
	const projectsList = [
		{
			title: "DaffiWallet",
			headline: "A Blockchain Wallet",
			description:
				"Daffi - A blockchain wallet integrated with Node.js, offering crypto swaps, instant transfers, and NFT management. Built security layers based on latest encryption methods. Optimized performance up to 40% that allows very fast response from blockchain network.",
			projectLink: "https://google.com",
			images: [
				"https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
			],
		},
		{
			title: "Connectia",
			headline: "Fleet Management System",
			description:
				"Developed Connectia, a fleet management platform powered by Vue.js, TypeScript, and Google Maps. Incorporated Buefy for an enhanced user interface and used Google Maps API for real-time vehicle tracking, redefining fleet management operations.",
			projectLink: "https://google.com",
			images: [
				"https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
			],
		},
		{
			title: "Task Mastr",
			headline: "You Tasking Companion",
			description:
				"Taskmastr benefited from my skills in UX/UI design and jQuery, where I orchestrated the creation of a visually pleasing and easy-to-navigate website. By integrating JavaScript functionalities, I enhanced task management and user engagement, culminating in a platform that simplifies and enhances task organization.",
			projectLink: "https://google.com",
			images: [
				"https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
			],
		},
		{
			title: "Web Marketers",
			headline: "All In One market Solution",
			description:
				"Web Marketers witnessed my adeptness in WordPress, jQuery, and JavaScript, which I employed to revamp website designs and elevate their online presence. Through thoughtfully designed UX/UI elements and interactive jQuery components, I contributed to crafting websites that effectively communicate their marketing messages and drive engagement.",
			projectLink: "https://google.com",
			images: [
				"https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
				"https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
			],
		},
	];

	const workExperiencesList = [
		{
			workRole: "Full Stack Developer",
			company: "NexaQuanta",
			startDate: "June, 2021",
			endDate: "present",
			description:
				"Developed a blockchain wallet supporting 1000+ assets and NFTs, enabling user-driven transactions.	Engineered custom encryption for robust data storage, geared for large-scale user operations.	Reduced data retrieval times by 40% by designing an efficient API server for quick and secure retrieval of blockchain network data, emphasizing speed and data privacy through caching and multiple authentication layers",
		},
		{
			workRole: "Software Engineer",
			company: "V2X Network Limited",
			startDate: "June, 2021",
			endDate: "present",
			description:
				"Collaborated remotely with global teams on a fleet management system serving 500+ active fleets daily.	Led geofencing and route management projects while innovating vehicle remote accessibility solutions.	Accelerated and optimized visual performance by 30%, enhancing fleet views and geofencing rendering on maps.",
		},
		{
			workRole: "Website Developer",
			company: "Single Solution",
			startDate: "June, 2021",
			endDate: "present",
			description:
				"Delivered 100+ customer focused and cross browser compatibility websites including e-commerce and portfolio websites.	Launched a teaching platform that connected over 100+ teachers and students, enhancing real-time learning interactions",
		},
		{
			workRole: "Embedded Engineer",
			company: "NexaQuanta",
			startDate: "June, 2021",
			endDate: "present",
			description:
				"Designed and Developed 100+ embedded kits for IOT solutions, robotics, integrating different hardware’s.	Contributed to projects that saw a 20% increase in autonomous tasks efficiency by building robots and drones with advanced navigation, interactive capabilities, and accurate GPS tracking.",
		},
	];

	const technologiesList = [
		{
			title: "Programming Languages",
			headline: "JavaScript, TypeScript, PHP",
			description:
				"Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		},
		{
			title: "Frameworks & Libraries",
			headline: "NodeJS, Express.js, React, Vite.js, Next.js, Laravel, WebSockets",
			description:
				"Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		},
		{
			title: "Design & UI",
			headline: "TailwindCSS, Bootstrap, Buefy, BulmaCSS, Figma, Adobe Suite",
			description:
				"Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		},
		{
			title: "Web & Server Tools",
			headline: "Restful APIs, AWS S3, Nginx, Apache, Heroku, cPanel",
			description:
				"Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		},
		{
			title: "Development Tools",
			headline: "Git, GitHub, Bitbucket, Jira, Zoho, Trello, Slack, Lighthouse, GTMetrix",
			description:
				"Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
		},
	];

	return (
		<Transition appear={true} show={true} enter="transition-opacity duration-500" enterFrom="opacity-0" enterTo="opacity-100">
			<section className="container px-4 py-12 mx-auto">
				<div className="grid gap-4 mx-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3">
						<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
							<h3 className="text-3xl font-semibold text-primary">Technologies</h3>
							<span className="text-sm font-bold text-justify uppercase text-gray-400">
								Experienced in web development using React & Node.js. Proficient in integrating blockchain with
								traditional payment systems for a seamless web experience.
							</span>
						</div>
					</div>

					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-primary">
							{technologiesList?.length > 0 &&
								technologiesList.map((technology, index) => (
									<div
										className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary before:animate-bounce"
										key={index}>
										<div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
											{technology?.title}
										</div>
										<h3 className="text-xl font-bold text-slate-900">{technology?.headline}</h3>
										<p className="mt-3">{technology?.description}</p>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>

			<section className="container px-4 py-12 mx-auto">
				<div className="grid gap-4 mx-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3">
						<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
							<h3 className="text-3xl font-semibold text-primary">Work History</h3>
							<span className="text-sm font-bold text-justify uppercase text-gray-400">
								Experienced in web development using React & Node.js. Proficient in integrating blockchain with
								traditional payment systems for a seamless web experience.
							</span>
						</div>
					</div>

					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
							{workExperiencesList?.length > 0 &&
								workExperiencesList.map((experience, index) => (
									<div
										className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary before:animate-bounce"
										key={index}>
										<div className="flex w-full justify-between">
											<div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
												{experience?.workRole}
											</div>
											<time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-6 px-3 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
												{experience?.startDate}, {experience?.endDate}
											</time>
										</div>
										<h3 className="text-lg font-bold text-slate-900 uppercase italic">{experience?.company}</h3>
										<p className="mt-3">{experience?.description}</p>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>

			<section className="container px-4 py-12 mx-auto">
				<div className="grid gap-4 mx-4 sm:grid-cols-12">
					<div className="col-span-12 sm:col-span-3">
						<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
							<h3 className="text-3xl font-semibold text-primary">My Projects</h3>
							<span className="text-sm font-bold text-justify uppercase text-gray-400">
								Experienced in web development using React & Node.js. Proficient in integrating blockchain with
								traditional payment systems for a seamless web experience.
							</span>
						</div>
					</div>

					<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
						<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
							{projectsList?.length > 0 &&
								projectsList.map((project, index) => (
									<div
										className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary space-y-5 before:animate-bounce"
										key={index}>
										<div className="flex w-full justify-between">
											<div className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0">
												{project?.title}
											</div>
											<p className="inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-8 px-3 mb-3 sm:mb-0 bg-primary text-white rounded-md">
												More Details
											</p>
										</div>
										<div className="flex w-full space-x-4">
											<div className="flex flex-col w-[50%]">
												<h3 className="text-lg font-normal text-gray-600">{project?.headline}</h3>
												<p className="mt-3">{project?.description}</p>
											</div>

											<div className="flex flex-col w-[50%]">
												<div className="grid gap-4">
													<div>
														<img
															className="h-auto max-w-full rounded-lg"
															src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
															alt=""
														/>
													</div>
													<div className="grid grid-cols-5 gap-4">
														{project?.images?.length > 0 &&
															project?.images?.map((image, index) => (
																<div key={index}>
																	<img className="h-auto max-w-full rounded-lg" src={image} alt="" />
																</div>
															))}
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
		</Transition>
	);
};

export default Portfolio;

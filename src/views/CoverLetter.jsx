import { LuCode2 } from "react-icons/lu";
import { FaTerminal } from "react-icons/fa";
import { Transition } from "@headlessui/react";

const CoverLetter = () => {
	return (
		<Transition appear={true} show={true} enter="transition-opacity duration-1000" enterFrom="opacity-0" enterTo="opacity-100">
			<div className="w-full flex flex-col font-Poppins px-8 py-6 space-y-7">
				<div className="flex flex-col space-y-5">
					<h1 className="font-semibold text-4xl text-primary">
						A full-stack software engineer with over 10+ years of experience.
					</h1>
				</div>
				<div>
					<p className="font-light text-lg text-justify">
						I have maintained, developed, and launched multiple projects from scratch, carrying the development of its'
						back-end and front-end codebases. My current toolset includes{" "}
						<span className="font-semibold text-primary">
							JavaScript, TypeScript, Node.js, React, Next.js, Redux, GraphQL, TailwindCSS, Docker ,
						</span>{" "}
						and all the other various frameworks, libraries, and technologies related to them.
					</p>
				</div>

				<div>
					<p className="font-semibold text-lg text-primary">I can help you with all the sides of your project:</p>
					<ul className="list-disc list-inside font-norlam text-md px-5 py-5">
						<li>verifying good UI/UX design, </li>
						<li>leading/co-developing the back-end and front-end,</li>
						<li> setting up the CI/CD,</li>
						<li> mentoring the team,</li>
						<li>estimating tasks,</li>
						<li>researching possible techs,</li>
						<li>leading, launching and monitoring the project.</li>
					</ul>
					<p className="font-normal text-3xl text-primary italic">Call me a Swiss Army Knife in terms of software.</p>
				</div>

				<div className="my-4">
					<hr />
				</div>

				<div className="flex flex-col gap-5">
					<h1 className="flex items-center gap-2 font-semibold text-3xl text-primary">
						{/* <LuEdit /> */}
						Front-End Web Development
					</h1>
					<p className="font-light text-lg">
						I specialize in applications written in both React and Next.js. one-way data flow, Redux-like architecture, and
						also typed languages, e.g. TypeScript.
					</p>
					<p className="font-light text-lg">My current experience and skills in front-end includes:</p>
					<ul className="flex flex-col gap-4 list-disc list-inside font-light text-lg text-primary my-4">
						<li>
							lead TypeScript/JavaScript development: bootstrapping, refactoring, improving the structure, reliability, and
							build setup;
						</li>
						<li>
							full integration of front-end development using tools like Webpack with features like automatic code reload,
							code minifications, multiple environments support, CI/CD, Storybook components library, automated testing of
							accessibility, server-side render, and visual snapshots,
						</li>
						<li>good sense of design and UX,</li>
						<li>
							huge experience in almost all of the JS ecosystems, by having used in the past many libraries like React,
							Redux, Redux-Observable, jQuery, Lodash/Underscore, and many else. What you can expect from me
						</li>

						<li>
							<span className="font-semibold">Redux: </span>I am experienced in using Redux as a predictable state
							container. Redux helps manage the state of your application in a centralized manner, making it easier to
							track and modify state changes throughout your React components.
						</li>
						<div className="my-4">
							<hr />
						</div>
						<h1 className="flex items-center gap-2 font-semibold text-3xl text-primary">
							<LuCode2 />
							Back-End Web Development
						</h1>
						<p>
							Nearly every app I have launched in the past had the back-end done also by me. In order to improve the
							development speed, performance and reliability, I have changed languages and frameworks already multiple
							times, like switching to Node.js, configured servers using just the shell, then Chef/Ansible, and now Docker
							and Kubernetes.
						</p>
						<p>
							The lessons I learned while doing all these apps will be useful for me forever, no matter what framework I
							will use in the next project.
						</p>
						<p>What I can do for you at that side is:</p>

						<li>lead development of backends in Node.js</li>
						<li>splitting the back-end into separate domains and microservices,</li>
						<li>cooperation with APIs, remote data synchronizations, cloud servers, asynchronous workers,</li>
						<li>using different types of databases (like PostgreSQL, MySQL, MongoDB, Redis)</li>
						<li>
							dividing the servers into different machine nodes / docker containers; database sharding; load balancing,
						</li>
						<li>
							refactoring existing applications, by improving code readibility, separating concerns into separate
							functions/classes/modules, taking the business logic out from your request/response layer into separate
							modules (DDD), and moving the app architecture into an event-based one
						</li>
						<li>writing unit and e2e tests</li>
						<div className="my-4">
							<hr />
						</div>
						<h1 className="flex  gap-2 font-semibold text-3xl text-primary">
							<FaTerminal />
							What About Dev-Ops, Design, UI, Project Leadership, Team Mentorship ?
						</h1>
						<p className="font-semibold">During my time I have created and released tens of websites.</p>
						<p>
							Thus, not only I have coded their back-end and front-end codebases, but often I also had to care about other
							things needed in a successful web application project:
						</p>

						<li>good planning of UI and thinking how it affects the UX;</li>
						<li>consistency in design and typography;</li>
						<li>consistency in design and typography;</li>
						<li>launching, deployment and monitoring the app after the release;</li>
						<li>recruiting, onboarding and mentoring team members;</li>
						<li>
							in cases where a good Project Manager was missing, fullfilling his role, in order to save the project from
							losing time on unneeded things.
						</li>
					</ul>
				</div>
			</div>
		</Transition>
	);
};

export default CoverLetter;

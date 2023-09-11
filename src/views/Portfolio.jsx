

const Portfolio = () => {
	return (
		<>
  <section className="container px-4 py-12 mx-auto">
    <div className="grid gap-4 mx-4 sm:grid-cols-12">
      <div className="col-span-12 sm:col-span-3">
        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
          <h3 className="text-3xl font-semibold">Morbi tempor</h3>
          <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
        </div>
      </div>
      <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time>
            <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time>
            <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
          </div>
          <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
            <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
            <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
            <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
			
			<div className="-my-6">

    <div className="relative pl-8 sm:pl-32 py-6 group">

        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
            <div className="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
        </div>

        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>

    <div className="relative pl-8 sm:pl-32 py-6 group">

        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The milestone</div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
            <div className="text-xl font-bold text-slate-900">Reached 5K customers</div>
        </div>

        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>

    <div className="relative pl-8 sm:pl-32 py-6 group">

        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
            <div className="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
        </div>

        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>

    <div className="relative pl-8 sm:pl-32 py-6 group">

        <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The IPO</div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time>
            <div className="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
        </div>

        <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
    </div>

</div>
			<div className="w-full flex flex-col font-Poppins px-8 py-6 space-y-7">
				<div className="flex flex-col space-y-5">
					<h1 className="font-semibold text-4xl text-[#9A1E1E]">Cover Letter</h1>
					<h2 className="font-semibold text-lg text-[#9A1E1E]">
						A full-stack software engineer with over 10+ years of experience.
					</h2>
				</div>
				<div>
					<p className="font-light text-lg text-justify">
						I have maintained, developed, and launched multiple projects from scratch, carrying the development of its'
						back-end and front-end codebases. My current toolset includes{" "}
						<span className="font-semibold text-[#AC4949]">
							JavaScript, TypeScript, Node.js, React, Next.js, Redux, GraphQL, TailwindCSS, Docker ,
						</span>{" "}
						and all the other various frameworks, libraries, and technologies related to them.
					</p>
				</div>

				<div>
					<p className="font-semibold text-lg text-[#AC4949]">I can help you with all the sides of your project:</p>
					<ul className="list-disc list-inside font-norlam text-md px-5 py-5">
						<li>verifying good UI/UX design, </li>
						<li>leading/co-developing the back-end and front-end,</li>
						<li> setting up the CI/CD,</li>
						<li> mentoring the team,</li>
						<li>estimating tasks,</li>
						<li>researching possible techs,</li>
						<li>leading, launching and monitoring the project.</li>
					</ul>
					<p className="font-normal text-lg italic">Call me a Swiss Army Knife in terms of software.</p>
				</div>

				<div className="my-4">
					<hr />
				</div>

				
			</div>
		</>
	);
};

export default Portfolio;

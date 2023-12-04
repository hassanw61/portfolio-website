import { Transition } from "@headlessui/react";
import { portfolioData } from "../assets/data/portfolio";

const Portfolio = () => {
  const technologies = portfolioData?.technologies;
  const workExperiences = portfolioData?.workExperiences;
  const projects = portfolioData?.projects;

  return (
    <Transition appear={true} show={true} enter="transition-opacity duration-500" enterFrom="opacity-0" enterTo="opacity-100">
      <section className="container md:px-4 py-5 md:py-12 mx-auto">
        <div className="grid gap-4 md:mx-4 lg:grid-cols-12 ">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">{technologies?.title}</h3>
              <span className="text-sm font-bold text-justify uppercase text-gray-400">{technologies?.description}</span>
            </div>
          </div>

          <div className="relative col-span-12 md:px-4 space-y-6 lg:col-span-9">
            <div className=" col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-primary">
              {technologies?.list?.length > 0 &&
                technologies.list.map((item, index) => (
                  <div
                    className=" flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary before:animate-bounce"
                    key={index}
                  >
                    <div className="font-caveat font-medium text-xl md:text-2xl text-primary mb-1 sm:mb-0">{item?.title}</div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">{item?.headline}</h3>
                    <p className="mt-3">{item?.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container md:px-4 py-5 md:py-12 mx-auto">
        <div className="grid gap-4 md:mx-4 lg:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">{workExperiences?.title}</h3>
              <span className="text-sm font-bold text-justify uppercase text-gray-400">{workExperiences?.description}</span>
            </div>
          </div>

          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {workExperiences?.list?.length > 0 &&
                workExperiences.list.map((item, index) => (
                  <div
                    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary before:animate-bounce"
                    key={index}
                  >
                    <div className="flex flex-col md:flex-row w-full justify-between">
                      <div className="font-caveat font-medium text-xl md:text-2xl text-primary mb-1 sm:mb-0">
                        {item?.workRole}
                      </div>
                      <time className="inline-flex items-center justify-center text-[10px] md:text-xs font-semibold uppercase w-fit h-6 px-3 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                        {item?.startDate}, {item?.endDate}
                      </time>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 uppercase italic">{item?.company}</h3>
                    <p className="mt-3">{item?.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container md:px-4 py-5 md:py-12 mx-auto">
        <div className="grid gap-4 md:mx-4 lg:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">{projects?.title}</h3>
              <span className="text-xs md:text-sm font-bold text-justify uppercase text-gray-400">{projects?.description}</span>
            </div>
          </div>

          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {projects?.list?.length > 0 &&
                projects.list.map((item, index) => (
                  <div
                    className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-primary space-y-5 before:animate-bounce"
                    key={index}
                  >
                    <div className="grid md:flex w-full justify-between items-center">
                      <div className="font-caveat font-medium text-xl md:text-2xl text-primary mb-1 sm:mb-0">{item?.title}</div>
                      <p className="inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-8 px-3 mb-0 md:mb-3  bg-primary text-white rounded-md">
                        More Details
                      </p>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-3 w-full md:space-x-4">
                      <div className="flex flex-col gap-3 md:w-[50%]">
                        <h3 className="text-lg font-normal text-gray-600">{item?.headline}</h3>
                        <p>{item?.description}</p>
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
                            {item?.images?.length > 0 &&
                              item?.images?.map((image, index) => (
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

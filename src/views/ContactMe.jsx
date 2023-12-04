import { Transition } from "@headlessui/react";
import axios from "axios";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { contactInfo } from "../assets/data/contactMe";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const iconClassNames = "text-2xl text-primary cursor-pointer";

  contactInfo.getInTouchLinks = [
    { link: "https://github.com/faiq-nadeem", icon: <AiOutlineGithub className={iconClassNames} /> },
    { link: "https://www.linkedin.com/in/faiq-nadeem", icon: <BiLogoLinkedin className={iconClassNames} /> },
    { link: "", icon: <AiOutlineGithub className={iconClassNames} /> },
    {
      link: "https://wa.me/9232142320289?text=Hello%2C%20I%20have%20a%20question%20about%20your%20service.%20Can%20we%20have%20a%20meeting%3F",
      icon: <BsWhatsapp className={iconClassNames} />,
    },
  ];

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
      <div className="grid md:flex w-full md:px-10 pt-10 md:space-x-14">
        <div className="flex flex-col md:w-[70%] space-y-5">
          <h1 className="font-medium text-3xl">{contactInfo?.title}</h1>
          <h2 className="font-light text-lg md:text-xl">{contactInfo?.headline}</h2>

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
                    className="w-full p-4 h-36 md:h-44 border rounded-lg text-black placeholder:font-normal placeholder-black-500"
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

        <div className="flex flex-col md:w-[30%] space-y-5 items-start pt-10">
          <div className="space-y-2">
            <h3 className="text-base md:text-lg font-medium">
              Email:{" "}
              <Link to={`mailto:${contactInfo?.email}`} className="text-primary font-semibold underline">
                {contactInfo?.email}
              </Link>
            </h3>
            <h3 className="text-base md:text-lg font-medium">
              Tel:{" "}
              <Link to={`tel:${contactInfo?.email}`} className="text-primary font-semibold underline">
                {contactInfo?.tel}
              </Link>
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
                  )
              )}
          </div>

          <hr className="border-t-2 border-primary my-4 w-full" />

          <div className="flex space-x-2 items-center">
            <MdLocationOn className="text-lg md:text-xl text-primary cursor-pointer" />
            <p className="text-primary font-semibold text-base md:text-lg">{contactInfo?.address}</p>
          </div>

          <hr className="border-t-2 border-primary my-4 w-full" />

          <div>
            <p className="font-semibold text-base md:text-lg">
              Next Available <span className="font-bold">{contactInfo?.nextAvailable}</span>.{" "}
              <Link to={contactInfo?.hireMeLink} className="text-primary hover:text-secondary underline" target="__blank">
                Hire Now.
              </Link>
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

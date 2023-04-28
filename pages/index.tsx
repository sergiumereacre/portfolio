import { useState } from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Head from "./head";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/s.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import profile from "../public/profile.png";
import { BsFillMoonStarsFill, BsHeartFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaSuitcase } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const baseClassName = "text-slate-700 cursor-pointer text-2xl";
  const baseClassNameSun = "text-yellow-400 cursor-pointer text-3xl";
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Engineer", "Designer", "Consultant"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const useAnimateOnScroll = () => {
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        },
        { threshold: 0.3 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    return ref;
  };
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  const ref1 = useAnimateOnScroll();
  const ref2 = useAnimateOnScroll();
  const ref3 = useAnimateOnScroll();
  const ref4 = useAnimateOnScroll();

  return (
    <div className={darkMode ? "dark" : ""}>
      {/*THIS IS WHERE WE IDENTIFY HEAD TAG.*/}
      <Head></Head>
      {/* THIS DEALS WITH THE NAVBAR. */}
      <nav className="py-6 md:px-24 lg:px-44 xl:px-60 2xl:px-80 px-5 bg-lightBackground dark:bg-backgroundColor">
        <div className="p-5 rounded-2xl flex items-center justify-between bg-lightContrast dark:bg-contrastBackground transition ease-in-out duration-200 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-zinc-800">
          <Link className="w-10 h-10 lg:ml-3" href="/">
            <Image src={logo} alt="Logo" />
          </Link>
          {/* BUTTONS FOR DARK MODE AND LETS CONNECT */}
          <ul className="flex items-center lg:mr-3">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className={`${baseClassName} ${darkMode ? "hidden" : ""}`}
              />
            </li>
            <li>
              <MdWbSunny
                onClick={() => setDarkMode(!darkMode)}
                className={`${baseClassNameSun} ${darkMode ? "" : "hidden"}`}
              />
            </li>
            <li className="hidden md:inline">
              <Link
                className="transition-all duration-600 bg-gradient-to-br to-cyan-600 via-orange-500 from-pink-900 bg-size-200 text-white px-4 py-2 rounded-md ml-4 font-poppins hover:bg-right-bottom"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                className="transition-all duration-600 bg-gradient-to-br to-cyan-600 via-orange-500 from-pink-900 bg-size-200 text-white flex items-center px-4 py-2 rounded-md ml-4 font-poppins hover:bg-right-bottom"
                href="/projects"
              >
                <FaSuitcase className="inline text-2xl"></FaSuitcase>
              </Link>
            </li>
            <li className="hidden md:inline">
              <a
                className="transition-all duration-600 bg-gradient-to-br to-orange-600 via-blue-700 from-teal-600 bg-size-200 text-white px-4 py-2 rounded-md ml-4 font-poppins hover:bg-right-bottom"
                href="https://www.linkedin.com/in/sergiumereacre"
              >
                Let&apos;s Connect
              </a>
            </li>
            <li className="md:hidden">
              <a
                className="transition-all duration-600 bg-gradient-to-br to-orange-600 via-blue-700 from-teal-600 bg-size-200 text-white flex items-center px-4 py-2 rounded-md ml-4 font-poppins hover:bg-right-bottom"
                href="https://www.linkedin.com/in/sergiumereacre"
              >
                <BsPersonFillAdd className="inline text-2xl"></BsPersonFillAdd>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* THIS IS WHERE THE MAIN SECTION BEGINS */}
      <motion.main className="md:px-24 lg:px-44 xl:px-60 2xl:px-80 px-5 min-h-screen bg-lightBackground dark:bg-backgroundColor flex flex-col items-center gap-10">
        {/* THIS SECTION DEALS WITH THE FIRST PART OF THE WEBPAGE. */}
        <motion.section ref={ref1} variants={sectionVariants} initial="hidden" animate="animate" className="my-section bg-lightContrast dark:bg-contrastBackground rounded-2xl w-full xl:p-20 xl:gap-20 flex flex-col items-center md:flex-row p-12 justify-center gap-5 transition ease-in-out duration-200 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-zinc-800">
          {/* THIS IS THE SECTION WHERE THE CONTENT IS. */}
          <Image
            src={profile}
            alt="Profile"
            className="w-72 md:w-80 h-auto rounded-full"
          ></Image>
          <div>
            <div className="text-center pb-5 md:pb-0">
              <h2 className="text-5xl py-2 font-medium text-transparent bg-clip-text bg-gradient-to-l from-red-400 to-blue-500">
                Sergiu Mereacre
              </h2>
              <h3 className="text-black text-2xl py-2 dark:text-cyan-200">
                Developer and {text}
                <div className="text-black dark:text-white inline animate-pulse">
                  |
                </div>
              </h3>
              <p className="text-md py-5 leading-7 text-gray-800 md:max-w-md mx-auto dark:text-gray-400">
                I am a software engineer based in Ireland. I&apos;m passionate
                about building and launching products that solve real world
                problems. Computers are my{" "}
                <span className="text-blue-500">passion</span>. I love to learn
                new things and I am always looking for new{" "}
                <span className="text-yellow-700 dark:text-yellow-500">
                  opportunities
                </span>
                .
              </p>
            </div>
            {/* THIS IS THE SECTION WHERE THE SOCIAL MEDIA ICONS ARE. */}
            <ul className="text-5xl flex justify-center gap-10 text-gray-600">
            <motion.li whileHover={{scale: 1.05}}>
                <a
                  className="hover:text-gray-800 hover:transition-all hover:duration-300"
                  href="https://github.com/sergiumereacre"
                >
                  <AiFillGithub />
                </a>
              </motion.li>
              <motion.li whileHover={{scale: 1.05}}>
                <a
                  className="hover:text-blue-700 hover:transition-all hover:duration-300"
                  href="https://www.linkedin.com/in/sergiumereacre"
                >
                  <AiFillLinkedin />
                </a>
              </motion.li>
              <motion.li whileHover={{scale: 1.05}}>
                <a
                  className="hover:text-red-700 hover:transition-all hover:duration-300"
                  href="mailto:sergiumer@gmail.com"
                >
                  <IoMail />
                </a>
              </motion.li>
            </ul>
          </div>
        </motion.section>
        {/* THIS IS THE SECTION WHERE THE SECOND PART OF THE WEBPAGE IS. */}
        <motion.section ref={ref2} variants={sectionVariants} initial="hidden" animate="animate" className="my-section bg-lightContrast dark:bg-contrastBackground rounded-2xl w-full flex flex-col items-center p-8 md:p-12 justify-center gap-5 transition ease-in-out duration-200 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-zinc-800">
          {/* THIS SECTION DEALS WITH THE PERSONAL EXPERIENCE PAROGRAPH. */}
          <div>
            <h3 className="text-2xl text-black dark:text-cyan-200">
              Tech Enthusiast
            </h3>
            <p className="text-md leading-7 text-gray-800 dark:text-gray-400">
              From a very young age, I was inspired to design, create and mess
              around with projects that found my interest. Learning new things
              and building stuff from scratch is what I love to do. I have a{" "}
              <span className="text-red-700 dark:text-red-400">
                burning passion
              </span>{" "}
              for technology with a strong interest in software engineering and
              I am always looking for new opportunities to learn and grow. This
              is what led me to pursue a career in software engineering. I am
              currently finishing my degree in Computer Science at the{" "}
              <span className="text-green-700 dark:text-green-400 font-bold">
                University of Limerick
              </span>
              .
            </p>
          </div>
          {/* THIS SECTION DEALS WITH THE CARDS AT THE BOTTOM. */}
          <motion.ul variants={container} initial="hidden" animate="visible" className="container flex flex-col lg:flex-row flex-wrap gap-10 md:gap-5 justify-center">
            <motion.li variants={item} key={0} whileHover={{scale: 1.05}}>
              <div className="flex flex-col gap-2 text-center py-10 px-5 rounded-3xl bg-lightBackground dark:bg-zinc-900 min-h-full min-w-fit md:max-w-sm lg:max-w-xs">
                <div className="flex items-center justify-center">
                  <Image
                    src={code}
                    width={100}
                    height={100}
                    alt="Coding Avatar"
                  />
                </div>
                <h3 className="text-gray-800 text-lg font-medium pb-5 dark:text-cyan-200">
                  Coding Projects
                </h3>
                <p className="text-gray-800 dark:text-gray-400">
                  I have experience collaborating on team projects as well as
                  working independently. Some have reached a small audience and
                  others have had the potential to reach millions.
                </p>
                <h4 className="text-orange-600 dark:text-orange-700">
                  Coding languages I&apos;ve used in the past.
                </h4>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-800 dark:text-gray-500">Python</p>
                  <p className="text-gray-800 dark:text-gray-500">Java</p>
                  <p className="text-gray-800 dark:text-gray-500">C++</p>
                </div>
              </div>
            </motion.li>
            <motion.li variants={item} key={1} whileHover={{scale: 1.05}}>
              <div className="flex flex-col gap-2 text-center py-10 px-5 rounded-3xl bg-lightBackground dark:bg-zinc-900 min-h-full min-w-fit md:max-w-sm lg:max-w-xs">
                <div className="flex items-center justify-center">
                  <Image
                    src={design}
                    width={100}
                    height={100}
                    alt="Design Avatar"
                  />
                </div>
                <h3 className="text-gray-800 text-lg font-medium pb-5 dark:text-cyan-200">
                  Beautiful Designs
                </h3>
                <p className="text-gray-800 dark:text-gray-400">
                  I have collaborated with numerous clients to develop designs
                  that are not only visually appealing but also meet their
                  specific functional requirements and ideas.
                </p>
                <h4 className="text-orange-600 dark:text-orange-700">
                  Design tools I use.
                </h4>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-800 dark:text-gray-500">Photoshop</p>
                  <p className="text-gray-800 dark:text-gray-500">
                    After Effects
                  </p>
                  <p className="text-gray-800 dark:text-gray-500">Figma</p>
                </div>
              </div>
            </motion.li>
            <motion.li variants={item} key={2} whileHover={{scale: 1.05}}>
              <div className="flex flex-col gap-2 text-center py-10 px-5 rounded-3xl bg-lightBackground dark:bg-zinc-900 min-h-full min-w-fit md:max-w-sm lg:max-w-xs">
                <div className="flex items-center justify-center">
                  <Image
                    src={consulting}
                    width={100}
                    height={100}
                    alt="Team Avatar"
                  />
                </div>
                <h3 className="text-gray-800 text-lg font-medium pb-5 dark:text-cyan-200">
                  Team Collaboration
                </h3>
                <p className="text-gray-800 dark:text-gray-400">
                  I possess the proficiency of collaborating with teams of
                  various sizes. From working in teams of two to collaborating
                  with teams of 10 or more individuals during my time at Intel.
                </p>
                <h4 className="text-orange-600 dark:text-orange-700">
                  Skills developed.
                </h4>
                <div className="flex flex-col gap-1">
                  <p className="text-gray-800 dark:text-gray-500">Leadership</p>
                  <p className="text-gray-800 dark:text-gray-500">
                    Time Management
                  </p>
                  <p className="text-gray-800 dark:text-gray-500">
                    Problem-solving
                  </p>
                </div>
              </div>
            </motion.li>
          </motion.ul>
        </motion.section>
        {/* THIS SECTION DEALS WITH WORK EXPERIENCE */}
        <motion.section ref={ref3} variants={sectionVariants} initial="hidden" animate="animate" className="my-section bg-lightContrast dark:bg-contrastBackground rounded-2xl w-full xl:p-20 xl:gap-20 flex flex-col md:items-center md:flex-row p-12 gap-5 transition ease-in-out duration-200 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-zinc-800">
          <h3 className="text-2xl text-black dark:text-cyan-200">
            Professional Experience
          </h3>
          <div>
            {/* TIMELINE OF PREVIOUS EXPERIENCE */}
            <ol className="relative border-l border-gray-500 dark:border-yellow-400">
              <li className="mb-10 ml-5">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-gray-600 dark:bg-yellow-400 animate-bounce"></div>
                <motion.div whileHover={{scale: 0.98}}>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                    May 2020 - PRESENT
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Computer Systems at the{" "}
                    <a
                      href="https://www.ul.ie/"
                      className="text-green-700 dark:text-green-400 hover:animate-pulse"
                    >
                      University of Limerick
                    </a>
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
                    Maintaining a QCA of 3.68 thus far, I am currently in my third
                    year of studies at the University of Limerick. In my second
                    year of studies, I had the privilege of being awarded the
                    Huawei Seeds for the Future scholarship, which provided me
                    with a unique opportunity to explore emerging technologies and
                    deepen my understanding of the field.
                  </p>
                </motion.div>
              </li>
              <li className="mb-10 ml-5">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-gray-600 dark:bg-yellow-400"></div>
                <motion.div whileHover={{scale: 0.98}}>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                    May 2022 - January 2023
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Software/Hardware Engineer Intern at{" "}
                    <a
                      href="https://www.intel.ie/content/www/ie/en/company-overview/intel-shannon.html"
                      className="text-blue-500  hover:animate-pulse"
                    >
                      Intel
                    </a>
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
                    During my internship at Intel Shannon, I had the opportunity
                    to refine my skills in Python scripting and programming, while
                    gaining valuable hands-on experience in UVM and SystemVerilog.
                    This experience not only enhanced my proficiency in software
                    and hardware design but also deepened my understanding of
                    these fields.
                  </p>
                </motion.div>
              </li>
              <li className="ml-5">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-gray-600 dark:bg-yellow-400"></div>
                <motion.div whileHover={{scale: 0.98}}>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                    August 2017 - January 2018
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Consultant Internship at{" "}
                    <a
                      href="https://www.echoit.ie/"
                      className="text-indigo-700 hover:animate-pulse"
                    >
                      Echo I.T.
                    </a>
                  </h3>
                  <p className="text-base font-normal text-gray-800 dark:text-gray-400">
                    As part of a team of engineers and technicians, I collaborated
                    on providing technical assistance and support to customers.
                    Through this experience, I gained valuable insights into the
                    operations of a small business and deepened my understanding
                    of its inner workings.
                  </p>
                </motion.div>
              </li>
            </ol>
          </div>
        </motion.section>
        {/* THIS SECTION DEALS WITH THE FOOTER */}
        <section className="mb-5 pr-8 flex justify-center md:justify-end bg-lightContrast dark:bg-contrastBackground rounded-2xl w-full p-5 transition ease-in-out duration-200 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-zinc-800">
          <p className="flex gap-1 items-center text-gray-800 dark:text-gray-400 text-xs md:text-base">
            Designed and implemented with{" "}
            <BsHeartFill className="text-red-800" /> by Sergiu.
          </p>
        </section>
      </motion.main>
    </div>
  );
}

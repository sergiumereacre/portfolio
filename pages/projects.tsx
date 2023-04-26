import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill, BsHeartFill } from "react-icons/bs";
import { MdWbSunny } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";

// Importing images
import logo from "../public/s.png";
import AK1 from "../public/AK1.png";
import AK2 from "../public/AK2.png";
import AK3 from "../public/AK3.png";
import AK4 from "../public/AK4.png";
import AK5 from "../public/AK5.png";
import YTD from "../public/YTD.png";
import Zork1 from "../public/Zork1.png";
import Zork2 from "../public/Zork2.png";
import App1 from "../public/App1.png";
import App2 from "../public/App2.png";
import App3 from "../public/App3.png";
import App4 from "../public/App4.png";
import App5 from "../public/App5.png";
import App6 from "../public/App6.png";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type ProjectsProps = {};


function Projects(props: ProjectsProps) {
    const [darkMode, setDarkMode] = useState(true);
    const baseClassName = "text-slate-700 cursor-pointer text-2xl";
    const baseClassNameSun = "text-yellow-400 cursor-pointer text-3xl";

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
                { threshold: 0.45 }
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

    const ref1 = useAnimateOnScroll();
    const ref2 = useAnimateOnScroll();
    const ref3 = useAnimateOnScroll();
    const ref4 = useAnimateOnScroll();

    return (
        <div className={darkMode ? "dark" : ""}>
            <Head>
                <title>Sergiu Mereacre / Projects</title>
                <meta name="description" content="Some of the projects I have created while progressing throughout my degree." />
                <link rel="icon" href="/s.png" />
            </Head>
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
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="md:hidden">
                            <Link
                                className="transition-all duration-600 bg-gradient-to-br to-cyan-600 via-orange-500 from-pink-900 bg-size-200 text-white flex items-center px-4 py-2 rounded-md ml-4 font-poppins hover:bg-right-bottom"
                                href="/"
                            >
                                <AiFillHome className="inline text-2xl"></AiFillHome>
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
            <main className="md:px-24 lg:px-44 xl:px-60 2xl:px-80 px-5 min-h-screen bg-lightBackground dark:bg-backgroundColor flex flex-col items-center gap-5">
                {/* THIS SECTION DEALS WITH THE PROJECTS */}
                <motion.h1 ref={ref1} variants={sectionVariants} initial="hidden" animate="animate" className="my-section text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-cyan-300 bg-lightContrast dark:bg-contrastBackground py-5 w-full rounded-2xl">
                    Projects Showcase
                </motion.h1>
                {/* ANIMAL KINGDOM */}
                <motion.section ref={ref2} variants={sectionVariants} initial="hidden" animate="animate" className="my-section flex flex-col gap-3 text-center px-5 py-5 lg:px-12 rounded-2xl items-center bg-lightContrast dark:bg-contrastBackground">
                    <h3 className="text-gray-800 text-2xl font-medium dark:text-gray-300">
                        Animal Kingdom
                    </h3>
                    <Carousel className="md:inline carousel-wrapper" showThumbs={false} emulateTouch showArrows showStatus infiniteLoop autoPlay stopOnHover swipeable>
                        <Image src={AK1} alt="Animal Kingdom 1"></Image>
                        <Image src={AK2} alt="Animal Kingdom 2"></Image>
                        <Image src={AK3} alt="Animal Kingdom 3"></Image>
                        <Image src={AK4} alt="Animal Kingdom 4"></Image>
                        <Image src={AK5} alt="Animal Kingdom 5"></Image>
                    </Carousel>
                    <p className="text-gray-800 dark:text-gray-400">
                        My team and I created a website in a module where I gained knowledge about PHP and Laravel. The website is designed to mimic LinkedIn and I took charge of its frontend development using TailwindCSS. Every element you see in the screenshots was carefully crafted by me.
                    </p>
                    <div className="my-3 flex flex-row items-center gap-2">
                        <h4 className="text-gray-800 dark:text-gray-200">Tools used:</h4>
                        <div className="flex flex-row items-center gap-2">
                            <p className="bg-red-800 rounded-md p-1 hover:animate-pulse">Laravel</p>
                            <p className="bg-indigo-600 rounded-md p-1 hover:animate-pulse">TailwindCSS</p>
                            <p className="bg-green-600 rounded-md p-1 hover:animate-pulse">MySQL</p>
                        </div>
                    </div>
                </motion.section>
                {/* YTD AND ZORK */}
                <motion.section ref={ref3} variants={sectionVariants} initial="hidden" animate="animate" className="my-section flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col gap-3 text-center px-5 py-5 lg:px-12 rounded-2xl items-center bg-lightContrast dark:bg-contrastBackground">
                        <h3 className="text-gray-800 text-2xl font-medium dark:text-gray-300">
                            Youtube Downloader
                        </h3>
                        <Image src={YTD} alt="YTD" className="rounded-2xl"></Image>
                        <p className="text-gray-800 dark:text-gray-400">
                            I created a Youtube Downloader using Python and PyTube. It is a simple program that allows you to download videos from Youtube in the highest quality available. It also allows you to download only the audio of a video in the highest quality available.
                        </p>
                        <div className="my-3 flex flex-row items-center gap-2">
                            <h4 className="text-gray-800 dark:text-gray-200">Tools used:</h4>
                            <div className="flex flex-row items-center gap-2">
                                <p className="bg-indigo-800 rounded-md p-1 hover:animate-pulse">Python</p>
                                <p className="bg-red-800 rounded-md p-1 hover:animate-pulse">PyTube</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-center px-5 py-5 lg:px-12 rounded-2xl items-center bg-lightContrast dark:bg-contrastBackground">
                        <h3 className="text-gray-800 text-2xl font-medium dark:text-gray-300">
                            Zork Video Game
                        </h3>
                        <Carousel className="md:inline carousel-wrapper" showThumbs={false} emulateTouch showArrows showStatus infiniteLoop autoPlay stopOnHover swipeable>
                            <Image src={Zork1} alt="Zork 1"></Image>
                            <Image src={Zork2} alt="Zork 2"></Image>
                        </Carousel>
                        <p className="text-gray-800 dark:text-gray-400">
                            I created a text-based adventure game using C++ during one of my modules. It is a simple game that allows you to explore a world and interact with it.
                        </p>
                        <div className="my-3 flex flex-row items-center gap-2">
                            <h4 className="text-gray-800 dark:text-gray-200">Tools used:</h4>
                            <div className="flex flex-row items-center gap-2">
                                <p className="bg-cyan-800 rounded-md p-1 hover:animate-pulse">C++</p>
                                <p className="bg-green-800 rounded-md p-1 hover:animate-pulse">QT Studio</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
                {/* Wildlife Explore */}
                <motion.section ref={ref4} variants={sectionVariants} initial="hidden" animate="animate" className="my-section flex flex-col gap-3 text-center px-5 py-7 lg:px-12 rounded-2xl items-center bg-lightContrast dark:bg-contrastBackground">
                    <div className="flex flex-col items-center gap-5">
                        <h3 className="text-gray-800 text-2xl font-medium dark:text-gray-300">
                            Wildlife Explore
                        </h3>
                        <Carousel className="md:inline carousel-wrapper carousel-height" showThumbs={false} emulateTouch showArrows showStatus infiniteLoop autoPlay stopOnHover swipeable centerMode centerSlidePercentage={40}>
                            <Image src={App1} alt="Wildlife Explore 1"></Image>
                            <Image src={App2} alt="Wildlife Explore 2"></Image>
                            <Image src={App3} alt="Wildlife Explore 3"></Image>
                            <Image src={App4} alt="Wildlife Explore 4"></Image>
                            <Image src={App5} alt="Wildlife Explore 5"></Image>
                            <Image src={App6} alt="Wildlife Explore 6"></Image>
                        </Carousel>
                        <div className="flex flex-col items-center">
                            <p className="mb-3 text-gray-800 dark:text-gray-400">
                                During my college course, I collaborated with my peers to develop a mobile application that utilizes machine learning to identify animals from images. I took charge of the frontend development of the application using Figma and Android Studio, and successfully implemented all the necessary components.
                            </p>
                            <p className="text-gray-800 dark:text-gray-400">
                                By applying Google&apos;s Material Design language, I was able to create an impressive user interface while using Android Studio. As part of my responsibilities, I also integrated the Camera API into our application, which was a significant learning experience for me. Through this process, I gained a deeper understanding of how Android apps utilize the phone&apos;s camera, and how to effectively implement it into our application.
                            </p>
                            <div className="my-3 flex flex-row items-center gap-2">
                                <h4 className="text-gray-800 dark:text-gray-200">Tools used:</h4>
                                <div className="flex flex-row items-center gap-2">
                                    <p className="bg-green-600 rounded-md p-1 hover:animate-pulse">Android Studio</p>
                                    <p className="bg-indigo-800 rounded-md p-1 hover:animate-pulse">Python</p>
                                    <p className="bg-orange-600 rounded-md p-1 hover:animate-pulse">Figma</p>
                                    <p className="bg-purple-600 rounded-md p-1 hover:animate-pulse">Java</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
                {/* THIS SECTION DEALS WITH THE FOOTER */}
                <motion.section initial="hidden" animate="animate" className="mb-5 pr-8 flex justify-center md:justify-end bg-lightContrast dark:bg-contrastBackground rounded-2xl w-full p-5 transition ease-in-out duration-200 hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-zinc-800">
                    <p className="flex gap-1 items-center text-gray-800 dark:text-gray-400 text-xs md:text-base">
                        Designed and implemented with{" "}
                        <BsHeartFill className="text-red-800" /> by Sergiu.
                    </p>
                </motion.section>
            </main>
        </div>
    );
}

export default Projects;

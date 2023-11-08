"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import { useTypewriter, Cursor } from "react-simple-typewriter";
const HeroSection = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = "/Ketan-Mohite-Resume.pdf"; // Use the correct path
    link.target = "_blank";
    link.download = "Ketan-Mohite-Resume.pdf";
    link.click();
    window.open(link.href, "_blank");
  };
  const [text] = useTypewriter({
    words: ["Professional Coder", "Full Stack Developer", "UI Developer"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Ketan!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            {/* <h2 className="text-4xl font-bold text-white"> */}
          <span className="font-semibold text-teal-600">{text}</span>
          <Cursor
            // cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        {/* </h2> */}
            
            based in Pune,Maharashtra. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <button
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
            onClick={handleDownloadClick}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce cursor-pointer" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection

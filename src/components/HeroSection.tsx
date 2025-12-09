import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-pink-600">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Balikis",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Software Developer",
                1000,
                "a ML Engineer",
                1000,
                "a Technical Recruiter",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Software developer with a strong focus on building scalable backend
            systems and engaging user interfaces. Passionate about delivering
            clean, efficient products that enhance usability and business
            performance.
          </p>
          <div>
            <button className="px-6 py-3 w-full focus:scale-[0.98] sm:w-fit rounded-full mr-4 bg-linear-to-br from-pink-300 via-pink-400 to-pink-500 hover:bg-slate-800 text-white">
              Hire Me
            </button>
            <button className="p-1 w-full focus:scale-[0.98] sm:w-fit rounded-full bg-linear-to-br from-pink-300 via-pink-400 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <Link
                  href={
                    "https://docs.google.com/document/d/1suxeRaeID5hvGkN0Btm1wUIiNxZQYoBO0OksZOzxHys/edit?usp=sharing"
                  }
                >
                  Download CV
                </Link>
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/hero.png"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

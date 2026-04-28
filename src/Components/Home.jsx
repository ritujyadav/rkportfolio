import React from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import { SiSpringboot } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";



function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gray-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-600">Rituj Yadav</span>
          </h2>

          <h3 className="text-2xl font-semibold text-gray-700">
            <TypeAnimation
              sequence={[
                "Java Developer",
                2000,
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Spring Boot Backend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h3>

          <p className="text-gray-600 max-w-lg">
            Passionate developer focused on building scalable web
            applications using Java, Spring Boot, React, and modern
            technologies. I love solving real-world problems through code.
          </p>
          {/* SOCIAL + TECH STACK */}
<div className="flex flex-col md:flex-row gap-26 pt-4">

  {/* Available On */}
  <div>
    <h4 className="text-sm font-semibold text-gray-600 mb-2">
      Available on
    </h4>

    <div className="flex gap-4 text-xl">
      <a href="https://github.com/ritujyadav" target="_blank">
        <i className="hover:text-blue-600 cursor-pointer">
          <FaGithub />
        </i>
      </a>

      <a href="https://linkedin.com/in/rituj-yadav-aa97512ba" target="_blank">
        <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
      </a>

     <a href="https://t.me/hariomritujyadav" target="_blank">
        <FaTelegram className="hover:text-blue-600 cursor-pointer" />
      </a>
    </div>
  </div>

  {/* Currently Working On */}
  <div>
    <h4 className="text-sm font-semibold text-gray-600 mb-2">
      Currently working on
    </h4>

    <div className="flex gap-4 text-2xl">
      <SiSpringboot className="hover:scale-110 transition" />
      <FaReact className="hover:scale-110 transition" />
      <FaNodeJs className="hover:scale-110 transition" />
      <FaJava className="hover:scale-110 transition" />
    </div>
  </div>

</div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="/Rk.png"
            alt="profile"
            className="w-72 md:w-96 rounded-full shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
export default Home
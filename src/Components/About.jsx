import React from "react";

import { FaJava, FaReact } from "react-icons/fa";
import {
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiApachekafka,
  SiRedis,
} from "react-icons/si";

function About() {
  return (
    <section id="about" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">

          <div>
            <h2 className="text-3xl font-bold mb-3"> About</h2>
            <p className="text-gray-600 leading-relaxed">
              I am Rituj Yadav, a passionate Full Stack Developer focused
              on Java, Spring Boot, React and scalable backend systems.
              Enthusiastic in solving DSA problems and building
              real-world applications.
            </p>
          </div>

          <div>
            <h2 className="text-green-500 font-semibold text-xl">
             Education & Training
            </h2>

            <ul className="text-gray-600 space-y-2">
              <li>🎓 B.Tech CSE – United University</li>
              <li>📘 Java Full Stack Development</li>
              <li>📗 Data Structures & Algorithms</li>
              <li>📙 Backend Engineering</li>
            </ul>
          </div>

          <div>
            <h2 className="text-green-500 font-semibold text-xl">
               Skills & Expertise
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                "Java",
                "Spring Boot",
                "React",
                "Tailwind",
                "MySQL",
                "Redis",
                "Kafka",
                "REST APIs",
                "DSA",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE ORBIT */}
        <div className="relative flex justify-center items-center h-[350px]">

          {/* CENTER TEXT */}
          <div className="absolute text-center">
            <h3 className="text-xl font-bold text-blue-600">
              Tech Stack
            </h3>
            <p className="text-sm text-gray-600">
              Enthusiastic in solving DSA 
            </p>
          </div>

          {/* ORBIT */}
          <div className="orbit-large">

            <FaJava className="orbit-item text-red-500" />
            <FaReact className="orbit-item text-blue-500" />
            <SiSpringboot className="orbit-item text-green-600" />
            <SiMysql className="orbit-item text-blue-700" />
            <SiTailwindcss className="orbit-item text-cyan-500" />
            <SiPostman className="orbit-item text-orange-500" />
            <SiApachekafka className="orbit-item text-black" />
            <SiRedis className="orbit-item text-red-600" />

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
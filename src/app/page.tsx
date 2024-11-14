"use client";

import { motion } from "framer-motion";

const messages = [
  "Hey there! 👋🏻 I'm Raiyan, your friendly neighborhood developer",
  "Coding by day, debugging by night, and always ready to bring your dreams to life one line of code at a time!",
  "From Wingardium Leviosa to Complex Algorithms, I've got more tricks up my sleeve than Dumbledore at a hackathon! 🧙‍♂️",
  "Think of me as the Swiss Army knife of web development - I've got tools for every problem! 🛠️",
  "Frontend? Backend? Full-stack wizardry? I've mastered the code spells that make both worlds come together like peanut butter and jelly 🤖",
  "Currently brewing: A perfect blend of creativity and functionality ☕",
  "My code is like my portfolio - clean, efficient, and straight to the point",
  "Let's turn your < ideas > into < reality /> together! 🚀",
  "Ready to start? I'm just an email away",
];

export default function Home() {
  return (
    <motion.ul
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.6,
      }}
      className="bg-background px-6 gap-3 py-3 content-start grid justify-items-end"
    >
      {messages.map((message, index) => (
        <motion.li
          key={index}
          variants={{
            initial: {
              opacity: 0,
              y: 50,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
          }}
          className="w-[clamp(60vw,fit-content,23rem)] px-3 py-1.5 rounded-2xl dark:bg-[#f4f4f41a] bg-amber-400"
        >
          {message}
        </motion.li>
      ))}
    </motion.ul>
  );
}

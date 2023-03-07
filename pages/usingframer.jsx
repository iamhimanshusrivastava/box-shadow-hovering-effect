import { Fragment } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Fragment>
      <div className="flex flex-col justify-center h-screen items-center bg-gradient-to-r from-[#595cff] to-[#c6f8ff]">
        <h1 className="text-center text-white text-9xl font-bold">
          Using Framer Motion
        </h1>
        <motion.div
          className="mt-16 p-10 border rounded-xl cursor-pointer"
          whileHover={{ boxShadow: "0px 0px 0px 8px #D5DBEC" }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-inter font-bold text-white px-6 py-6">
              Hover here!
            </h1>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
}

// #D5DBEC framer card box-shadow color
// #fdf2e9cc onmifood form input focus box-shadow color

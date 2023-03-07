import { Fragment } from "react";
import { LayoutGroup, motion } from "framer-motion";

export default function TabHover() {
  return (
    <Fragment>
      <motion.div
        transition={{
          layout: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        className="flex justify-center items-center space-x-4 bg-gray-100 h-screen"
      >
        <LayoutGroup>
          <motion.button
            className="px-6 py-3 rounded-lg  font-inter font-semibold bg-indigo-100 text-indigo-700"
            whileHover={{ backgroundColor: "#E39695" }}
            transition={{ type: "linear", duration: 0.3 }}
          >
            Hover
          </motion.button>
          <motion.button
            layout
            className="px-6 py-3 rounded-lg  font-inter font-semibold bg-indigo-100 text-indigo-700"
            whileHover={{ backgroundColor: "#E39695" }}
            transition={{ type: "linear", duration: 0.3 }}
          >
            Hover
          </motion.button>
          <motion.button
            layout
            className="px-6 py-3 rounded-lg  font-inter font-semibold bg-indigo-100 text-indigo-700"
            whileHover={{ backgroundColor: "#E39695" }}
            transition={{ type: "linear", duration: 0.3 }}
          >
            Hover
          </motion.button>
        </LayoutGroup>
        {/* <button className="px-6 py-3 rounded-lg text-white font-inter font-semibold bg-blue-500 hover:bg-blue-400 transition delay-600 ease-linear">
          Hover
        </button> */}
      </motion.div>
    </Fragment>
  );
}

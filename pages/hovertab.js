import { Fragment, useState } from "react";

import { motion } from "framer-motion";

export default function HoverTab() {
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState("Item 1");
  const tabs = ["Item 1", "Item 2", "Item 3"];

  return (
    <Fragment>
      <div
        className="flex h-screen justify-center items-center bg-slate-300"
        onMouseLeave={() => setFocused(item)}
      >
        {tabs.map((item) => (
          <div
            className="relative list-none cursor-pointer w-[50px] h-[30px] outline-none"
            key={item}
            onClick={() => setSelected(item)}
            onKeyDown={(event) =>
              event.key === "Enter" ? setSelected(item) : null
            }
            onFocus={() => setFocused(item)}
            onMouseEnter={() => setFocused(item)}
            tabIndex={0}
          >
            <span className="absolute left-1 right-0 top-[6px] bottom-0 z-[1] text-[#E8E8FD] font-[1rem]">
              {item}
            </span>
            {focused === item ? (
              <motion.div
                transition={{
                  layout: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "-10px",
                  right: 0,
                  width: "140%",
                  height: "110%",
                  background: "#23272F",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
                layoutId="highlight"
              />
            ) : null}
            {selected === item ? (
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: "0px",
                  right: 0,
                  height: "4px",
                  background: "#5686F5",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
                layoutId="underline"
              />
            ) : null}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

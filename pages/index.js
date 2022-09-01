import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div className="flex justify-center h-screen items-center bg-gradient-to-r from-[#595cff] to-[#c6f8ff]">
        <div className="p-10 border shadow-none hover:shadow-[0px_0px_0px_8px_#D5DBEC] transition-shadow delay-95 ease-linear rounded-xl cursor-pointer">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-inter font-bold text-white px-6 py-6">
              Hover here!
            </h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// #D5DBEC framer card box-shadow color
// #fdf2e9cc onmifood form input focus box-shadow color

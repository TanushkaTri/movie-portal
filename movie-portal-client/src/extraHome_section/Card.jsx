import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";

export default function Card() {
  return (
    <div className="rounded-2xl">
      <section className="p-4 sm:p-8 md:p-16 lg:p-24 xl:p-36">
        <div className="card card-side shadow-xl">
          <div className="rounded-xl card-body bg-gradient-to-r from-pink-800 via-sky-700 to-blue-900">
            <h2 className="card-title">
              <span className="flex justify-center sm:justify-start text-4xl md:text-6xl lg:text-8xl font-semibold lg:ml-48 text-white">
                Watching
              </span>
            </h2>
            <h1 className="text-center sm:text-left text-3xl md:text-5xl lg:text-7xl font-bold text-yellow-400 lg:ml-64">
              Is Convincing
            </h1>
            <p className="flex justify-center sm:justify-start text-4xl">
              <MdSlowMotionVideo />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";

const WhoAreWe = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-white">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div>
          <p className="text-sm uppercase tracking-widest mb-5">
            Who are we?
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            A web design and branding agency in Manchester
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">

          <p className="text-lg md:text-xl leading-8 text-gray-600 mb-8">
            We are an independent web design and branding agency
            creating digital experiences for ambitious brands.
            We combine creativity, strategy and technology to
            create websites that make an impact.
          </p>

          <div className="flex gap-4 flex-wrap">

            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              About Shape
            </button>

            <button className="border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
              Meet the Team
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoAreWe;


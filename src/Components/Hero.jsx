import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="w-full">
        <div className="relative w-full h-[600px]">
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4"
              type="video/mp4"
            />
          </video>

          {/* Text on Video */}

          <div className="absolute top-20 left-10 bg-white p-4 rounded-2xl">
            <h1 className="text-black text-4xl md:text-6xl font-bold">
              A Web Design and <br />
              branding agency <br />
              in Manchester
            </h1>
            <button className="text-white bg-black rounded-3xl px-6 py-3">ViewOurWork</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

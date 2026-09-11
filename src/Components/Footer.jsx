import React from "react";

function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white md:px-12">
      <div className="grid gap-12 md:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="text-5xl font-bold md:text-7xl">
            Do you like
            <br />
            What you See?
          </h2>

          <p className="mt-6 max-w-md text-gray-400">
            Have a project in mind? We'd love to hear about it. Let's create
            something amazing together.
          </p>

          <button className="mt-8 rounded-full bg-white px-7 py-4 text-black hover:bg-gray-200">
            Start a project →
          </button>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-semibold">Learn</h3>

            <div className="space-y-3 text-white
            ">
              <p>About</p>
              <p>Culture</p>
              <p>Testimonials</p>
              <p>Processes</p>
              <p>FAQs</p>
              <p>Branding FAQs</p>
              <p>Blog</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Explore</h3>

            <div className="space-y-3 text-white">
              <p>Home</p>
              <p>Work</p>
              <p>Services</p>
              <p>Carriers</p>
              <p>Sectors</p>
              <p>Hex Test</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Get in touch</h3>

            <div className="space-y-3 text-white-400">
              <p>📞t67467947934</p>
              <p>📩hello@example.com</p>
              <p>
                📍MadeByShape 1Gibifeild
                <br />
                Park Avenue
                <br />
                Atherton Manchestor M46OSU
              </p>
              <p>///topped.little.pirate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-sm text-gray-500">
        <p className="text-9xl text-white   ">Crafting since 2010</p>
        <div>Shape.</div>
      </div>
    </footer>
  );
}

export default Footer;

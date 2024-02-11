import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <i>
                <q>
                  Striving for Justice, Building Trust,
                  <br className="hidden lg:inline-block" />
                  <span>&nbsp;Your Ally in Law</span>
                </q>
              </i>
            </h3>
            <p className="mb-5 leading-relaxed">
              Where Justice prevails, your Rights thrive – Advocating Excellence
              in Legal Representation.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src="/hero-pic.png" width={720} height={600} alt="law" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

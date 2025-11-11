import React from "react";

import microsoft from "../assets/microsoft.png";
import google from "../assets/google.png";
import nvidia from "../assets/nvidia.png";
import apple from "../assets/apple.png";
import meta from "../assets/meta.png";

const Companies = () => {
  return (
    <section className="bg-gray-50 py-10">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
        Empowering Careers with Industry Leaders
      </h2>  <div className="flex flex-wrap items-center justify-center gap-8 px-6">
        <img
          className="w-24 h-12 md:w-32 md:h-16 object-contain  hover:grayscale transition"
          src={meta}
          alt="Meta"
        />
        <img
          className="w-24 h-12 md:w-32 md:h-16 object-contain  hover:grayscale transition"
          src={microsoft}
          alt="Microsoft"
        />
        <img
          className="w-24 h-12 md:w-32 md:h-16 object-contain  hover:grayscale transition"
          src={google}
          alt="Google"
        />
        <img
          className="w-24 h-12 md:w-32 md:h-16 object-contain  hover:grayscale transition"
          src={apple}
          alt="Apple"
        />
        <img
          className="w-24 h-12 md:w-32 md:h-16 object-contain  hover:grayscale transition"
          src={nvidia}
          alt="NVIDIA"
        />
      </div>
    </section>
  );
};

export default Companies;
import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-10 p-12">
      <div>
        <h1 className="font-bold text-4xl">
          Find your next <br /> <span className="gradient-text">experience</span>
        </h1>
        <p>
          Discover concerts, meetups, festivals, food, art, sports and
          unforgettable experiences happening around you.
        </p>
        <div></div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col gap-5 items-start justify-start">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NR3nIiBRojn5GQbnSZfGQNggCBGHUzLLW98JBMLaG5ui-UFxOI03ZDi9PRIiHep_2LlkFHtPlOU8Kn-mIt11-teGuSjWzfRQLgdxQNvZBMi89WG_-Da8Md8YiNZsn5FZdJaXqP5XT0MwkxWid_xbHxqFn139lZEsQYLvQs8J9vHC121AQspVzdSK09f_vEGt3c-O_CrxP3Saw_6lt1Rnibb2zT4i1I5SHyu5WPuUZ5C_a-enGrpVFA"
            alt=""
            className="h-[200px] object-cover rounded-xl"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCJAIOHkvkEA3A7dRDYCr99RXqn_AMGzG900IDnF1lZ_4aQ7RGZVQf2tKcvzHgkYleaO4HFqGbY-IbnTCVFN69hq-pGMTNWYAZYhzuLiERWzjc5t1hm0pv8cn20m3r0oghwuRBKP9a4Q4nVKFiK9d9gpiD5fNk9mmdaGdTi9-0lHxHLp6Q_Xvbo-t55_2GF5vQh773783hTuKfjNXgXrdBr36Yz0HOIHEnOEI2xbfL-T_lstbBhD8LQ"
            alt=""
            className="h-[80px] w-full object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-5 items-end justify-end">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLdkr_4DwZ5cL07uOn1Lopvub2OBOodTATu1ZVEWvU1K_UaQyQcI8SOwSlxU8iIKMY48l5tJXFV4k7KhWBg7ULGKRzPFnM-W_C-yVXzRlnIoAg5kz16ZPJXGSrP_6S1hWE-ckC89GjcLSMTCTguZhtZlBR_dCFSC0UQW7VDpGmXriwqzvj5v1gbmbdwCH-Rx1MmPc7piodtHMJBFktAjthpZ30GsrvG2oRmz-6YkMK8IHKzcDOoHrjFQ"
            alt=""
            className="h-[80px] w-full object-cover"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5NR3nIiBRojn5GQbnSZfGQNggCBGHUzLLW98JBMLaG5ui-UFxOI03ZDi9PRIiHep_2LlkFHtPlOU8Kn-mIt11-teGuSjWzfRQLgdxQNvZBMi89WG_-Da8Md8YiNZsn5FZdJaXqP5XT0MwkxWid_xbHxqFn139lZEsQYLvQs8J9vHC121AQspVzdSK09f_vEGt3c-O_CrxP3Saw_6lt1Rnibb2zT4i1I5SHyu5WPuUZ5C_a-enGrpVFA"
            alt=""
            className="h-[160px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

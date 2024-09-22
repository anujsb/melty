import React from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "./ui/button";
import Image from "next/image";
// import { Input } from "./ui/input";

const Features = () => {
  return (
    <div
      className="my-20 pt-10 px-4 md:px-20 w-full flex flex-col items-center justify-center text-center"
      id="features"
    >
      <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
        <Image
          src="/KeyFeatures.svg"
          width={15}
          height={15}
          alt="versatile icon"
          className="mr-1"
        />
        <div>Key Features</div>
      </div>
      <h1 className="my-6 text-xl md:text-2xl lg:text-4xl">
        Everything you are looking for
      </h1>
      <div className="grid grid-flow-row gap-4 p-4 md:p-10">
        <div className="grid grid-flow-row md:grid-flow-col gap-4 md:grid-cols-12">
          <div className="border rounded-lg p-4 col-span-12 md:col-span-7 bg-gradient-to-br from-[#f8f9fa] to-[#ebedfc] flex flex-col justify-between items-center gap-2">
            <div className="flex">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Refactor.svg"
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">Refactor</h1>
            </div>
            <video className="w-full h-auto" autoPlay loop muted>
              <source src="/Refactor.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="border rounded-lg p-4 col-span-12 md:col-span-5 brain flex flex-col justify-between items-center gap-2">
            <div className="flex">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Navigate.svg"
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Navigate large codebases
              </h1>
            </div>
            <video className="w-full h-auto" autoPlay loop muted>
              <source src="/nav.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="grid grid-flow-row md:grid-flow-col gap-4">
          <div className="border rounded-lg p-4 flex flex-col justify-between items-center gap-2">
            <div className="flex">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image src="web.svg" width={25} height={25} alt="search icon" />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Create web apps from scratch
              </h1>
            </div>
            <video className="w-auto h-auto" autoPlay loop muted>
              <source src="/web.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="border rounded-lg p-4 flex flex-col justify-between items-center gap-2">
            <div className="flex">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Commit.svg"
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-lg md:text-xl font-semibold">
                Write its own commits
              </h1>
            </div>
            <Image
              src="/commit.png"
              width={525}
              height={525}
              alt="search icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

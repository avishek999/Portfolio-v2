"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/moving-border";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full my-24 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-3xl font-bold text-center text-white relative z-20">
       Connect with me!
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
   <form action="">
        <div className="flex flex-col md:flex-row space-y-6 md:space-x-12  items-center mt-5">
      <input className="border-white/30 border-2  bg-black w-9/12 px-7  py-4 rounded-md"  placeholder="First Name" type="text" name="" id="" />
      <input type="text" className="border-white/30 border-2 px-7  py-4  bg-black w-9/12  rounded-md" placeholder="Last Name"  />
      </div>
      <textarea placeholder="Write Your message" className=" duration-100 mt-5 focus:dark:border-white focus:border-black focus:dark:outline-white focus:outline-black bg-transparent h-64 dark:border-white/40 border-black/40 p-4 rounded-lg w-full flex-auto  border-2" name="" id=""></textarea>

      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 mb-14"
      >
       Submit
      </Button>
      </form>
    </div>
  );
}

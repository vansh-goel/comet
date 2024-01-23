"use client"
import { Boxes } from "@/components/ui/background-box";
import { db } from "@/lib/db";

export default async function Home() {
  
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden bg-black flex-col relative items-center justify-center">
      <Boxes />
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> 
        <div className=" h-full bg-white/10 text-white w-full grid place-content-center">
            <div className="text-center font-mono z-50 w-fit ">
              <h1 className="text-8xl">
                Welcome to
              </h1>
              <br/>
              <p className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">~ comet ~</p>
              <p className="text-lg pt-4">The platform which keeps you updated with the latest things happening in your friends' lives.</p>
            </div> 
        </div>
      </div>
  );
}

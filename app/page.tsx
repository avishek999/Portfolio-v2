import { GridBackgroundDemo } from "@/components/background/GridBackgroundDemo";
import { SparklesPreview } from "@/components/contacts/Contacts";
import { LampDemo } from "@/components/lamp/lamp";
import { HeroScrollDemo } from "@/components/macbook/MacbookScrollDemo";
import Navbar from "@/components/navbar/Navbar";
import Navbar1 from "@/components/navbar/Navbar1";
import { TimelineDemo } from "@/components/skills/Skills";

import Image from "next/image";



export default function Home() {
  return (
  <>
  
   <Navbar />
   <GridBackgroundDemo/>
   <HeroScrollDemo/>
   <LampDemo/>
   <TimelineDemo />
  {/* <GoogleGeminiEffectDemo /> */}
  <Navbar1/>
  <SparklesPreview/>

   
  </>
  );
}




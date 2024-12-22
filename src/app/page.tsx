"use client"
import { ThemeProvider } from 'next-themes'

import HeroSection from "./components/HeroSection"
import { ModeToggle } from "./components/ModeToggle"
import { BentoGridThirdDemo } from './components/grid';
import { FloatingNavDemo } from './components/Navbar'

import { TimelineDemo } from '@/app/components/timeline_CV' 
import {SignupFormDemo} from '@/app/components/SignUpForm'





function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

export default function Home() {
  return (
    <ThemeWrapper>

      <FloatingNavDemo></FloatingNavDemo>
      <div className="relative min-h-screen">
        <div className="absolute top-4 left-4 z-10">
          <ModeToggle/>
        </div>

        <main className="flex min-h-screen flex-col container mx-auto px-12 pt-16">

          <HeroSection />
          <BentoGridThirdDemo></BentoGridThirdDemo>
          <TimelineDemo></TimelineDemo>
          <SignupFormDemo></SignupFormDemo>
          
          


        </main>
      </div>
      
    </ThemeWrapper>
  );
}
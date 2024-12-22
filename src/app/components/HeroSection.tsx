"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import ContactButton from '@/components/ui/contact-button'
import Image from 'next/image';
import myImage from '../pictures/DSC00479.jpg'


const HeroSection = () => {
  return (
    <section>
      {/* Grid für den gesamten Abschnitt */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Linker Bereich mit Text (über 7 Spalten bei Desktop) */}
        <div className="lg:col-span-7">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b6788] to-[#4b6788] dark:from-white dark:to-[#f8ca15] transition-colors duration-100">
              Hello, I&apos;m{" "}
            </span>

          </h1>
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f9bc3c] to-[#f9bc3c] dark:from-white dark:to-[#f8ca15] transition-colors duration-100">
              <TypeAnimation
                sequence={[
                  'Joel',
                  2000,
                  'System Engineer',
                  1000,
                  'IT-Specialist',
                  1000,
                  'Full Stack Developer',
                  1000,
                  'Production Engineer',
                  1000
                ]}
                speed={48}
                repeat={Infinity} />
            </span>
          </h1>
          <p className="text-[#121212] dark:text-[#ADB7BE] text-lg lg:text-3xl transition-colors duration-300">
            Swiss Smart Solutions That Make the Difference!
          </p>
        </div>

        {/* Rechter Bereich mit dem Button (nur sichtbar ab LG-Größe) */}
        <div className="hidden lg:flex lg:col-span-5 lg:items-center lg:justify-end mt-4 lg:mt-0">
          <ContactButton />
        </div>
      </div>

      {/* Button unterhalb des Textes für mobile Ansichten */}
      <div className="lg:hidden mt-4">
        <ContactButton />
      </div>

      <div className='mt-10 flex flex-col md:flex-row items-center justify-between gap-10'>
        <div className='flex-1 max-w-xl'>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Ich unterstütze Startups, Fachkräfte und Projekte dabei, ihre Ziele zu erreichen! Mit massgeschneidertem Design, Entwicklung, <br /> Content Erstellung sowie umfassender Beratung.
          </p>
        </div>

        <div className='relative w-[300px] h-[300px] md:w-[300px] md:h-[300px] overflow-hidden rounded-full'>
          <Image
            src={myImage}
            alt="ME"
            fill
            sizes="(max-width: 768px) 300px, 600px"
            priority
            className="object-cover"
            quality={75}
            unoptimized={false}
          />
        </div>
      </div>

      {/* Produkt-Sektion mit angepasster Breite und Styling */}
      <div className="mt-50 pt-12">
        <div className="lg:col-span-7">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b6788] to-[#4b6788] dark:from-[#f8ca15] dark:to-white">
              My Expertise
            </span>
          </h2>

        </div>
        {/* KI Content Generation
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <div className="space-y-2">
                  <h3 className="text-[#121212] dark:text-white text-xl font-semibold">
                    KI Content Generation
                  </h3>
                  <p className="text-[#121212] dark:text-[#ADB7BE] text-base">
                    Automatisierte Erstellung hochwertiger Inhalte mit modernster KI-Technologie.
                    Optimieren Sie Ihre Content-Strategie und sparen Sie wertvolle Zeit.
                  </p>
                </div>
      
                
                <div className="space-y-2">
                  <h3 className="text-[#121212] dark:text-white text-xl font-semibold">
                    Automatische Dokumentenkorrektur
                  </h3>
                  <p className="text-[#121212] dark:text-[#ADB7BE] text-base">
                    Intelligente Prüfung und Korrektur Ihrer Dokumente.
                    Garantiert fehlerfreie und professionelle Unterlagen im GMP-Umfeld.
                  </p>
                </div>
      
                
                <div className="space-y-2">
                  <h3 className="text-[#121212] dark:text-white text-xl font-semibold">
                    Web Design
                  </h3>
                  <p className="text-[#121212] dark:text-[#ADB7BE] text-base">
                    Moderne und responsive Webdesigns mit neuesten Technologien.
                    Optimale User Experience durch minimalistisches Design.
                  </p>
                </div>
      
                {/* GMP Environment
                <div className="space-y-2">
                  <h3 className="text-[#121212] dark:text-white text-xl font-semibold">
                    GMP Environment
                  </h3>
                  <p className="text-[#121212] dark:text-[#ADB7BE] text-base">
                    Effiziente Automatisierung Ihrer GMP-Dokumentation.
                    Vereinfachte Workflows für mehr Produktivität im regulierten Umfeld.
                  </p>
                </div>
              </div>       */}
      </div>

    </section>
  )
}

export default HeroSection
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import blogScreenshot from '../pictures/blog_screenshot.png';
import blogScreenshot3 from '../pictures/pic1.webp';
import blogScreenshot2 from '../pictures/pic2.webp';
import medTech from '../pictures/med_1.jpg';
import medTech_2 from '../pictures/medTech_2.jpg';

export function TimelineDemo() {
    const data = [
        {
            title: "Current Work",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Working in IT and Love it! <br></br>


                        Aktuell arbeite ich an innovativen IT-Projekten, die modernste Technologien und kreative Lösungen vereinen. Mein Schwerpunkt liegt auf der Entwicklung skalierbarer Software, der Optimierung von Systemen und der Einführung zukunftsweisender Technologien wie Cloud-Computing und Machine Learning.

                        Dabei lege ich besonderen Wert auf benutzerfreundliche Designs, effiziente Prozesse und höchste Sicherheitsstandards. Jedes Projekt, an dem ich arbeite, ist darauf ausgerichtet, die spezifischen Anforderungen meiner Kunden zu erfüllen und nachhaltige Werte zu schaffen.

                        Meine Leidenschaft für Technologie und mein Streben nach Perfektion treiben mich an, immer die besten Ergebnisse zu liefern – sei es bei der Entwicklung neuer Anwendungen oder der Optimierung bestehender Systeme.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={blogScreenshot}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={blogScreenshot3}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={blogScreenshot2}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={blogScreenshot}
                            alt="startup template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Previous Work",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Mit mehrjähriger Erfahrung als Ingenieur in der Medizintechnik bin ich mit den strengen Anforderungen sowie Aufwänden in GxP-regulierten Umgebungen bestens vertraut.
                        Qualitätssicherung, Validierung und Compliance sind für mich essenzielle Bestandteile jeder erfolgreichen Projektumsetzung.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Meine Arbeit vereint technologische Innovation mit den höchsten Standards der Regulierung, um Lösungen zu schaffen, die sowohl funktional als auch vollständig konform sind. Der Foxus liegt bei der Automatisierten erstellung von Validierungen, Qualifizierungen sowie Validation Reports.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src={medTech}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src={medTech_2}
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: "Our Work",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Melde dich noch heute und erhalte folgende Infos:
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ kostenlose Ideen-Validierung
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Unverbindliches erstgespräch
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Besprechung eines Use-Casees
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Systemintegrations-Check
                        </div>

                    </div>

                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}

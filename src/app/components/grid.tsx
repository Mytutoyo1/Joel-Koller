"use client";
import { cn } from "@/lib/utils";
import React, { useState, useId, useRef, useEffect } from "react";
import { BentoGrid, } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThreeDCardDemo } from '@/app/components/3D_cart';
import { useOutsideClick } from "@/components/ui/ues-outside-clicks";

interface BentoGridItemProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function BentoGridItem({ 
  title, 
  description, 
  header, 
  className, 
  icon,
  onClick 
}: BentoGridItemProps) {
  return (
    <div 
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      onClick={onClick}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
}


export function BentoGridThirdDemo() {
  const [active, setActive] = useState<(typeof items)[number] | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}-${id}`}
              className="w-full max-w-[600px] h-fit max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{active.title}</h2>
                <div className="text-neutral-600 dark:text-green-400">
                  {active.description}
                </div>
                
                {active.expandedContent && (
                  <div className="mt-4">
                    {active.expandedContent()}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto">
        <BentoGrid className="max-w-12xl md:auto-rows-[30rem] mt-4 ml-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg] dark:bg-[#134237]", item.className)}
              icon={item.icon}
              onClick={() => setActive(item)}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-gray-300 dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-gray-300 dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-gray-300 dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 20) + 35 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-500 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-gray-100 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Operational Qualification 
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          DQ,IQ,OQ
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-gray-100 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Performance Qualification 
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          PQ
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-gray-100 p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Validation Reports
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
        VB
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-gray-200 dark:bg-black"
      >
        <Image
          src=""
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
        Heutzutage ist es wichtig, in eine Vielzahl von digitalen Marketingstrategien zu investieren, einschließlich SEO,
         Content-Marketing, Social Media und E-Mail-Marketing, um eine breite Zielgruppe zu erreichen...
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-gray-300 dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Nutze digitales Marketing..</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "KI Chatbots",
    description: (
      <span className="text-sm">
        Chatbots perfekt auf Ihr unternehmen zugeschnitten und die Erfolge von morgen gestalten.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,   
    expandedContent: () => (
      <div>
        <p>
          KI Chatbots revolutionieren die Unternehmenskommunikation durch fortschrittliche, maßgeschneiderte Lösungen. 
          Unsere intelligenten Chatbots sind darauf ausgelegt, Kundenanfragen präzise und effizient zu beantworten, 
          während sie gleichzeitig ein nahtloses und personalisiertes Benutzererlebnis bieten.
        </p>
        <br />
        <p>
          Durch den Einsatz von fortschrittlichen Algorithmen und maschinellem Lernen können unsere KI-Chatbots:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>Kundenanfragen in Echtzeit beantworten</li>
          <li>Komplexe Prozesse automatisieren</li>
          <li>Personalisierte Empfehlungen geben</li>
          <li>Die Kundenzufriedenheit steigern</li>
        </ul>
      </div>
    )
  },
  {
    title: "Automatische Dokumentenkorrektur",
    description: (
      <span className="text-sm">
        Perfekte Dokumente - automatisch, präzise, fehlerfrei.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    
    header: <ThreeDCardDemo />,
   
  },
  {
    title: "GMP enviroment made Easy!",
    description: (
      <span className="text-sm">
        Durch automatisierte Workflows die GMP-Dokumentation effizient vereinfachen und wertvolle Zeit einsparen.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Text Summarization",
    description: (
      <span className="text-sm">
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
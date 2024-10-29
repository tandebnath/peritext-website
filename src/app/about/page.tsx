'use client';
import PageSkeleton from "@/components/PageSkeleton";
import { aboutData } from "@/modules/AboutData";
import { motion } from "framer-motion";

const accentColor = "#36aa5d";
const secondaryColor = "#6B21A8";

export default function About() {
  return (
    <PageSkeleton title="About the Project" showLine lineColor={accentColor}>
      {aboutData.map((section) => {
        if (section.type === "text") {
          return (
            <motion.p
              key={section.id}
              className="mb-6 text-base leading-relaxed tracking-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: section.id * 0.1 }}
            >
              {section.content}
            </motion.p>
          );
        } else if (section.type === "image") {
          return (
            <motion.div
              key={section.id}
              className={`mb-6 ${
                section.align === "left"
                  ? "md:float-left md:mr-6"
                  : "md:float-right md:ml-6"
              } w-full md:w-1/4`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: section.id * 0.2 }}
            >
              <img
                src={section.src}
                alt={section.alt}
                className="w-full h-auto"
              />
            </motion.div>
          );
        }
      })}
      <div className="clear-both" />
    </PageSkeleton>
  );
}

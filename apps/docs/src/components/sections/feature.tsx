"use client";
import { Features } from "../block/features";
import { motion } from "framer-motion";

function FeatureSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 md:py-20 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-4 mb-12"
      >
        <div className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Everything You Need
        </div>
        <div className="mt-4 text-sm sm:text-base max-w-[320px] text-muted-foreground font-light lg:text-lg sm:max-w-[600px] md:max-w-[800px] text-center mb-8 sm:mb-12 md:mb-24">
          CodeGen provides a comprehensive set of tools for modern development
          workflows.
        </div>
      </motion.div>
      <Features />
    </div>
  );
}

export default FeatureSection;

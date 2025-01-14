import { Features } from "../block/features";

function FeatureSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 md:py-20 overflow-hidden relative">
      <div className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl/tight">
        Everything You Need
      </div>
      <div className="mt-4 text-sm sm:text-base max-w-[320px] text-muted-foreground md:text-lg lg:text-xl sm:max-w-[600px] text-center mb-8 sm:mb-12 md:mb-24">
        CodeGen provides a comprehensive set of tools for modern development
        workflows.
      </div>
      <Features />
    </div>
  );
}

export default FeatureSection;

import Footer from "../components/footer";
import { Header } from "../components/header";
import CATSection from "../components/sections/cat";
import FeatureSection from "../components/sections/feature";
import HeroSection from "../components/sections/hero";
import InstallationSection from "../components/sections/installation";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Header />
      {/* <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 " /> */}
      <HeroSection />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 my-10" />
      <FeatureSection />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 my-10" />
      <InstallationSection />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 my-10" />
      <CATSection />
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0 my-10" />
      <Footer />
    </main>
  );
}

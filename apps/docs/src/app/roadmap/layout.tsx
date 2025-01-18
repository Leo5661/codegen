import Footer from "@/src/components/footer";
import { Header } from "@/src/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex flex-col relative">{children}</div>
  );
}

import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center my-16">
      <TextHoverEffect text="CodeGen" />
      <div className="text-sm text-muted-foreground">
        Made with ❤️ by{" "}
        <span className="hover:underline hover:underline-offset-4">
          <Link
            href="https://x.com/_leocoder_"
            className="text-foreground/70 font-semibold"
          >
            @_leocoder_
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;

import Link from "next/link";
import { TextHoverEffect } from "./ui/text-hover-effect";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TextHoverEffect text="CodeGen" />

      <div className="text-sm text-muted-foreground">
        Made with ❤️ by{" "}
        <span className="hover:underline hover:underline-offset-4">
          <Link href="https://github.com/Leo5661">Rahul Singh (Leo5661)</Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;

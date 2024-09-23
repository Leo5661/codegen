import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import CodegenLogoLight from "@/public/codegen-logo-light.png"

export function DocNavLogo(): React.ReactNode {
    return (
        <div className="flex flex-row items-center gap-2">
            <Image src={CodegenLogoLight} alt="logo" width={25} height={25} />
            <span className="text-xl bg-gradient-to-r from-purple-500 to-cyan-300 bg-clip-text text-transparent">
                CodeGen Docs
            </span>
        </div>
    );
}

export default DocNavLogo;
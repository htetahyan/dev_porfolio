
"use client";

import {usePathname, useRouter} from "next/navigation";
import { animatePageOut } from "@/animations/PageAnimate";

export default function TransitionLink({
                                           href,
                                           label,
                                           className = '',
                                       }: {
    href: string;
    label: string;
    className?: string;
}) {
    const router = useRouter();
const pathname=usePathname()
    const handleClick = () => {
        if (pathname === href) return;
        animatePageOut({href, router});
    };

    return (
        <button
            className={className + " border-[1px] border-black p-4 rounded-xl hover:bg-black hover:text-neutral-100 cursor-pointer"}
            onClick={handleClick}
        >
            {label}
        </button>
    );
}

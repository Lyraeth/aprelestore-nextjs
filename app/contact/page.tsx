"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from "../components/particles";
import {
    faTwitter,
    faTelegram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        icon: faTwitter,
        href: "https://twitter.com/wfrcoklat",
        label: "Twitter",
        handle: "@wfrcoklat",
    },
    {
        icon: faTelegram,
        href: "https://t.me/Apreleisa",
        label: "Telegram",
        handle: "Apreleisa",
    },
    {
        icon: faWhatsapp,
        href: "https://wa.me/628993337395",
        label: "WhatsApp",
        handle: "lele",
    },
];

export default function Example() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
            <Navigation />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-12">
                    {socials.map((s, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden rounded-lg shadow-lg"
                        >
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-6 relative flex flex-col items-center gap-4 duration-500 group hover:bg-zinc-800/90 hover:scale-105 hover:shadow-xl transition-all"
                            >
                                <span className="relative z-10 flex items-center justify-center w-14 h-14 text-sm duration-300 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-lg">
                                    {/* Render icon Font Awesome */}
                                    <FontAwesomeIcon
                                        icon={s.icon}
                                        className="w-8 h-8"
                                    />
                                </span>
                                <div className="z-10 flex flex-col items-center">
                                    <span className="text-lg font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                                        {s.handle}
                                    </span>
                                    <span className="mt-2 text-sm text-center duration-300 text-zinc-400 group-hover:text-zinc-200">
                                        {s.label}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

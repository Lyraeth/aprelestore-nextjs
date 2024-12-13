import Link from "next/link";
import Particles from "./components/particles";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center ">
                <div className="flex flex-row gap-4">
                    <div className="hover:underline underline-offset-4">
                        <Link
                            href={"/pricelist"}
                            className="select-none text-lg transition-all duration-300 hover:text-slate-500"
                        >
                            Pricelist
                        </Link>
                    </div>
                    <div className="hover:underline underline-offset-4">
                        <Link
                            href={"/contact"}
                            className="select-none text-lg transition-all duration-300 hover:text-slate-500"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                <Particles
                    className="absolute inset-0 -z-10 animate-fade-in"
                    quantity={100}
                />
                <div className="select-none text-6xl sm:text-8xl animate-bounce hover:underline p-2 font-bold">
                    Aprele Store
                </div>
                <div className="flex items-center flex-col sm:flex-row gap-2">
                    menyediakan kebutuhan premium anda
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                © 2024 Lyraeth
            </footer>
        </div>
    );
}

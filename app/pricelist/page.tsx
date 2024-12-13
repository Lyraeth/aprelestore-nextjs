import { Navigation } from "../components/nav";
import Particles from "../components/particles";

export default function Pricelist() {
    return (
        <>
            <Navigation />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
        </>
    );
}

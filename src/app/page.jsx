import Image from "next/image";

export default function Home() {
    return (
        <div>
            <h1 className="font-passion-one text-5xl tooltip tooltip-right" data-tip="Passion One">Andres Dev <span className="text-6xl text-primary">.</span></h1>
            <h1 className="font-inter tooltip tooltip-right" data-tip="Inter">Home con fuente normal</h1>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="w-full max-w-[900px] mx-auto my-10">
            <div className="flex flex-col md:flex-row justify-between py-1 px-5 rounded-full bg-zinc-100 text-zinc-600 font-semibold shadow-lg">
                <p className="w-full md:w-auto mb-2 md:mb-0">
                    © 2024 Andrés Gutiérrez.
                </p>
                <ul className="w-full md:w-auto flex gap-5">
                    <li>
                        <a href="#sobre-mi" className="hover:underline">
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:andres52885241@gmail.com"
                            target="_blank"
                            className="hover:underline"
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

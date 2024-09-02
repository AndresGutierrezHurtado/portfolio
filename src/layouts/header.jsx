export default function Header() {
    return (
        <header className="navbar w-full flex justify-center py-2 sticky top-0 z-50">
            <div className="nav-bar">
                <ul className="navbar-blur flex gap-5 px-5 sm:gap-6 md:gap-8 font-bold text-gray-700 py-2 sm:px-10 backdrop-blur-md rounded-full duration-500	">
                    <li>
                        <a
                            className="hover:text-sky-600 duration-300 text-sky-600"
                            href="#section-inicio"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-sky-600 duration-300"
                            href="#section-proyectos"
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-sky-600 duration-300"
                            href="#section-certificados"
                        >
                            Certificados
                        </a>
                    </li>
                    <li className="hidden md:block">
                        <a
                            className="hover:text-sky-600 duration-300"
                            href="#section-sobre-mi"
                        >
                            Sobre mí
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

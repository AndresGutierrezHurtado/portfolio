import Proyectos from "./Components/Proyectos.jsx";
import Certificados from "./Components/Certificados.jsx";

function App() {
    return (
        <>
            <header className="navbar w-full flex justify-center py-2 sticky top-0 z-50">
                <div className="nav-bar">
                    <ul className="navbar-blur flex gap-5 px-5 sm:gap-6 md:gap-8 font-bold text-gray-700 py-2 sm:px-10 backdrop-blur-md rounded-full duration-500	">
                        <li><a className="hover:text-sky-600 duration-300 text-sky-600" href="#section-inicio">Inicio</a></li>
                        <li><a className="hover:text-sky-600 duration-300" href="#section-proyectos">Proyectos</a></li>
                        <li><a className="hover:text-sky-600 duration-300" href="#section-certificados">Certificados</a></li>
                        <li className="hidden md:block"><a className="hover:text-sky-600 duration-300" href="#section-sobre-mi">Sobre mí</a></li>
                    </ul>
                </div>
            </header>

            <main className="px-4">
                <section id="section-inicio" className="py-24 md:py-36 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
                    <div className="flex gap-6 items-center mb-4">
                        <img src="/img/Foto-perfil.jpg" alt="Foto-principal" className="rounded-full shadow-lg size-[65px]" />
                        <a href="https://www.linkedin.com/in/andres-gutiérrez-hurtado-25946728b/" target="_blank">
                            <div className="flex items-center">
                                <span className="relative inline-flex overflow-hidden rounded-full p-[1px] hover:scale-105 duration-300	"> 
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> 
                                    <div className="inline-flex items-center justify-center w-full px-5 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">Disponible</div> 
                                </span>                
                            </div>
                        </a>              
                    </div>

                    <h1 className="text-4xl	font-bold tracking-tight text-gray-800 sm:text-5xl mb-4">Hey, Soy Andrés Gutiérrez</h1>
                    <p className="mt-6 text-xl text-gray-800 text-balance"> 
                    <span className="text-sky-600 font-bold"> Técnico en Programación de Software </span> con formación académica certificada en 
                    diversas tecnologías, con <span className="text-sky-600 font-bold"> dominio del idioma inglés nivel B1 </span> y en formación 
                    como Tecnólogo en Análisis y Desarrollo de Software.</p>
                    <div className="flex gap-6 flex-col sm:flex-row mt-8 text-center sm:text-start">
                        <a href="mailto:andres52885241@gmail.com" target="_blank" className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800">                                    <i className="fa-regular fa-envelope pr-1"></i> Contáctame</a>
                        <a href="https://www.linkedin.com/in/andres-gutiérrez-hurtado-25946728b/" target="_blank" className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800">    <i className="fa-brands fa-linkedin pr-1"></i> Linkedin</a>
                        <a href="https://github.com/AndresGutierrezHurtado" target="_blank" className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800">                         <i className="fa-brands fa-github pr-1"></i> GitHub</a>
                        <a href="/documentos/CV-Andres-Gutierrez.pdf" target="_blank" className="bg-gray-50 hover:bg-gray-100 duration-300 py-1 px-4 rounded-full border border-gray-300	text-gray-800">                               <i className="fa-regular fa-circle-down pr-1"></i> Descarga mi CV</a>
                    </div>
                </section>

                <section id="section-proyectos" className=" w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-10"><i className="fa-solid fa-code text-2xl md:text-3xl px-3"></i>Proyectos</h1>
                    
                    <div className='flex flex-col gap-8 my-5 mb-32'>  
                        <Proyectos title="Express Sale" src="/img/express-sale.jpg" lenguages={['PHP', 'Tailwind', 'JavaScript']} description="Express Sale es un sistema de información para la venta y distribuición de producots de primera necesidad." href="https://express-sale-2024.000webhostapp.com" btn="Sitio Web"/>
                        <Proyectos title="Uniformes la abejita 22" src="/img/Abejita22.jpg" lenguages={['Laravel', 'Tailwind', 'JavaScript']} description="La abejita 22 es un sistema de información para la venta de uniformes escolares." href="https://laabejita22.000webhostapp.com" btn="Sitio Web"/>
                        <Proyectos title="Pet's Hoddies" src="/img/pets-hoddies.jpg" lenguages={['React', 'Tailwind', 'Express', 'Node']} description="Pet's hoddies es un sistema de información para la venta de ropa y accesorios para mascotas." href="https://petshoddies.000webhostapp.com" btn="Sitio Web"/>
                    </div>
                </section>
            
                <section id="section-certificados" className="w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
                    <div className="w-full">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-6"><i className="fa-solid fa-certificate text-2xl md:text-3xl px-3"></i> Certificados</h2>
                        <p className="text-lg text-gray-800"> A lo largo de mi aprendizaje autodidacta, he dedicado tiempo y esfuerzo para adquirir habilidades valiosas. 
                        Estos certificados son testimonio de mi compromiso con el crecimiento personal y la mejora continua:</p>
                    </div>
                    <div className="relative my-5 flex justify-center items-center">          
                        <button id="scrollRight" className="absolute top-20 right-[-12px] md:right-[-20px] lg:right-[-60px] bg-gray-200 p-3 px-4 rounded-full border-black"><i className="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
                        <button id="scrollLeft" className="absolute top-20 left-[-12px] md:left-[-20px] lg:left-[-60px] bg-gray-200 p-3 px-4 rounded-full border-black"><i className="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
                        <div id="scrollContainer" className="min-w-[230px] w-2/3 md:w-10/12 lg:w-full cartas-scroll flex gap-5 overflow-x-scroll touch-auto snap-x snap-mandatory scroll-smooth scroll-pl-[5px] md:scroll-pl-[15px]">
                            <Certificados nombre="Lenguaje de programación Python" institucion="Universidad Distrital" url="/certificados/python-u.pdf" />
                            <Certificados nombre="Programación con JavaScript" institucion="Movistar" url="/certificados/Programacion-JS.pdf" />
                            <Certificados nombre="Fundamentos de programación" institucion="Movistar" url="/certificados/Fundamentos-programación.pdf" />
                            <Certificados nombre="Construcción de Bases de datos con MYSQL" institucion="SENA" url="/certificados/CBDMYSQL.pdf" />
                            <Certificados nombre="Desarrollo Web con PHP" institucion="SENA" url="/certificados/Desarrollo-php.pdf" />
                            <Certificados nombre="Variables y estructuras de control en Python" institucion="SENA" url="/certificados/VyE-PYTHON.pdf" />
                            <Certificados nombre="Variables y estructuras de control en Java" institucion="SENA" url="/certificados/VyE-Java.pdf" />
                        </div>
                    </div>
                </section>

                <section id="section-sobre-mi" className="w-full mt-16 mx-auto container lg:max-w-4xl md:max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-6"><i className="fa-solid fa-user-check text-2xl md:text-3xl px-3"></i> Sobre mí</h2>
                    <article className="flex flex-col md:flex-row gap-6">

                        <div className="w-full md:w-2/3 flex flex-col gap-4 text-lg">
                            <p>Mi nombre es Andrés Gutiérrez Hurtado, empecé en programación cuando conocí de este ámbito en el colegio hace 3 años. Actualmente <strong className="text-sky-600">estoy estudiando en el programa ADSO del SENA</strong>.</p>
                            <p>Uno de mis mayores logros en este campo, <strong className="text-sky-600">es haber liderado el mejor proyecto de mi colegio</strong>. Ese proyecto es ahora el sitio web oficial de la empresa, y me ayudó mucho a aprender sobre desarrollo web.</p>
                            <p>Mi objetivo es desarrollar aplicativos web de la <strong className="text-sky-600">mayor calidad</strong>, y <strong className="text-sky-600">mejorar todo lo posible en este campo</strong>.</p>
                        </div>
                        <div className="w-full md:w-1/3 flex items-center justify-center">
                            <img src="/img/Foto-2.jpg" alt="Foto-secundaria" className="rounded-md shadow-xl rotate-6"/>
                        </div>
                        
                    </article>
                </section>

                <footer className="w-full mt-16 mx-auto container lg:max-w-4xl md:max-w-2xl"> 
                    <div className="flex flex-col md:flex-row justify-between py-1 px-5 rounded-full bg-zinc-100 text-zinc-600 font-semibold mb-14 shadow-lg">
                        <p className="w-full md:w-auto mb-2 md:mb-0">© 2024 Andrés Gutiérrez.</p>
                        <ul className="w-full md:w-auto flex gap-5">
                            <li><a href="#sobre-mi" className="hover:underline">Sobre mí</a></li>
                            <li><a href="mailto:andres52885241@gmail.com" target="_blank" className="hover:underline">Contacto</a></li>
                        </ul>
                    </div>            
                </footer>
            </main>
        </>
    )
}

export default App;
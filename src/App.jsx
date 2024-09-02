// Layouts
import Header from "./layouts/header.jsx";
import Footer from "./layouts/footer.jsx";

// Sections
import Hero from "./Components/hero.jsx";
import Projects from "./Components/projects.jsx";
import About from "./Components/about.jsx";
import Certificates from "./Components/certificates.jsx";

function App() {
    return (
        <>
            <Header />
            <main className="w-full px-3 flex flex-col gap-32">
                <Hero />
                <Projects />
                <Certificates />
                <About />
            </main>
            <Footer />
        </>
    );
}

export default App;

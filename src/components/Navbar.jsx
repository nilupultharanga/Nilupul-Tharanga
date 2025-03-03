import { useEffect } from "react"

export const Navbar=({menuOpen, setMenuOpen})=>{

    useEffect(()=>{
        document.body.style.overflow= menuOpen ? "hidden" : "";
    },[menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)]  border-b backdrop-filter backdrop-blur-sm border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4" >
                <div className="flex justify-between item-center h-16">
                
                    <a href="#home" className="text-xl font-bold text-white font-mono flex items-center">
                            Nilupul<span className="text-blue-500">.Tharanga</span>
                    </a>

                    {!menuOpen && (
                    <div
                        className="w-7 h-5 top-3 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                         {/* ara renponsive eka podi karanakota meke thiyana hamburger icon eka display wenw */}
                        &#9776;
                    </div>
                    )}

                    <div className="fixed top-5 right-10 hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            Home
                            {" "}
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            About
                            {" "}
                        </a>
                        <a href="#project" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            Projects
                            {" "}
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                            {" "}
                            Contact
                            {" "}
                        </a>
                    </div>

                </div>
            </div>
        </nav>
    )
}

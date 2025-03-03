import {RevealOnScroll} from '../RevealOnScroll';

export const About =()=>{
    const frontendSkills= [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "Ract.js", 
        "Angular",
        "Bootstrap",
    ];
    const backendSkills= [
        "node.js", 
        "Flask", 
        "Django", 
        "Laravel",
    ];

    return(
        <section 
        id="about"
        className="min-h-screen flex items-center justify-center py-20">

            <RevealOnScroll>

                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold md-4">
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech,key)=>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold md-4">
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech,key)=>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold md-4">🎓Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>Bachelor of Computer Science</strong><br />Trincomalee Campus, Eastern University of Sri Lanka
                                        <br />2021 – present </li>
                                    {/* <li></li> */}
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:border-blue-500/30 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold md-4">Certifications</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>JavaScript Algorithms and Data Structures</strong><br />freeCodeCamp
                                        <br />Sep 2023
                                    </li>
                                    <li>
                                        <strong>AI/ML Engineer - Stage 1</strong><br />SLIIT
                                        <br />Apr 2023
                                    </li>
                                    <li>
                                        <strong>Python</strong><br />Sololearn
                                        <br />Apr 2023
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
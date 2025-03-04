import {RevealOnScroll} from '../RevealOnScroll';

export const Project =()=>{
    return (
        <section
        id="project"
        className="min-h-screen flex item center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">🗨️ Chat App</h3>
                                <p className="text-gray-400 mb-4">
                                A real-time chat application built with React.js and Firebase, enabling seamless conversations with a simple and intuitive interface.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Firebase (Firestore)", "Context API",  ].map((tech, key)=>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://github.com/nilupultharanga/chat-app"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        {" "}
                                        View Project »
                                        {" "}
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">🎬 Netflix Clone</h3>
                                <p className="text-gray-400 mb-4">
                                This is a React-based web application that mimics the core functionalities of Netflix, including user authentication, movie browsing, and video playback. The project leverages Firebase for backend services and The Movie Database (TMDB) API for fetching movie data.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Firebase (Authentication, Firestore)", "The Movie Database (TMDB) API",  ].map((tech, key)=>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://github.com/nilupultharanga/Netflix-clone"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        {" "}
                                        View Project »
                                        {" "}
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">👩‍⚕️ Sentiment-analysis-for-mental-health</h3>
                                <p className="text-gray-400 mb-4">
                                Built a sentiment analysis tool using Python and machine learning techniques to analyze text data for mental health insights. The project helps in identifying emotional states from user inputs, aiding in mental health assessments
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["React", "Python", "Flask",  ].map((tech, key)=>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://github.com/nilupultharanga/sentiment-analysis-for-mental-health"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        {" "}
                                        View Project »
                                        {" "}
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                <h3 className="text-xl font-bold mb-2">🗣 Text-to-speech-converter</h3>
                                <p className="text-gray-400 mb-4">
                                A Chrome extension for converting text to speech with language and speed options Text to Speech Converter Chrome Extension.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {["HTML", "CSS", "javaScript",].map((tech, key)=>(
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a 
                                    href="https://github.com/nilupultharanga/text-to-speech-converter"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        {" "}
                                        View Project »
                                        {" "}
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                </RevealOnScroll>
        </section>
    )
}
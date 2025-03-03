export const Footer = () => {
    return (
      <footer className="border-t w-full border-white/10 shadow-lg text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section - Copyright */}
          <div className="text-center  md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </div>
  
          {/* Right Section - Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://web.facebook.com/tharanga.dilshan.923/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-blue-600 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/nilupul_tharang" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-blue-400 transition">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://github.com/nilupultharanga" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-pink-500 transition">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nilupul-tharanga-a2891b218/" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-blue-800 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
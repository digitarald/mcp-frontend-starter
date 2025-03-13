import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <Image
            src="/mcp-logo.svg"
            alt="MCP Training Logo"
            width={120}
            height={40}
            priority
          />
          <span className="font-[family-name:var(--font-geist-mono)] text-xs bg-blue-100 dark:bg-blue-900 px-2 py-0.5 rounded-full">BETA</span>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="#overview" className="hover:text-blue-600 dark:hover:text-blue-400">Overview</a>
          <a href="#curriculum" className="hover:text-blue-600 dark:hover:text-blue-400">Curriculum</a>
          <a href="#benefits" className="hover:text-blue-600 dark:hover:text-blue-400">Benefits</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-12">
        {/* Hero Section */}
        <section className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Master the <span className="text-blue-600 dark:text-blue-400">Model Context Protocol</span> for AI Development
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Unlock the full potential of AI integration with our comprehensive MCP training course for developers.
          </p>
          <div className="flex gap-4 mt-6 flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6"
              href="#signup"
            >
              Enroll Now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-6"
              href="#curriculum"
            >
              View Curriculum
            </a>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="flex flex-col gap-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">What is MCP?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            The Model Context Protocol is revolutionizing how AI models interact with external data sources and tools, 
            offering a standardized framework for seamless connectivity. In this program, you'll master the ins and 
            outs of MCP, learning how to create AI applications that can dynamically access real-time information, 
            perform actions, and leverage specialized tools.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            You'll gain hands-on experience with MCP's client-server architecture, explore pre-built servers, and learn 
            to develop custom integrations.
          </p>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="flex flex-col gap-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Module 1: Foundations</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                <li>MCP architecture and core concepts</li>
                <li>Client-server communication models</li>
                <li>Data structures and protocols</li>
                <li>Setting up your development environment</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Module 2: Implementation</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Building MCP clients from scratch</li>
                <li>Developing custom server integrations</li>
                <li>Error handling and debugging techniques</li>
                <li>Performance optimization strategies</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Module 3: Security & Best Practices</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Security best practices for AI data access</li>
                <li>Authentication and authorization</li>
                <li>Rate limiting and resource management</li>
                <li>Compliance and data privacy considerations</li>
              </ul>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Module 4: Advanced Applications</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Integrating MCP with popular AI frameworks</li>
                <li>Building multi-modal applications</li>
                <li>Leveraging external APIs and tools</li>
                <li>Capstone project implementation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="flex flex-col gap-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Why Take This Course?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-6 text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-300">
                  <path d="M12 16v-4"></path><path d="M12 8h.01"></path><circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Industry-Relevant Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Learn the latest techniques used by leading AI companies.</p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-300">
                  <rect width="18" height="10" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="16" y1="16" y2="16"></line>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Hands-On Projects</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Build real-world applications that integrate with AI models.</p>
            </div>
            <div className="p-6 text-center">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-300">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Expert Instruction</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Learn from industry professionals with extensive MCP experience.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="signup" className="max-w-4xl mx-auto w-full bg-blue-50 dark:bg-blue-900/30 p-8 rounded-xl">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-bold">Ready to become an MCP expert?</h2>
            <p className="max-w-md text-gray-600 dark:text-gray-300">
              By the end of the course, you'll be equipped to build scalable, context-aware AI solutions 
              that can effortlessly connect to databases, APIs, and tools.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 h-12 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button 
                type="submit"
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap gap-8 sm:gap-16 items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex gap-6">
          <a className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline" href="#">Terms</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline" href="#">Privacy</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline" href="#">Contact</a>
        </div>
        <div>© 2024 MCP Training. All rights reserved.</div>
      </footer>
    </div>
  );
}

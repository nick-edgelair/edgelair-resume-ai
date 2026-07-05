export default function Header() {
    return (
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
  
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-black">
              <span className="text-black">Edge</span>
              <span className="text-orange-500">lair</span>
            </h1>
  
            <span className="text-lg font-semibold text-gray-700">
              AI Resume
            </span>
          </div>
  
          <nav className="hidden gap-10 text-[15px] font-semibold text-gray-700 lg:flex">
            <a href="#">How It Works</a>
            <a href="#">Features</a>
            <a href="#">Examples</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </nav>
  
          <div className="flex gap-3">
            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold">
              Log In
            </button>
  
            <button className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200">
              Get Started
            </button>
          </div>
  
        </div>
      </header>
    );
  }
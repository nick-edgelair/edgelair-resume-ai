export default function Footer() {
    return (
      <footer className="bg-[#080808] px-8 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-zinc-800 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              <span className="text-white">Edge</span>
              <span className="text-orange-500">lair</span>
            </h2>
            <p className="mt-2 text-sm font-semibold text-zinc-400">
              Resume AI for modern professionals.
            </p>
          </div>
  
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-zinc-400">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
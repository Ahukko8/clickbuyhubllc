export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-(--border) backdrop-blur-md bg-[rgba(10,10,15,0.8)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-gold to-gold-light flex items-center justify-center">
            <span className="text-dark font-display font-800 text-sm">CB</span>
          </div>
          <span className="font-display font-bold text-white tracking-tight">
            ClickBuy Hub <span className="text-gold text-sm font-normal">LLC</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="/about" className="hover:text-gold transition-colors">About</a>
          <a href="mailto:hello@clickbuyhub.com" className="hover:text-gold transition-colors">Contact</a>
        </div>
        
        <a
          href="#pricing"
          className="text-sm px-4 py-2 rounded-full border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 font-medium"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
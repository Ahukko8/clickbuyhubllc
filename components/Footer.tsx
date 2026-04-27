export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-white">
          ClickBuy Hub <span className="text-gold text-sm font-normal">LLC</span>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} ClickBuy Hub LLC. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
          <a href="mailto:hello@clickbuyhub.com" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
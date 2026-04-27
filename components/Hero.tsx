export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 px-6 overflow-hidden noise-bg">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gold/8 blur-[80px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Professional Web Development Services
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-800 text-white leading-[0.95] mb-6">
          Elite Dev Services<br />
          <span className="gold-gradient">On Your Terms</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          From quick consultations to full-stack development — ClickBuy Hub LLC delivers
          expert engineering talent precisely when you need it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 bg-gold text-dark font-display font-700 rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105 animate-pulse-gold"
          >
            View Plans
          </a>
          <a
            href="mailto:hello@clickbuyhub.com"
            className="px-8 py-4 border border-white/10 text-white rounded-full hover:border-gold/50 transition-all duration-300"
          >
            Talk to an Expert
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '150+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gold">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
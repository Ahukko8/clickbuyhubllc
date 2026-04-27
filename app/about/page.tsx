import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const complianceItems = [
    'Incorporated and registered as a Limited Liability Company in the United States',
    'All payments processed through Stripe, a fully regulated and PCI-compliant payment processor',
    'Business banking maintained through Mercury — a US-based FDIC-insured business bank',
    'Service agreements and invoices issued for every engagement',
    'Tax obligations honored in accordance with applicable US federal and state requirements',
    'Operations conducted in observance of Maldivian foreign business and currency laws',
];

const values = [
    {
        icon: '🏛️',
        title: 'Legal & Compliant',
        body: 'ClickBuy Hub LLC is a registered US business entity. All engagements are conducted under clear terms, proper invoicing, and full compliance with applicable US and Maldivian law.',
    },
    {
        icon: '🤝',
        title: 'Honest by Default',
        body: 'No inflated promises, no mystery fees. You know exactly what you are paying for, what you will receive, and when. Transparency is the foundation every client relationship is built on.',
    },
    {
        icon: '🌏',
        title: 'Global Perspective',
        body: 'Having worked with clients across continents, we understand different markets, time zones, and expectations — and we adapt our delivery accordingly.',
    },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">

                {/* Hero */}
                <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

                    <div className="max-w-3xl mx-auto relative">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-8 tracking-widest uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            Our Story
                        </div>

                        <h1
                            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            Born in the Indian Ocean.
                            <br />
                            <span className="gold-gradient">Built for the World.</span>
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            ClickBuy Hub LLC began not in a Silicon Valley office, but on a
                            small island in the Maldives — where ambition runs deeper than
                            the ocean surrounding it.
                        </p>
                    </div>
                </section>

                {/* Founder */}
                <section className="py-20 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="rounded-2xl border border-white/10 bg-[#111118] p-10 md:p-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

                            <div className="flex items-start gap-4 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-gold to-gold-light flex items-center justify-center shrink-0">
                                    <span
                                        className="font-bold text-dark text-lg"
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                    >
                                        IA
                                    </span>
                                </div>
                                <div>
                                    <h2
                                        className="text-2xl font-bold text-white"
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                    >
                                        Ibrahim Ahuzam
                                    </h2>
                                    <p className="text-gold text-sm">
                                        Founder &amp; Lead Developer — ClickBuy Hub LLC
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-5 text-gray-400 leading-relaxed text-[15px] relative">
                                <p>
                                    Growing up in the Maldives, Ibrahim was surrounded by a
                                    country that runs on tourism, tradition, and tight-knit
                                    communities — not exactly the backdrop most people imagine
                                    for a tech entrepreneur. But Ibrahim saw something different:
                                    a gap between local talent and global opportunity.
                                </p>
                                <p>
                                    He started writing code at a young age, driven by the belief
                                    that where you are born should never determine how far you
                                    can go. While the Maldives is a small nation, its people
                                    carry a quiet resilience — and Ibrahim brought that same
                                    resilience to every project he took on, client by client,
                                    line of code by line of code.
                                </p>
                                <p>
                                    As his skills and clientele grew across borders, Ibrahim made
                                    the decision to formalize his work and launched{' '}
                                    <span className="text-white font-medium">
                                        ClickBuy Hub LLC
                                    </span>{' '}
                                    — a US-registered limited liability company, structured to
                                    operate transparently under both Maldivian commerce
                                    regulations and United States business law.
                                </p>
                                <p>
                                    This was not just a business move. It was a commitment — to
                                    every client, in every country — that ClickBuy Hub stands
                                    behind its work with real legal accountability, professional
                                    standards, and the kind of integrity that can only come from
                                    someone who built everything from the ground up.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="py-16 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2
                            className="text-3xl font-bold text-white mb-10 text-center"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            What We Stand For
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {values.map((value) => (
                                <div
                                    key={value.title}
                                    className="rounded-xl border border-white/10 bg-[#111118] p-6 hover:border-gold/30 card-glow transition-all duration-300"
                                >
                                    <div className="text-2xl mb-4">{value.icon}</div>
                                    <h3
                                        className="font-bold text-white text-lg mb-2"
                                        style={{ fontFamily: 'Syne, sans-serif' }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {value.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance */}
                <section className="py-16 px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 md:p-10">
                            <h3
                                className="text-xl font-bold text-white mb-4"
                                style={{ fontFamily: 'Syne, sans-serif' }}
                            >
                                A Note on Compliance
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                ClickBuy Hub LLC takes its legal obligations seriously. As a
                                US-based LLC founded by a Maldivian entrepreneur, we operate
                                at the intersection of two regulatory environments — and we
                                respect both.
                            </p>
                            <ul className="space-y-3">
                                {complianceItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                                        <span className="text-gold mt-0.5 shrink-0">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6 text-center">
                    <div className="max-w-xl mx-auto">
                        <h2
                            className="text-3xl font-bold text-white mb-4"
                            style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                            Ready to Build Something Real?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Whether you need a quick consultation or a dedicated developer
                            for months — we are ready when you are.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#pricing"
                                className="px-8 py-4 bg-gold text-dark font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-105"
                            >
                                View Pricing
                            </Link>
                            <Link href="mailto:hello@clickbuyhub.com"
                                className="px-8 py-4 border border-white/10 text-white rounded-full hover:border-gold/50 transition-all duration-300"
                            >
                                Send an Email
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}
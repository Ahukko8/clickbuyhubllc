'use client';
import { useState, useEffect } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { PLANS } from '@/lib/plans';

export default function PricingCards() {
  const [loading, setLoading] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    if (redirectUrl) {
      window.location.href = redirectUrl;
    }
  }, [redirectUrl]);

  const handleCheckout = async (plan: typeof PLANS[0]) => {
    setLoading(plan.id);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          planName: plan.name,
          planPrice: plan.price,
        }),
      });
      const data = await res.json();
      if (data.url) setRedirectUrl(data.url);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="gold-gradient">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just expert development services at clear rates.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl border p-8 card-glow transition-all duration-500 cursor-default
                ${plan.badge === 'Popular'
                  ? 'border-gold bg-linear-to-b from-gold/10 to-card-bg scale-105'
                  : 'border-white/10 bg-card-bg hover:border-gold/30'
                }
              `}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-dark text-xs font-display font-bold tracking-widest uppercase">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-display text-5xl font-800 text-white">${plan.price}</span>
                <span className="text-gray-500 text-sm ml-2">
                  {plan.id === 'fullstack' ? '/ 3 months' : 'one-time'}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan)}
                disabled={loading === plan.id}
                className={`
                  w-full py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-300
                  ${plan.badge === 'Popular'
                    ? 'bg-gold text-dark hover:bg-gold-light hover:scale-[1.02]'
                    : 'border border-gold/40 text-gold hover:bg-gold/10'
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2
                `}
              >
                {loading === plan.id ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
                ) : (
                  `Get ${plan.name}`
                )}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          🔒 Secured by Stripe · SSL encrypted · Money-back guarantee
        </p>
      </div>
    </section>
  );
}
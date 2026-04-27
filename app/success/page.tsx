import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-gold/20 border border-gold flex items-center justify-center mx-auto mb-6 text-3xl">
          ✓
        </div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Payment Successful!</h1>
        <p className="text-gray-400 mb-2">
          Thank you for choosing <span className="text-gold">ClickBuy Hub LLC</span>.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          We will reach out within 24 hours to get started. Check your email for confirmation.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gold text-dark rounded-full font-display font-semibold hover:bg-gold-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
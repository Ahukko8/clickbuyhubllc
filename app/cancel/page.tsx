import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mx-auto mb-6 text-3xl">
          ✕
        </div>
        <h1 className="font-display text-4xl font-bold text-white mb-4">Payment Cancelled</h1>
        <p className="text-gray-400 mb-8">
          No worries — your payment could not be processed. Return to pricing to try again.
        </p>
        <Link
          href="/#pricing"
          className="px-6 py-3 border border-gold text-gold rounded-full font-display font-semibold hover:bg-gold hover:text-dark transition-all"
        >
          View Plans Again
        </Link>
      </div>
    </main>
  );
}
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { planName, planPrice, planId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `ClickBuy Hub LLC — ${planName}`,
              description: getPlanDescription(planId),
            },
            unit_amount: planPrice * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}

function getPlanDescription(planId: string): string {
  const descriptions: Record<string, string> = {
    consultation: '60-minute expert consultation session',
    'code-review': 'Full codebase audit and security review',
    fullstack: 'Dedicated full-stack developer for 3 months',
  };
  return descriptions[planId] || '';
}
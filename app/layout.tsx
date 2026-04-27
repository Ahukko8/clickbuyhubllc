import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClickBuy Hub LLC — Professional Web Dev Services',
  description: 'Expert consultation, code review, and full-stack development services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
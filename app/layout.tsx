import './globals.css';
import { Nunito } from 'next/font/google'; // 폰트 추가
import type { Metadata } from 'next';
import { Navbar } from './components';

export const metadata: Metadata = {
  title: 'Airbnb', // 브라우저 랜더시 타이틀
  description: 'Airbnb Clone', // 설명
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

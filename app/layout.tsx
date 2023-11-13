import './globals.css';
import { Nunito } from 'next/font/google'; // 폰트 추가
import type { Metadata } from 'next';
import { ClientOnly, Navbar, RegisterModal } from './components';
import { ToasterProvider } from './providers';

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
        <ClientOnly>
          <ToasterProvider />
          {/* Toaster를 바로 가져오면 해당 컴포넌트는 useEffect 등을 사용해야 하기 때문에 
          레이아웃 컴포넌트에서는 사용이 불가능.
          그래서 use client인 provider 컴포넌트를 하나 만들어주고 가져와야 사용 가능? */}
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

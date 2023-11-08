'use client';
/* 얘가 없으면 아래와 같은 에러가 발생함
You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.
Learn more: https://nextjs.org/docs/getting-started/react-essentials
*/

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

export const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';

const AuthContext = createContext<{ user: User | null; loading: boolean }>({ user: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log('AuthProvider: useEffect triggered');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('AuthProvider: onAuthStateChanged user =', user);
      setUser(user);
      setLoading(false);
      if (!user && pathname !== '/login') {
        console.log('AuthProvider: redirecting to /login');
        router.push('/login');
      }
    }, (error) => {
      console.error('AuthProvider: onAuthStateChanged error =', error);
      setLoading(false);
    });
    return unsubscribe;
  }, [router, pathname]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? <div>Carregando...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

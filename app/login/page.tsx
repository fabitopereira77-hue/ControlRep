'use client';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/');
    } catch (err) {
      setError('Erro ao fazer login com Google.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded shadow-md space-y-4">
        <h2 className="text-xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handleGoogleLogin} className="w-full bg-blue-900 text-white p-2 rounded">Entrar com Google</button>
      </div>
    </div>
  );
}

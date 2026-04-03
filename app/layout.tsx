import type {Metadata} from 'next';
import './globals.css';
import Link from 'next/link';
import { ShoppingCart, Folder, DollarSign, List, MessageSquare, BookOpen, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ControlRep',
  description: 'Plataforma de gestão para representantes comerciais.',
};

const navItems = [
  { name: 'Pedidos', path: '/pedidos', icon: ShoppingCart },
  { name: 'Representadas', path: '/representadas', icon: Folder },
  { name: 'Comissões', path: '/comissoes', icon: DollarSign },
  { name: 'Catálogo', path: '/catalogo', icon: List },
  { name: 'Comunicação', path: '/comunicacao', icon: MessageSquare },
  { name: 'Treinamento', path: '/treinamento', icon: BookOpen },
  { name: 'Configurações', path: '/configuracoes', icon: Settings },
];

import { AuthProvider } from '@/components/auth-provider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <header className="bg-blue-900 text-white p-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-orange-500 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-sm"></div> {/* Placeholder para logo */}
                ControlRep
              </Link>
              <ul className="flex space-x-4 text-sm">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-orange-500 flex items-center gap-1">
                      <item.icon size={16} />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <footer className="bg-blue-900 text-white p-4 text-center">
            &copy; 2026 ControlRep
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}

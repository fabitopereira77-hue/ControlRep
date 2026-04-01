'use client';
import Link from 'next/link';
import { LayoutDashboard, Users, Building, FileText, MessageSquare, Settings } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const adminNav = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Usuários', path: '/admin/usuarios', icon: Users },
  { name: 'Representadas', path: '/admin/representadas', icon: Building },
  { name: 'Relatórios', path: '/admin/relatorios', icon: FileText },
  { name: 'Comunicação', path: '/admin/comunicacao', icon: MessageSquare },
  { name: 'Configurações', path: '/admin/configuracoes', icon: Settings },
];

export default function AdminLayout({children}: {children: React.ReactNode}) {
  const { user, role, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || role !== 'admin')) {
      router.push('/login');
    }
  }, [user, role, loading, router]);

  if (loading || !user || role !== 'admin') {
    return <div className="p-8">Carregando...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-primary text-white p-6">
        <h2 className="text-xl font-bold text-secondary mb-8">Admin ControlRep</h2>
        <nav className="space-y-4">
          {adminNav.map((item) => (
            <Link key={item.name} href={item.path} className="flex items-center gap-3 hover:text-secondary">
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-grow p-8">{children}</main>
    </div>
  );
}

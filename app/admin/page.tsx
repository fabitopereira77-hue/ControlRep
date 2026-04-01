import { LayoutDashboard, Users, Building, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';

const adminFeatures = [
  { name: 'Gestão de Usuários', path: '/admin/usuarios', icon: Users, desc: 'Representantes e permissões' },
  { name: 'Controle de Representadas', path: '/admin/representadas', icon: Building, desc: 'Empresas e catálogos' },
  { name: 'Relatórios Gerais', path: '/admin/relatorios', icon: FileText, desc: 'KPIs e exportação' },
  { name: 'Comunicação Corporativa', path: '/admin/comunicacao', icon: MessageSquare, desc: 'Comunicados e chat' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Painel Administrativo</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {adminFeatures.map((f) => (
          <Link href={f.path} key={f.name} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-secondary">
            <div className="flex items-center gap-3 mb-3">
              <f.icon className="text-secondary" size={32} />
              <h3 className="text-xl font-semibold text-primary">{f.name}</h3>
            </div>
            <p className="text-gray-600">{f.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { ShoppingCart, Folder, DollarSign, List, MessageSquare, BookOpen } from 'lucide-react';

const features = [
  { name: 'Pedidos', path: '/pedidos', icon: ShoppingCart, desc: 'Gestão de pedidos' },
  { name: 'Representadas', path: '/representadas', icon: Folder, desc: 'Controle por empresa' },
  { name: 'Comissões', path: '/comissoes', icon: DollarSign, desc: 'Cálculo e metas' },
  { name: 'Catálogo', path: '/catalogo', icon: List, desc: 'Produtos e preços' },
  { name: 'Comunicação', path: '/comunicacao', icon: MessageSquare, desc: 'Chat e comunicados' },
  { name: 'Treinamento', path: '/treinamento', icon: BookOpen, desc: 'Cursos e materiais' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Bem-vindo ao Comissio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
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

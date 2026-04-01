'use client';
import { useState } from 'react';
import { Save, RotateCcw } from 'lucide-react';

export default function Configuracoes() {
  const [appName, setAppName] = useState('ControlRep');
  const [logoUrl, setLogoUrl] = useState('');

  const handleSave = () => {
    // Lógica para salvar no Firestore
    alert('Configurações salvas!');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-primary">Configurações</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-xl font-semibold">Identidade Visual</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome do Aplicativo</label>
          <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL do Logotipo</label>
          <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        
        <div className="flex gap-4">
          <button onClick={handleSave} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90">
            <Save size={18} /> Salvar Alterações
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
            <RotateCcw size={18} /> Restaurar Padrão
          </button>
        </div>
      </div>
    </div>
  );
}

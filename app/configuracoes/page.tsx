'use client';
import { useState } from 'react';

export default function Configuracoes() {
  const [appName, setAppName] = useState('ControlRep');

  const handleSave = () => {
    // Lógica para salvar no Firestore
    alert(`Configurações salvas: ${appName}`);
  };

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Configurações ⚙️</h2>
      <div className="space-y-4">
        <label className="block">
          Nome do App:
          <input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} className="w-full p-2 border rounded" />
        </label>
        <button onClick={handleSave} className="bg-blue-900 text-white px-4 py-2 rounded">Salvar</button>
      </div>
    </div>
  );
}

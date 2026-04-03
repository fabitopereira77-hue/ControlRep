'use client';
import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function FileUpload({ onUpload }: { onUpload: (file: File) => void }) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded bg-gray-50">
      <input type="file" onChange={handleFileChange} className="text-sm" />
      <button onClick={handleUpload} disabled={!file} className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded disabled:bg-gray-400">
        <Upload size={16} /> Enviar
      </button>
    </div>
  );
}

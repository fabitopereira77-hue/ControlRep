'use client';
import { useState } from 'react';
import FileUpload from '@/components/file-upload';

export default function Treinamento() {
  const [files, setFiles] = useState<File[]>([]);
  const handleUpload = (file: File) => setFiles([...files, file]);

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Treinamento 📚</h2>
      <FileUpload onUpload={handleUpload} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Arquivos Enviados:</h3>
        <ul className="list-disc pl-5">
          {files.map((file, index) => <li key={index} className="text-gray-700">{file.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

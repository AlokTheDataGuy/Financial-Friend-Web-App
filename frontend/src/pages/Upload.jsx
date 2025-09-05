import { useState } from "react";
import { API_BASE_URL } from './config.js';

// Use API_BASE_URL instead of hardcoded localhost
export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API_BASE_URL}/analyze`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data); // Later route to report page
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Upload Your Statement</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
        Analyze
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { storage, db } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!image) return;

    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytes(storageRef, image);

    uploadTask
      .then(() => {
        getDownloadURL(storageRef).then((url) => {
          addDoc(collection(db, 'picsDb'), {
            descricao: "Uma descrição da sua imagem",
            link: url,
            name: image.name,
            data: new Date().toLocaleDateString(),
          });

          setProgress(100);
        });
      })
      .catch((error) => console.error('Erro ao fazer upload:', error));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {progress > 0 && <p>Progresso: {progress}%</p>}
    </div>
  );
};

export default UploadImage;

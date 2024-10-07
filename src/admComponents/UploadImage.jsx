import React, { useState } from 'react';
import { storage, db } from '../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import uploadImage from '../rsc/uploarIcon.png'
import confirmIcon from '../rsc/confimIcon.png'
import '../css/UploadImage.css';

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [imageName, setImageName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
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
    <div id='upload-container'>
      <label htmlFor='select-file' className="custom-file-label">
        <img src={uploadImage} alt='Icone de Upload' id='upload-button'/>
      </label>
      <input type="file" onChange={handleFileChange} id='select-file'/>
      {imageName && <p id='file-name'>Arquivo selecionado: {imageName}</p>}
      <img onClick={handleUpload} src={confirmIcon} alt='Confirm button' id='confirm-button'/>
      {progress > 0 && <p>Progresso: {progress}%</p>}
    </div>
  );
};

export default UploadImage;
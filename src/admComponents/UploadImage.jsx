import React, { useState } from 'react';
import { storage, db } from '../firebase/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import uploadImage from '../rsc/uploarIcon.png';
import confirmIcon from '../rsc/confimIcon.png';
import '../css/UploadImage.css';

const UploadMedia = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setFileType(selectedFile.type.startsWith('image/') ? 'image' : 'video');
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const folder = fileType === 'image' ? 'images' : 'videos';
    const storageRef = ref(storage, `${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error('Erro ao fazer upload:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addDoc(collection(db, fileType === 'image' ? 'picsDb' : 'videoDb'), {
            descricao: `Uma descrição do seu ${fileType}`,
            link: url,
            name: file.name,
            data: new Date().toLocaleDateString(),
          });

          setProgress(100);
        });
      }
    );
  };

  return (
    <div id='upload-container'>
      <label htmlFor='select-file' className="custom-file-label">
        <img src={uploadImage} alt='Ícone de Upload' id='upload-button' />
      </label>
      
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        id='select-file'
      />
      
      {fileName && <p id='file-name'>Arquivo selecionado: {fileName}</p>}
      
      <img
        onClick={handleUpload}
        src={confirmIcon}
        alt='Botão de confirmação'
        id='confirm-button'
        style={{ cursor: file ? 'pointer' : 'not-allowed' }}
      />
      
      {progress > 0 && <p>Progresso: {progress}%</p>}
    </div>
  );
};

export default UploadMedia;

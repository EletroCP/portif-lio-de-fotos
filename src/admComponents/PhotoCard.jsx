import React from 'react';
import { db } from '../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

const PhotoCard = ({ photo }) => {
  const handleDelete = async () => {
    const photoDocRef = doc(db, 'picsDb', photo.id);

    try {
      await deleteDoc(photoDocRef);
      console.log('Foto excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir a foto: ', error);
    }
  };

  return (
    <div id="photo-card">
      <img src={photo.link} alt={photo.descricao} id='photo-card-image'/>
      <p id='photo-card-data'>{photo.data}</p>
      <button onClick={handleDelete} id='photo-card-delete'>Excluir Foto</button>
    </div>
  );
};

export default PhotoCard;

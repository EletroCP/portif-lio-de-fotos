import React from 'react';
import { db } from '../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import deletIcon from '../rsc/deletIcon.png';

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
      <img src={photo.link} alt={photo.descricao} className='photo-card-image'/>
      <div id='info-container'>
        <p id='photo-card-data'>{photo.data}</p>
        <img src={deletIcon} alt='Botão de deletar' onClick={handleDelete} className='photo-card-delete' />
      </div>
    </div>
  );
};

export default PhotoCard;

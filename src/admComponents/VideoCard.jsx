import React from 'react';
import { db } from '../firebase/firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import deletIcon from '../rsc/deletIcon.png';
import '../css/VideoCard.css';

const VideoCard = ({ video }) => {
  const handleDelete = async () => {
    const videoDocRef = doc(db, 'videoDb', video.id);
    try {
      await deleteDoc(videoDocRef);
      console.log('Vídeo excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o vídeo: ', error);
    }
  };

  return (
    <div id="video-card">
      <video width={350}controls className="video-card-video">
        <source src={video.link} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div id="info-container">
        <p id="video-card-data">{video.data}</p>
        <img src={deletIcon} alt="Botão de deletar" onClick={handleDelete} className="video-card-delete" />
      </div>
    </div>
  );
};

export default VideoCard;

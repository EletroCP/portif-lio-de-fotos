import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import '../css/Videos.css';

const Videos = () => {

  const { vidsDb } = useContext(Context);

  return (
    <div id="videos-main-container">
      <h1 id="galery-title">Vídeos da Shiva</h1>
      <div id="galery-container">
        {
          vidsDb.map(({ id, link, data }) => (
            <div key={id} className="video-card-container">
              <video controls className='video-card-video'>
                <source src={link} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
              <p className='video-card-data'>{data}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Videos;

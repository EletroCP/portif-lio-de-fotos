import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import '../css/Galery.css';

const Photos = () => {
  const { picsDb } = useContext(Context);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const closeModal = () => setSelectedPhoto(null);

  const handleNext = () => {
    if (selectedPhoto.index < picsDb.length - 1) {
      setSelectedPhoto({
        ...picsDb[selectedPhoto.index + 1],
        index: selectedPhoto.index + 1
      });
    }
  };

  const handlePrev = () => {
    if (selectedPhoto.index > 0) {
      setSelectedPhoto({
        ...picsDb[selectedPhoto.index - 1],
        index: selectedPhoto.index - 1
      });
    }
  };

  return (
    <div id="photos-main-container">
      <h1 id="galery-title">Fotos da Shiva</h1>
      <div id="galery-container">
        {picsDb.map(({ id, link, descricao, data }, index) => (
          <div
            key={id}
            className="photo-card-container"
            onClick={() =>
              setSelectedPhoto({ id, link, descricao, data, index })
            }
          >
            <img src={link} alt={descricao} className="photo-card-image" />
            <p className="photo-card-data">{data}</p>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedPhoto.link}
              alt={selectedPhoto.descricao}
              className="fullscreen-photo"
            />
            <button className="prev-btn" onClick={handlePrev} disabled={selectedPhoto.index === 0}>
              &#9664;
            </button>
            <button className="next-btn" onClick={handleNext} disabled={selectedPhoto.index === picsDb.length - 1}>
              &#9654;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;

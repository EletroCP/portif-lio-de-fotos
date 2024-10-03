import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import '../css/Galery.css';
const Photos = () => {
  const { picsDb } = useContext(Context);

  return(
    <div id="photos-main-container">
      <h1 id="galery-title">Fotos da Praia</h1>
      <div id="galery-container">
        {
          picsDb.map(({id, link, descricao, data}) => (
            <div key={id} className="photo-card-container">
              <img src={link} alt={descricao} className='photo-card-image'/>
              <p className='photo-card-data'>{data}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Photos;
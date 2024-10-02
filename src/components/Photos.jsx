import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

const Photos = () => {
  const { picsDb } = useContext(Context);

  return(
    <div id="photos-main-container">
      {
        picsDb.map(({id, link, descricao}) => (
          <div key={id}>
            <img src={link} alt={descricao} className='photo-card-image'/>
            <p id='photo-card-description'>{descricao}</p>
          </div>
        ))
      }
    </div>
  )
};

export default Photos;
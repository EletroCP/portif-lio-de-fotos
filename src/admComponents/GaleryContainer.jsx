import React, { useContext } from "react";
import PhotoCard from './PhotoCard'
import { Context } from "../context/ContextProvider";

const GaleryContainer = () => {

const { picsDb } = useContext(Context);

	return(
		<div id='images-container'>
			{picsDb.map((photo) => (
			<div key={photo.id} className='photo-card'>
					<PhotoCard id={photo.id} photo={photo} />
			</div>
			))}
		</div>
	)
};

export default GaleryContainer;
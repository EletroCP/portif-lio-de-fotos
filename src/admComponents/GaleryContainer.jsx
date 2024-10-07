import React, { useContext } from "react";
import PhotoCard from './PhotoCard'
import { Context } from "../context/ContextProvider";
import VideoCard from "./VideoCard";

const GaleryContainer = () => {

const { picsDb } = useContext(Context);
const { vidsDb } = useContext(Context);


	return(
		<div id='images-container'>
			{console.log(vidsDb)}
			{picsDb.map((photo) => (
			<div key={photo.id} className='photo-card'>
					<PhotoCard id={photo.id} photo={photo} />
			</div>
			))}

			{vidsDb.map((video) => (
			<div key={video.id} className='photo-card'>
					<VideoCard id={video.id} video={video} />
			</div>
			))}
		</div>
	)
};

export default GaleryContainer;
import '../css/App.css';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/ContextProvider';
import UploadImage from './UploadImage';
import PhotoCard from './PhotoCard';
import EditableTitle from './EditableText';
import Title from './Title';

function App() {
  useEffect(() => {
  document.title = 'MyPicfolio'
  }, []);

  const picsDb = useContext(Context);

  return (
    <div className="App">
      <header>
        <EditableTitle title="Fotos tiradas por:" textValue='Texto padrão'/>
        <EditableTitle title='Patrocinado por' textValue='Texto padrão'/>
      </header>
      <div id='main-body-title-container'>
        <Title titleText='Fotos' />
      </div>
      <UploadImage/>
      <div id='images-container'>
        {picsDb.map((photo) => (
          <div key={photo.id} className='image-container'>
            <PhotoCard id={photo.id} photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import '../css/App.css';
import { useContext, useEffect } from 'react';
import { Context } from '../context/ContextProvider';
import EditableTitle from '../components/EditableText';
import TitleEditable from '../components/TitleEditable'
import UploadImage from '../components/UploadImage'
import PhotoCard from '../components/PhotoCard'

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
        <TitleEditable titleText='Fotos' />
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

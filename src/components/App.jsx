import logo from '../rsc/logo.svg';
import '../css/App.css';
import { useContext, useEffect } from 'react';
import { Context } from '../context/ContextProvider';
import UploadImage from './UploadImage';

function App() {
  useEffect(() => {
  document.title = 'MyPicfolio'
  }, []);

  const picsDb = useContext(Context);
  console.log(picsDb)
  return (
    <div className="App">
      <header>
        <div id='header-name-container'>
          <h3 id='header-name-title'>Fotos tiradas por:</h3>
          <p id='header-name'>Exemplo</p>
        </div>
        <div id='header-sponsorship-container'>
          <h3 id='header-sponsorship-title'>Patrocinado por:</h3>
          <p id='header-sponsorship'>Exemplo</p>
        </div>
      </header>
      <div id='main-body-title-container'>
        <h1 id='main-body-title'>
          Fotos
        </h1>
      </div>
      <UploadImage/>
      <div id='images-container'>
        {picsDb.map(({name, descricao, link, data}, index) => (
          <div key={`${name}-${index}`} className='image-container'>
            <img alt={descricao} src={link} />
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

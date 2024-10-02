import '../css/App.css';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/ContextProvider';
import UploadImage from './UploadImage';

function App() {
  useEffect(() => {
  document.title = 'MyPicfolio'
  }, []);

  const picsDb = useContext(Context);

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingSponsorshipName, setIsEditingSponsorshipName] = useState(false);

  const [text, setText] = useState('Texto padrão');
  const [sponsorshiptText, setSponsorshipText] = useState('Texto padrão');

  const handleTextChange = ({target}) => {
    setText(target.value);
  };

  const handleSponsorshipTextChange = ({ target }) => {
    setSponsorshipText(target.value)
  };

  const toggleEditing = () => {
    setIsEditingName(!isEditingName);
  };

  const toggleSponsorshipEdditing = () => {
    setIsEditingSponsorshipName(!isEditingSponsorshipName);
  };

  return (
    <div className="App">
      <header>
        <div id='header-name-container'>
          <h3 id='header-name-title'>Fotos tiradas por:</h3>
          {isEditingName ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={toggleEditing}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              toggleEditing();
            }
          }}
        />
      ) : (
        <p onClick={toggleEditing}>{text}</p>
      )}
          
        </div>
        <div id='header-sponsorship-container'>
          <h3 id='header-sponsorship-title'>Patrocinado por:</h3>
          {isEditingSponsorshipName ? (
            <input
              type='text'
              value={sponsorshiptText}
              onChange={handleSponsorshipTextChange}
              onBlur={toggleSponsorshipEdditing}
              onKeyPress={({key}) => {
                if(key === 'Enter') {
                  toggleSponsorshipEdditing();
                };
              }}
            />
          ) : (
            <p onClick={toggleSponsorshipEdditing}>{sponsorshiptText}</p>
          )

          }
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

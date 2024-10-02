import React, { useEffect, useState } from "react";

const EditableTitle = ({ title, textValue }) => {

  const [isEditingName, setIsEditingName] = useState(false);

  const [text, setText] = useState(textValue);
  
  useEffect(() => {
    setText(textValue);
  }, [textValue]);

  const handleTextChange = ({target}) => {
    setText(target.value);
  };

  const toggleEditing = () => {
    setIsEditingName(!isEditingName);
  };

    return (
        <div className={`name-container`}>
          <h3 className='header-name-title'>{ title }</h3>
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
    )
};

export default EditableTitle
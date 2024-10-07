import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase/firebase';
import { useFirestoreCollection } from '../firebase/CRUDFirebase'; 
export const Context = createContext();

function ContextProvider({ children }) {
  const [picsDb, setPicsDb] = useState([]);
  const [galeryDb, setGaleryDb] = useState([]);

  const getPicsCollection = useFirestoreCollection(db, 'picsDb');
  const getGaleryCollection = useFirestoreCollection(db, 'galery');

  useEffect(() => {
    const fetchCollections = async () => {
      const dataPics = await getPicsCollection();
      const dataGalery = await getGaleryCollection();

      setPicsDb(dataPics);
      setGaleryDb(dataGalery);
    };

    fetchCollections();
  }, [getPicsCollection, getGaleryCollection]);

  const value = {
    picsDb,
    galeryDb
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

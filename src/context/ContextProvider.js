import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { db } from '../firebase/firebase';
import { useFirestoreCollection } from '../firebase/CRUDFirebase'; 
export const Context = createContext();

function ContextProvider({ children }) {
  const [picsDb, setPicsDb] = useState([]);
  const [galeryDb, setGaleryDb] = useState([]);
  const [vidsDb, setVidsDb] = useState([]);

  const getPicsCollection = useFirestoreCollection(db, 'picsDb');
  const getVidsCollection = useFirestoreCollection(db, 'videoDb');
  const getGaleryCollection = useFirestoreCollection(db, 'galery');

  useEffect(() => {
    const fetchCollections = async () => {
      const dataPics = await getPicsCollection();
      const dataGalery = await getGaleryCollection();
      const dataVids = await getVidsCollection();

      setPicsDb(dataPics);
      setGaleryDb(dataGalery);
      setVidsDb(dataVids);
    };

    fetchCollections();
  }, [getPicsCollection, getGaleryCollection, getVidsCollection]);

  const value = {
    picsDb,
    galeryDb,
    vidsDb
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

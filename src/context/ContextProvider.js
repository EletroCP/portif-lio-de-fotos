import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const Context = createContext();

function ContextProvider({ children }) {

  const [picsDb, setPicsDb] = useState([]);

  const picsCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getpics = async () => {
      const data = await getDocs(picsCollectionRef);
      setPicsDb(data.docs.map(doc => doc.data()));
    };

    getpics();
  }, []);

  return (
    <Context.Provider
      value={ picsDb }
    >
      { children }
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
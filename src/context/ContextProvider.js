import React, { useEffect, useMemo, useState } from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';

export const Context = createContext();

function ContextProvider({ children }) {
  const [picsDb, setPicsDb] = useState([]);

  
  const picsCollectionRef = useMemo(() => {
    const picsFirebaseRef = collection(db, 'picsDb');
    
    return picsFirebaseRef;
  }, []);

  useEffect(() => {
    const getpics = async () => {
      const data = await getDocs(picsCollectionRef);
      setPicsDb(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getpics();
  }, [picsCollectionRef]);

  return (
    <Context.Provider value={picsDb}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

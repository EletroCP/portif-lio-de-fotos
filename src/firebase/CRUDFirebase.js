import { getDocs, collection } from 'firebase/firestore';
import { useMemo, useCallback } from 'react';

export const useFirestoreCollection = (db, collectionName) => {
  const collectionRef = useMemo(() => collection(db, collectionName), [db, collectionName]);

  const getCollectionData = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collectionRef);
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return data;
    } catch (error) {
      console.error('Error fetching collection: ', error);
      return [];
    }
  }, [collectionRef]);

  return getCollectionData;
};

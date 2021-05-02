// import "firebase/firestore";
import { useState, useEffect } from "react";
import { useMounted } from "./useMounted";
export const useSnapshotCollection = (query) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const mounted = useMounted();

  useEffect(() => {
    const unsubscribe = query.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      mounted.current && setData(data);
      setLoading && mounted.current && setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { data, loading };
};

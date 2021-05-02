import firebase from "firebase/app";
import "firebase/firestore";
import { useState, useEffect } from "react";
import { useMounted } from "./useMounted";
export const useSnapshotDoc = (query) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const mounted = useMounted();

  useEffect(() => {
    const unsubscribe = query.onSnapshot((doc) => {
      mounted.current && setData(doc);
      setLoading && mounted.current && setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { data, loading };
};

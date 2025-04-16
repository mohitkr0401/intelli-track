import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined); //useFormState
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // const fn = async (...args) => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const response = await cb(...args);
  //     setData(response);
  //     setError(null);
  //   } catch (error) {
  //     setError(error);
  //     toast.error(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await cb(...args);
      console.log("💬 useFetch received:", response); // DEBUG
  
      if (response?.success) {
        setData(response); // ✅ this should trigger your useEffect
      } else {
        setError(response?.error || "Something went wrong");
      }
    } catch (error) {
      setError(error);
      toast.error(error.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };
  

  return { data, loading, error, fn, setData };
};

export default useFetch;
import { useState } from "react";

const useMutation = () => {
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);

      const mutate = async (func) => {
            setLoading(true);
            setError(null);
            setData(null);
            try {
                  const result = await func();
                  setData(() => result);
                  return result;
            } catch (err) {
                  console.log("Error from mutation", err);
                  const errorMessage = err?.message || "An error occurred";
                  setError(() => errorMessage);
                  setData(null)
                  return null;
            } finally {
                  setLoading(false);
            }
      };

      return { mutate, data, loading, error };
};

export default useMutation;

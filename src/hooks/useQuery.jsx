import React, { useCallback } from 'react';

const useQuery = (queryFn) => {
      const [isPending, setIsPending] = React.useState(true);
      const [data, setData] = React.useState(null);
      const [error, setError] = React.useState(null);

      const fetchQuery = useCallback(async () => {
            setIsPending(true);
            setError(null);
            try {
                  const result = await queryFn();
                  setData(result);
            } catch (err) {
                  setError(err);
            } finally {
                  setIsPending(false);
            }
      }, []);
      React.useEffect(() => {
            fetchQuery(); // Automatically fetch on mount or queryFn change
      }, []);

      return { isPending, data, error, refetch: fetchQuery };
};

export default useQuery;

const useFetch = (endpoint) => {
      const fetchUser = async (methods, _token) => {
            const token = _token ?? localStorage.getItem("token");

            let response, data;

            try {
                  response = await fetch(endpoint, {
                        headers: { Authorization: `Token ${token}` },
                        ...methods,
                  });

                  data = await response.json();
            } catch (error) {
                  throw new Error("Network error. Please try again later.");
            }

            if (!response.ok) {
                  let stringifiedData;
                  try {
                        stringifiedData = JSON.stringify(data);
                  } catch (error) {
                        throw new Error(`Error ${response.status}: Unable to parse response.`);
                  }

                  throw new Error(`Error ${response.status}: ${stringifiedData}`);
            }

            return data;
      };

      return { fetchUser };
};

export default useFetch;

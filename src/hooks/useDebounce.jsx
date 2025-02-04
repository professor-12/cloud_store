import { useEffect, useState } from "react";

const useDebounce = (value, time) => {
      const [state, setState] = useState(value);

      useEffect(() => {
            const timeout = setTimeout(() => {
                  setState(value);
            }, time);

            return () => clearTimeout(timeout);
      }, [value, time]);

      return state;
};

export default useDebounce;

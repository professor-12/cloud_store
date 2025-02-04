import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
      const [searchParams, setSearchParams] = useSearchParams();
      const [state, setState] = useState(searchParams.get("q") || "");
      const debouncedValue = useDebounce(state, 1000);
      const navigate = useNavigate();

      useEffect(() => {
            if (debouncedValue.trim().length == 0) return;

            const newParams = new URLSearchParams(searchParams);
            newParams.set("q", debouncedValue);

            navigate(`search/?${newParams.toString()}`);
      }, [debouncedValue]);

      return (
            <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="focus:outline-none focus:border-primary placeholder:text-muted-foreground border-border border text-card-foreground p-2 px-4  lg:w-[30rem] rounded-full"
            ></input>
      );
};

export default Search;

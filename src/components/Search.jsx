import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
      const [searchParams, setSearchParams] = useSearchParams();
      const [state, setState] = useState(searchParams.get("q") || "");
      const debouncedValue = useDebounce(state, 1000);
      const navigate = useNavigate();
      const location = useLocation()
      useEffect(() => {
            if (debouncedValue.trim().length == 0) {
                  if (!location.pathname.includes("search")) {
                        return
                  }
                  navigate(-1)
                  return;
            }
            const newParams = new URLSearchParams(searchParams);
            newParams.set("q", debouncedValue);

            navigate(`search/?${newParams.toString()}`, { replace: true });

      }, [debouncedValue]);

      console.log(location.pathname.includes("search"))

      return (
            <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="focus:outline-none focus:border-primary max-sm:hidden flex-1 mx-4 min-w-0 placeholder:text-muted-foreground border-border border text-card-foreground p-2 px-4  max-w-[40rem] rounded-full"
            ></input>
      );
};

export default Search;

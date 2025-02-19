import { useSearchParams } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import useMutation from "../hooks/useMutation";
import FileCard from "../components/FileCard"
import Loaading from "../components/Loading"
import { BASE_URL } from "../lib/constants";

const Search = () => {
      const [searchParams] = useSearchParams();
      const query = searchParams.get("q");
      const { fetchUser } = useFetch(BASE_URL + "/api/search/?search=" + query)
      const { data, error, loading, mutate } = useMutation()
      useEffect(() => {
            mutate(fetchUser)
      }, [query])

      return <div className="p-8 text-secondary-foreground space-y-8">
            <h1 className="text-accent-foreground/70 text-3xl font-medium">Search Results</h1>
            {
                  loading ? <Loaading /> :
                        data?.length > 0 ?
                              <div className="w-full grid grid-cols-3 gap-3">
                                    {
                                          data?.map((file) => {
                                                return <FileCard data={file} key={file.id} />
                                          })}
                              </div> : <div className="text-accent-foreground">No Results Found</div>
            }
      </div>;
};

export default Search;

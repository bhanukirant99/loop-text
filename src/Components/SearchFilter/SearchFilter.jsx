import { Search, Filter } from "..";
export const SearchFilter = ({ searchText, setSearchText, setStatus }) => {
  return (
    <div className="search-filter flex border-2 grey-red-300 lg:mx-96  justify-between m-2 my-5">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Filter setStatus={setStatus} />
    </div>
  );
};
